import { createElement, ReactElement } from "react"
import { resolveChildPrecededBy } from "../src/components/JsonSchemaViewer/utils/resolve-child-preceded-by"
import {
  chainSectionsPrecededBy,
  isBlockClosing,
  OpenApiSectionEntry,
  OpenApiSectionTail,
  resolveBlockRowsSpacing,
  resolveSectionsTail,
} from "../src/components/OpenApiOperationViewer/section-preceded-by"
import { PrecededBy } from "../src/components/shared-components/WithPrecededByProps"

type RenderCall = { id: string, precededBy: PrecededBy, closing: OpenApiSectionTail }

function section(id: string, tail: OpenApiSectionTail, calls: RenderCall[]): OpenApiSectionEntry {
  return {
    id,
    tail,
    render: (precededBy, closing): ReactElement => {
      calls.push({ id, precededBy, closing })
      return createElement('div', { key: id })
    },
  }
}

describe("OpenAPI row spacing", () => {
  describe("resolveBlockRowsSpacing", () => {
    it("starts the block with `first`, chains the rest in-block, and ends the block on the last row", () => {
      expect(resolveBlockRowsSpacing(3, PrecededBy.OPENAPI_VIEWER_START, true)).toEqual([
        { 'data-precededby': PrecededBy.OPENAPI_VIEWER_START },
        { 'data-precededby': PrecededBy.OPENAPI_BLOCK_ROW },
        { 'data-precededby': PrecededBy.OPENAPI_BLOCK_ROW, 'data-block-last-row': true },
      ])
    })

    it("leaves the last row in-block when a nested viewer of the same block follows it", () => {
      expect(resolveBlockRowsSpacing(1, PrecededBy.OPENAPI_BLOCK_START, false)).toEqual([
        { 'data-precededby': PrecededBy.OPENAPI_BLOCK_START },
      ])
    })
  })

  describe("chainSectionsPrecededBy", () => {
    it("gives each section the previous tail and closes each one with its own tail, the last one with `closing`", () => {
      const calls: RenderCall[] = []
      const elements = chainSectionsPrecededBy([
        section('description', PrecededBy.OPENAPI_BLOCK_START, calls),
        section('headers', PrecededBy.OPENAPI_AFTER_NESTED_VIEWER, calls),
        section('body', PrecededBy.OPENAPI_AFTER_NESTED_VIEWER, calls),
      ], PrecededBy.OPENAPI_BLOCK_ROW, PrecededBy.OPENAPI_BLOCK_START)

      expect(elements).toHaveLength(3)
      expect(calls).toEqual([
        { id: 'description', precededBy: PrecededBy.OPENAPI_BLOCK_ROW, closing: PrecededBy.OPENAPI_BLOCK_START },
        { id: 'headers', precededBy: PrecededBy.OPENAPI_BLOCK_START, closing: PrecededBy.OPENAPI_AFTER_NESTED_VIEWER },
        { id: 'body', precededBy: PrecededBy.OPENAPI_AFTER_NESTED_VIEWER, closing: PrecededBy.OPENAPI_BLOCK_START },
      ])
    })

    it("passes a container's nested-viewer promise to a last section that ends with an OpenAPI row", () => {
      const calls: RenderCall[] = []
      chainSectionsPrecededBy([section('description', PrecededBy.OPENAPI_BLOCK_START, calls)], PrecededBy.OPENAPI_BLOCK_ROW, PrecededBy.OPENAPI_AFTER_NESTED_VIEWER)
      expect(calls[0].closing).toBe(PrecededBy.OPENAPI_AFTER_NESTED_VIEWER)
      expect(isBlockClosing(calls[0].closing)).toBe(false)
    })
  })

  describe("resolveSectionsTail", () => {
    it("is the last section's tail, or a block start when only the container's own rows render", () => {
      expect(resolveSectionsTail([section('a', PrecededBy.OPENAPI_BLOCK_START, []), section('b', PrecededBy.OPENAPI_AFTER_NESTED_VIEWER, [])]))
        .toBe(PrecededBy.OPENAPI_AFTER_NESTED_VIEWER)
      expect(resolveSectionsTail([])).toBe(PrecededBy.OPENAPI_BLOCK_START)
    })
  })

  describe("resolveChildPrecededBy (JSON Schema first row hook)", () => {
    it("hands the root's precededBy to the first child only when the root row is suppressed", () => {
      expect(resolveChildPrecededBy(true, PrecededBy.OPENAPI_NESTED_VIEWER_START, 0)).toBe(PrecededBy.OPENAPI_NESTED_VIEWER_START)
      expect(resolveChildPrecededBy(true, PrecededBy.OPENAPI_NESTED_VIEWER_START, 1)).toBe(PrecededBy.JSON_SCHEMA_PROPERTY)
      expect(resolveChildPrecededBy(false, PrecededBy.OPENAPI_NESTED_VIEWER_START, 0)).toBe(PrecededBy.JSON_SCHEMA_PROPERTY)
      expect(resolveChildPrecededBy(true, undefined, 0)).toBe(PrecededBy.JSON_SCHEMA_PROPERTY)
    })
  })
})
