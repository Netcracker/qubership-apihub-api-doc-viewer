export const InputOutputContext = {
  Operation: 'operation',
  Method: 'method',
  Directive: 'directive',
} as const
export type InputOutputContext = (typeof InputOutputContext)[keyof typeof InputOutputContext]
