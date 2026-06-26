import { buildFromDdl, literal, rawExpr, TypeKind } from '@netcracker/qubership-apihub-ddlapi'
import { DdlApiSpecTransformer } from '../../src/building-service/ddlapi/shared/ddl-api-spec-transformer'
import { formatDdlExpr } from '../../src/shared/ddlapi/format-ddl-expr'
import { createBuildingServiceLogger } from '../../src/loggers'

describe('formatDdlExpr', () => {
  it('formats literal expressions', () => {
    expect(formatDdlExpr(literal('true'))).toBe('true')
  })

  it('formats raw expressions', () => {
    expect(formatDdlExpr(rawExpr('gen_random_uuid()'))).toBe('gen_random_uuid()')
  })
})

describe('DdlApiSpecTransformer column row value', () => {
  const transformer = new DdlApiSpecTransformer(createBuildingServiceLogger())

  it('extracts defaultValue from Column.default', async () => {
    const realm = await buildFromDdl(`
      CREATE TABLE public.users (
        enabled boolean NOT NULL DEFAULT true
      );
    `)
    const spec = transformer.transformSourceToTableOrientedSpec(realm, {
      schemaName: 'public',
      name: 'users',
    })

    expect(spec?.columns.items[0]?.defaultValue).toBe('true')
  })

  it('extracts generatedExpression from GENERATED ALWAYS AS columns', async () => {
    const realm = await buildFromDdl(`
      CREATE TABLE public.employees (
        first_name text NOT NULL,
        last_name text NOT NULL,
        full_name text GENERATED ALWAYS AS (first_name || ' ' || last_name) STORED
      );
    `)
    const spec = transformer.transformSourceToTableOrientedSpec(realm, {
      schemaName: 'public',
      name: 'employees',
    })

    const fullNameColumn = spec?.columns.items.find(column => column.columnName === 'full_name')
    expect(fullNameColumn?.generatedBy).toBe('expression')
    expect(fullNameColumn?.generatedExpression).toBe("(first_name || ' ') || last_name")
    expect(fullNameColumn?.defaultValue).toBeUndefined()
  })

  it('formats parameterized column type labels with a space before parentheses', async () => {
    const realm = await buildFromDdl(`
      CREATE TABLE public.items (
        amount numeric(10, 2) NOT NULL,
        code character varying(30) NOT NULL
      );
    `)
    const spec = transformer.transformSourceToTableOrientedSpec(realm, {
      schemaName: 'public',
      name: 'items',
    })

    const amountColumn = spec?.columns.items.find(column => column.columnName === 'amount')
    const codeColumn = spec?.columns.items.find(column => column.columnName === 'code')

    expect(amountColumn?.columnType.label).toBe('numeric (10, 2)')
    expect(codeColumn?.columnType.label).toBe('varchar (30)')
  })

  it('exposes enumValues on the column row when column type is EnumType', async () => {
    const realm = await buildFromDdl(`
      CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');
      CREATE TABLE public.journal (
        feeling mood NOT NULL
      );
    `)
    const spec = transformer.transformSourceToTableOrientedSpec(realm, {
      schemaName: 'public',
      name: 'journal',
    })

    const feelingColumn = spec?.columns.items.find(column => column.columnName === 'feeling')
    expect(feelingColumn?.columnType.kind).toBe(TypeKind.EnumType)
    expect(feelingColumn?.enumValues).toEqual(['happy', 'sad', 'neutral'])
    if (feelingColumn?.columnType.kind === TypeKind.EnumType) {
      expect(feelingColumn.enumValues).toBe(feelingColumn.columnType.values)
    }
  })

  it('formats unsupported precomposed type labels with a space before parentheses', async () => {
    const realm = await buildFromDdl(`
      CREATE TABLE public.flags (
        fixed bit(8) NOT NULL,
        variable bit varying(16) NOT NULL
      );
    `)
    const spec = transformer.transformSourceToTableOrientedSpec(realm, {
      schemaName: 'public',
      name: 'flags',
    })

    const fixedColumn = spec?.columns.items.find(column => column.columnName === 'fixed')
    const variableColumn = spec?.columns.items.find(column => column.columnName === 'variable')

    expect(fixedColumn?.columnType.label).toBe('bit (8)')
    expect(variableColumn?.columnType.label).toBe('bit varying (16)')
  })
})

describe('DdlApiSpecTransformer index row value', () => {
  const transformer = new DdlApiSpecTransformer(createBuildingServiceLogger())

  it('extracts description from COMMENT ON INDEX', async () => {
    const realm = await buildFromDdl(`
      CREATE TABLE public.users (
        login character varying(30) NOT NULL
      );

      CREATE INDEX users_login_idx ON public.users (login);

      COMMENT ON INDEX users_login_idx IS 'Stub index comment for ddlapi sample fixture tests.';
    `)
    const spec = transformer.transformSourceToTableOrientedSpec(realm, {
      schemaName: 'public',
      name: 'users',
    })

    expect(spec?.indexes.items[0]?.description).toBe(
      'Stub index comment for ddlapi sample fixture tests.',
    )
  })
})
