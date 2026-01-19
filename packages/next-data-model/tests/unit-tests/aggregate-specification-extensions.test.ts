import { aggregateSpecificationExtensions } from "../../src/building-service/async-api/json-crawl-entities/transformers/aggregate-specification-extensions"
import { simplifyConsole } from "../helpers/simplify-console"

const transformExtensions = (value: unknown) =>
  aggregateSpecificationExtensions('test', value, {}, [], {} as never)

describe('Aggregate specification extensions', () => {
  simplifyConsole()

  describe('Non-object values', () => {
    it('should return non-object values as-is', () => {
      const numberValue = 42
      const stringValue = 'value'
      const nullValue = null

      expect(transformExtensions(numberValue)).toBe(numberValue)
      expect(transformExtensions(stringValue)).toBe(stringValue)
      expect(transformExtensions(nullValue)).toBe(nullValue)
    })

    it('should return arrays as-is', () => {
      const arrayValue = [1, 2, 3]

      expect(transformExtensions(arrayValue)).toBe(arrayValue)
    })
  })

  describe('Objects without extension keys', () => {
    it('should return object as-is when there are no x- keys', () => {
      const value = { a: 1, nested: { ok: true } }

      expect(transformExtensions(value)).toBe(value)
    })
  })

  describe('Objects with extension keys', () => {
    it('should aggregate x- keys under extensions and remove them', () => {
      const value = { 'x-a': 1, 'x-b': { nested: true }, keep: 'ok' }

      expect(transformExtensions(value)).toEqual({
        keep: 'ok',
        extensions: { 'x-a': 1, 'x-b': { nested: true } },
      })
      expect(value).toEqual({ 'x-a': 1, 'x-b': { nested: true }, keep: 'ok' })
    })

    it('should create extensions object when only x- keys exist', () => {
      const value = { 'x-a': 1, 'x-b': 2 }

      expect(transformExtensions(value)).toEqual({
        extensions: { 'x-a': 1, 'x-b': 2 },
      })
    })
  })
})