import { AsyncApiTreeNodeKind, AsyncApiTreeNodeKinds, AsyncApiTreeNodeKindsList } from "@apihub/next-data-model/model/async-api/types/node-kind";
import { AsyncApiNodeMeta } from "@apihub/next-data-model/model/async-api/types/node-meta";
import { AsyncApiTreeNodeValue, AsyncApiTreeNodeValueBase } from "@apihub/next-data-model/model/async-api/types/node-value";
import { JSON_SCHEMA_PROPERTY_REF } from "@netcracker/qubership-apihub-api-unifier";
import { isObject, isObjectWithStringKeys } from "../../../utilities";

const ASYNC_API_NODE_KINDS: ReadonlySet<string> = new Set(AsyncApiTreeNodeKindsList)
const ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS: (keyof AsyncApiTreeNodeValueBase)[] = [
  'title', 'description', 'summary'
]

type AnyAsyncApiNodeValueKey =
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.EXTENSIONS>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>
  | keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.SERVER>

type AsyncApiNodeValueKind =
  | typeof AsyncApiTreeNodeKinds.BINDING
  | typeof AsyncApiTreeNodeKinds.EXTENSIONS
  | typeof AsyncApiTreeNodeKinds.MESSAGE
  | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL
  | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS
  | typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS
  | typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION
  | typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD
  | typeof AsyncApiTreeNodeKinds.SERVER

type AsyncApiPickFunction = <TargetType extends object>(
  source: Record<string, unknown> | null,
  keys: readonly (keyof TargetType)[],
) => TargetType | null

export abstract class AbstractNodeDataBuilder<
  V extends object | null,
  M extends object,
> {
  public abstract createNodeMeta(value: unknown): M
  public abstract createNodeValue(kind: string, value: unknown, pick: AsyncApiPickFunction): V | null
}

export class AsyncApiNodeDataBuilder extends AbstractNodeDataBuilder<
  AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null,
  AsyncApiNodeMeta
> {
  public override createNodeMeta(value: unknown): AsyncApiNodeMeta {
    return {
      ...isObject(value) && JSON_SCHEMA_PROPERTY_REF in value ? { brokenRef: `${value.$ref}` } : {},
      _fragment: value,
    }
  }

  public override createNodeValue(
    kind: string,
    value: unknown,
    pick: AsyncApiPickFunction,
  ): AsyncApiTreeNodeValue<AsyncApiTreeNodeKind> | null {
    if (!isObjectWithStringKeys(value)) {
      return null
    }
    if (!this.isAsyncApiTreeNodeKind(kind)) {
      return null
    }
    if (!this.isAsyncApiNodeValueKind(kind)) {
      return null
    }

    return pick<AsyncApiTreeNodeValue<AsyncApiTreeNodeKind>>(
      value,
      AsyncApiNodeDataBuilder.getAsyncApiTreeNodeValueProps(kind),
    )
  }

  private isAsyncApiTreeNodeKind(kind: string): kind is AsyncApiTreeNodeKind {
    return ASYNC_API_NODE_KINDS.has(kind)
  }

  private isAsyncApiNodeValueKind(kind: AsyncApiTreeNodeKind): kind is AsyncApiNodeValueKind {
    switch (kind) {
      case AsyncApiTreeNodeKinds.BINDING:
      case AsyncApiTreeNodeKinds.EXTENSIONS:
      case AsyncApiTreeNodeKinds.MESSAGE:
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL:
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS:
      case AsyncApiTreeNodeKinds.MESSAGE_HEADERS:
      case AsyncApiTreeNodeKinds.MESSAGE_OPERATION:
      case AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD:
      case AsyncApiTreeNodeKinds.SERVER:
        return true
      default:
        return false
    }
  }

  // Function overloads for type-safe return based on input type
  public static getAsyncApiTreeNodeValueProps(
    type: AsyncApiNodeValueKind
  ): (keyof AsyncApiTreeNodeValue<
    AsyncApiNodeValueKind
  >)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.BINDING): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.EXTENSIONS): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.EXTENSIONS>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>)[]
  public static getAsyncApiTreeNodeValueProps(type: typeof AsyncApiTreeNodeKinds.SERVER): (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.SERVER>)[]
  public static getAsyncApiTreeNodeValueProps(type: AsyncApiTreeNodeKind): AnyAsyncApiNodeValueKey[] {
    switch (type) {
      case AsyncApiTreeNodeKinds.BINDING:
        return [
          'binding',
          'version',
          'protocol',
        ]satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.BINDING>)[]
      case AsyncApiTreeNodeKinds.EXTENSIONS:
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS:
        return [
          'rawValues',
        ]satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.EXTENSIONS | typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>)[]
      case AsyncApiTreeNodeKinds.MESSAGE:
        return [
          ...ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
          'internalTitle',
          'action',
          'address',
        ]satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE>)[]
      case AsyncApiTreeNodeKinds.MESSAGE_CHANNEL:
        return [
          ...ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
        ]satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL>)[]
      case AsyncApiTreeNodeKinds.MESSAGE_OPERATION:
        return [
          ...ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
        ]satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_OPERATION>)[]
      case AsyncApiTreeNodeKinds.MESSAGE_HEADERS:
      case AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD:
        return [
          'schema',
          'schemaFormat',
        ]satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.MESSAGE_HEADERS | typeof AsyncApiTreeNodeKinds.MESSAGE_PAYLOAD>)[]
      case AsyncApiTreeNodeKinds.SERVER:
        return [
          ...ASYNC_API_TREE_NODE_VALUE_COMMON_PROPS,
          'host',
          'protocol',
        ]satisfies (keyof AsyncApiTreeNodeValue<typeof AsyncApiTreeNodeKinds.SERVER>)[]
      default:
        return []
    }
  }
}

export class AsyncApiNodeDataWithDiffsBuilder extends AsyncApiNodeDataBuilder {
  public override createNodeMeta(value: unknown): AsyncApiNodeMeta {
    return super.createNodeMeta(value)
  }
}
