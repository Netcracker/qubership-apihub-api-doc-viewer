import { SUPPRESS_ROOT_NESTING_INDICATOR_CUSTOMIZATION_OPTIONS } from '@apihub/contexts/CustomizationOptionsContext'
import { useDiffMetaKeys } from '@apihub/contexts/DiffMetaKeysContext'
import { useDisplayMode } from '@apihub/contexts/DisplayModeContext'
import { DiffMetaKeys } from '@netcracker/qubership-apihub-api-data-model'
import { isDiffAdd, isDiffRemove } from '@netcracker/qubership-apihub-api-diff'
import {
  ChangedPropertyMetaData,
  NODE_LEVEL_DIFF_KEY,
} from '@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface'
import {
  AsyncApiTreeNode,
  AsyncApiTreeNodeWithDiffs,
} from '@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases'
import { AsyncApiTreeNodeKinds } from '@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind'
import {
  AsyncApiTreeNodeValueTypeChannelParameters,
} from '@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-value'
import { FC, useMemo } from 'react'
import { JsonSchemaNextDiffsViewer } from '../JsonSchemaNextViewer/JsonSchemaNextDiffsViewer'
import { JsonSchemaNextViewer } from '../JsonSchemaNextViewer/JsonSchemaNextViewer'
import { buildRowDiffProps, toNodeDiffState } from '../shared-components/diffs/node-diff-props'
import { TextValueVariant } from '../shared-components/TextValue/types'
import { TitleRow } from '../shared-components/TitleRow/TitleRow'
import { TitleRowProps } from '../shared-components/TitleRow/types'
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from '../shared-components/WithPrecededByProps'
import { isMessageChannelParametersNodeWithDiffs } from '../shared-utilities/tree-node-guards'

const MESSAGE_CHANNEL_PARAMETERS_TITLE = 'Address Parameters'

// The only place the AsyncAPI-specific "location" concept may appear: JSON Schema Next's
// `customAnnotations` extension point is fully generic (see JsonSchemaCustomAnnotation) - it never
// hardcodes this label or key itself. AsyncAPI channel parameters carry a real spec concept,
// `location` (a runtime expression pointing at where the parameter's value lives), that isn't a
// JSON-Schema keyword, so it's reshaped into the generic extension point right here, at the
// boundary before handing the parameters object to JsonSchemaNextViewer/JsonSchemaNextDiffsViewer.
const CHANNEL_PARAMETER_LOCATION_LABEL = 'Location'
const CHANNEL_PARAMETER_LOCATION_KEY = 'location'
const CHANNEL_PARAMETER_CUSTOM_ANNOTATIONS_KEY = 'customAnnotations'

function isPlainRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function attachLocationCustomAnnotation(
  paramValue: Record<string, unknown>,
  diffsMetaKey: symbol | undefined,
): Record<string, unknown> {
  if (!(CHANNEL_PARAMETER_LOCATION_KEY in paramValue)) {
    return paramValue
  }

  const { [CHANNEL_PARAMETER_LOCATION_KEY]: location, ...rest } = paramValue
  const customAnnotations: Record<string, unknown> = {
    [CHANNEL_PARAMETER_LOCATION_KEY]: { label: CHANNEL_PARAMETER_LOCATION_LABEL, value: location },
  }

  if (diffsMetaKey) {
    const paramDiffs = Reflect.get(paramValue, diffsMetaKey)
    const locationDiff = isPlainRecord(paramDiffs) ? paramDiffs[CHANNEL_PARAMETER_LOCATION_KEY] : undefined
    if (locationDiff) {
      Reflect.set(customAnnotations, diffsMetaKey, { [CHANNEL_PARAMETER_LOCATION_KEY]: locationDiff })
    }
  }

  return { ...rest, [CHANNEL_PARAMETER_CUSTOM_ANNOTATIONS_KEY]: customAnnotations }
}

/**
 * Reshapes every channel parameter's raw `location` field (an AsyncAPI concept - a runtime
 * expression pointing at where the parameter's value lives) into JSON Schema Next's generic
 * `customAnnotations` extension point, so `JsonSchemaNextViewer`/`JsonSchemaNextDiffsViewer` can
 * render it as a labeled additional-info row without knowing what "location" means.
 */
function attachLocationCustomAnnotations(
  addressParameters: Record<string, unknown> | undefined,
  diffsMetaKey?: symbol,
): Record<string, unknown> | undefined {
  if (!isPlainRecord(addressParameters)) {
    return addressParameters
  }

  const properties = addressParameters.properties
  if (!isPlainRecord(properties)) {
    return addressParameters
  }

  const transformedProperties: Record<string, unknown> = {}
  for (const [paramKey, paramValue] of Object.entries(properties)) {
    transformedProperties[paramKey] = isPlainRecord(paramValue)
      ? attachLocationCustomAnnotation(paramValue, diffsMetaKey)
      : paramValue
  }

  return { ...addressParameters, properties: transformedProperties }
}

