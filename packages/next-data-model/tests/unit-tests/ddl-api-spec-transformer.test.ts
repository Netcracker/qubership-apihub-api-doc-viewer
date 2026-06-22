import { buildFromDdl, literal, rawExpr } from '@netcracker/qubership-apihub-ddlapi'
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
