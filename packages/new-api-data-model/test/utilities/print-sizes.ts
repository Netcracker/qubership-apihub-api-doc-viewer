import sizeOf from "object-sizeof";
import type { ADV } from "../../src/abstract/types/model";

export function printSizeStats(graphql: string, normalized: unknown, model: ADV.Row[]) {
  const graphqlSize = graphql.length * 4
  const graphApiSize = sizeOf(normalized)
  const modelSize = sizeOf(model)
  console.log('| Kind | Size | Diff, % |')
  console.log('| ---- | ---- | ---- |')
  console.log('| Empty Object Size | **', sizeOf({}), 'Bytes** | |')
  console.log('| Almost Empty Object Size | **', sizeOf({ key: undefined }), 'Bytes** | |')
  console.log('| Empty Array Size | **', sizeOf([]), 'Bytes** | |')
  console.log('| Almost Empty Array Size | **', sizeOf([undefined]), 'Bytes** | |')
  console.log('| GraphQL SIZE | **', graphqlSize, 'Bytes** | |')
  console.log('| GraphAPI SIZE | **', graphApiSize, 'Bytes** | |')
  console.log('| Model SIZE | **', modelSize, 'Bytes** | |')
  const diff1 = modelSize - graphApiSize
  const diff1Percent = Math.round((diff1 / graphApiSize) * 100)
  console.log('| Model and API DIFF | **', diff1 > 0 ? `+${diff1}` : `-${diff1}`, 'Bytes** | **', diff1Percent, '%** |')
  const diff2 = modelSize - graphqlSize
  const diff2Percent = Math.round((diff2 / graphqlSize) * 100)
  console.log('| Model and QL DIFF | **', diff2 > 0 ? `+${diff2}` : `-${diff2}`, 'Bytes** | **', diff2Percent, '%** |')
  const diff3 = graphApiSize - graphqlSize
  const diff3Percent = Math.round((diff3 / graphqlSize) * 100)
  console.log('| API and QL DIFF | **', diff3 > 0 ? `+${diff3}` : `-${diff3}`, 'Bytes** | **', diff3Percent, '%** |')
}