type MessageChannelParametersNodeViewerProps = WithPrecededByProps & {
  node:
    | AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
    | AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
}

export const MessageChannelParametersNodeViewer: FC<MessageChannelParametersNodeViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const displayMode = useDisplayMode()

  if (isMessageChannelParametersNodeWithDiffs(node)) {
    return (
      <MessageChannelParametersNodeWithDiffsViewer
        data-precededby={precededBy}
        node={node}
      />
    )
  }

  const value = node.value()
  const addressParameters = attachLocationCustomAnnotations(value?.rawValues ?? {})

  return <>
    <TitleRow
      data-precededby={precededBy}
      value={MESSAGE_CHANNEL_PARAMETERS_TITLE}
      expandable={false}
      variant={TextValueVariant.h3}
    />
    <JsonSchemaNextViewer
      data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
      schema={addressParameters}
      expandedDepth={2}
      displayMode={displayMode}
      customizationOptions={SUPPRESS_ROOT_NESTING_INDICATOR_CUSTOMIZATION_OPTIONS}
    />
  </>
}

type MessageChannelParametersNodeWithDiffsViewerProps = WithPrecededByProps & {
  node: AsyncApiTreeNodeWithDiffs<typeof AsyncApiTreeNodeKinds.MESSAGE_CHANNEL_PARAMETERS>
}

const MessageChannelParametersNodeWithDiffsViewer: FC<MessageChannelParametersNodeWithDiffsViewerProps> = (props) => {
  const { node, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props

  const displayMode = useDisplayMode()

  const value = node.value()
  const addressParameters = value?.rawValues

  const diffMetaKeys = useDiffMetaKeys()

  const diffsProps: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities'> = useMemo(() => {
    const nodeDiffState = toNodeDiffState<AsyncApiTreeNodeValueTypeChannelParameters>(node)
    return buildRowDiffProps<AsyncApiTreeNodeValueTypeChannelParameters>(nodeDiffState)
  }, [node])

  const preparedAddressParameters = useMemo(() => {
    const withCustomAnnotations = attachLocationCustomAnnotations(addressParameters, diffMetaKeys?.diffsMetaKey)
    return prepareJsonSchemaInCaseOfWhollyChanged(
      withCustomAnnotations,
      node.diffs[NODE_LEVEL_DIFF_KEY],
      diffMetaKeys,
    )
  }, [addressParameters, diffMetaKeys, node.diffs])

  if (!diffMetaKeys || !addressParameters) {
    return null
  }

  return <>
    <TitleRow
      data-precededby={precededBy}
      value={MESSAGE_CHANNEL_PARAMETERS_TITLE}
      expandable={false}
      variant={TextValueVariant.h3}
      // diffs
      {...diffsProps}
    />
    <JsonSchemaNextDiffsViewer
      data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
      schema={preparedAddressParameters}
      expandedDepth={2}
      displayMode={displayMode}
      diffMetaKeys={diffMetaKeys}
      customizationOptions={SUPPRESS_ROOT_NESTING_INDICATOR_CUSTOMIZATION_OPTIONS}
      // TEMPORARY
      hideUnchangedNodes={false}
    />
  </>
}

function prepareJsonSchemaInCaseOfWhollyChanged(
  jsonSchema: Record<string, unknown> | undefined,
  changedNodeMetadata: ChangedPropertyMetaData | undefined,
  diffMetaKeys: DiffMetaKeys | undefined,
): Record<PropertyKey, unknown> | undefined {
  if (!jsonSchema || !changedNodeMetadata || !diffMetaKeys) {
    return jsonSchema
  }
  const diff = changedNodeMetadata.data
  const { diffsMetaKey } = diffMetaKeys
  const extendedJsonSchema = {
    ...jsonSchema,
    [diffsMetaKey]: Object.keys(jsonSchema).reduce((acc, key) => {
      acc[key] = diff
      if (isDiffAdd(diff)) {
        const afterValue = jsonSchema[key]
        acc[key] = { ...diff, afterValue: afterValue }
      }
      if (isDiffRemove(diff)) {
        const beforeValue = jsonSchema[key]
        acc[key] = { ...diff, beforeValue: beforeValue }
      }
      return acc
    }, {} as Record<PropertyKey, unknown>),
  }
  return extendedJsonSchema
}
