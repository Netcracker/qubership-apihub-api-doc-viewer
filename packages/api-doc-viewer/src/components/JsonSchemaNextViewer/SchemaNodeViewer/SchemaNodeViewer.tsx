import { useCustomizationOptions } from "@apihub/contexts/CustomizationOptionsContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { CHANGED_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide"
import { JsonSchemaTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy,
  resolvePlainPropertyListLastRowFlags,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import { FC, useCallback, useMemo } from "react"
import { AdditionalInfoPiece } from "@apihub/components/shared-components/AdditionalInfoPiece/AdditionalInfoPiece"
import { AdditionalInfoPieceUsage } from "@apihub/components/shared-components/AdditionalInfoPiece/types"
import { AdditionalInfoRow } from "@apihub/components/shared-components/AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoRowUsage } from "@apihub/components/shared-components/AdditionalInfoRow/types"
import { MarkdownTextRow } from "@apihub/components/shared-components/MarkdownTextRow/MarkdownTextRow"
import { TextRowUsage } from "@apihub/components/shared-components/TextRow/types"
import { TextValueVariant } from "@apihub/components/shared-components/TextValue/types"
import { TitleRow } from "@apihub/components/shared-components/TitleRow/TitleRow"
import { TitleRowUsage } from "@apihub/components/shared-components/TitleRow/types"
import {
  ATTRIBUTE_PRECEDED_BY,
  PrecededBy,
  WithPrecededByProps,
} from "../../shared-components/WithPrecededByProps"
import {
  isJsonSchemaBooleanAdditionalPropertiesNode,
  resolveJsonSchemaNodeTitleDisplay,
} from "../utils/resolve-json-schema-node-title"
import { resolveListValidationValues, resolveValidationRows } from "../utils/validation-rows"
import { JsonSchemaNodeViewer } from "../JsonSchemaNodeViewer"
import { JsonSchemaExtensionsSection } from "./JsonSchemaExtensionsSection"
import { JsonSchemaNodeTitle } from "./JsonSchemaNodeTitle"
import { JsonSchemaTitleSubheader } from "./JsonSchemaTitleSubheader"
import { JsonSchemaValidationChips } from "./JsonSchemaValidationChips"

export type SchemaNodeViewerProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode
  isLastInList?: boolean
}

export const SchemaNodeViewer: FC<SchemaNodeViewerProps> = (props) => {
  const {
    node,
    isLastInList = false,
    [ATTRIBUTE_PRECEDED_BY]: precededBy,
  } = props

  const displayMode = useDisplayMode()
  const level = useLevelContext()
  const customizationOptions = useCustomizationOptions()
  const value = node.value()
  const meta = node.meta()

  const visibility = useMemo(
    () => resolvePlainPropertyNodeVisibility(node as JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>, displayMode),
    [node, displayMode],
  )
  const listLastRowFlags = useMemo(
    () => resolvePlainPropertyListLastRowFlags(isLastInList, visibility),
    [isLastInList, visibility],
  )

  const children = node.childrenNodes()

  const titleDisplay = useMemo(
    () => resolveJsonSchemaNodeTitleDisplay({
      node,
      meta,
      headerRowTitle: customizationOptions?.headerRowTitle,
    }),
    [customizationOptions?.headerRowTitle, meta, node],
  )

  const titleContent = useMemo(
    () => <JsonSchemaNodeTitle display={titleDisplay} />,
    [titleDisplay],
  )

  const showTypeSubheader = useMemo(
    () => !isJsonSchemaBooleanAdditionalPropertiesNode(node, meta),
    [meta, node],
  )

  const subheader = useCallback(
    () => (
      <JsonSchemaTitleSubheader
        value={value}
        meta={meta}
        isCycle={node.isCycle}
        layoutSide={CHANGED_LAYOUT_SIDE}
        showTypeLabel={showTypeSubheader}
      />
    ),
    [meta, node.isCycle, showTypeSubheader, value],
  )

  const validationRows = useMemo(() => resolveValidationRows(value), [value])

  return (
    <div data-testid="json-schema-node-viewer" data-name="JsonNode" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        {...listLastRowFlags}
        titleContent={titleContent}
        expandable={false}
        expanded={false}
        variant={TextValueVariant.body2}
        subheader={subheader}
        usage={TitleRowUsage.JsonSchemaProperty}
      />

      <>
        {visibility.showDeprecationReasonRow && visibility.deprecationReason && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            usage={TextRowUsage.JsonSchemaDescription}
            value={`**Deprecation reason:** ${visibility.deprecationReason}`}
          />
        )}

        {visibility.showDescription && value?.description && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            usage={TextRowUsage.JsonSchemaDescription}
            value={value.description}
          />
        )}

        {visibility.showEnumValuesRow && Array.isArray(value?.enum) && (
          <AdditionalInfoRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            label="Allowed values"
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={() => (
              <JsonSchemaValidationChips values={resolveListValidationValues(value.enum!)} />
            )}
            {...resolvePlainPropertyListLastRowFlags(
              isLastInList,
              { ...visibility, showDefaultRow: false, showExamplesRow: false },
            )}
          />
        )}

        {visibility.showDefaultRow && value && "default" in value && (
          <AdditionalInfoRow
            data-precededby={
              resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy(visibility, "default")
                ? PrecededBy.JSON_SCHEMA_VIEWER
                : PrecededBy.JSON_SCHEMA_VIEWER
            }
            label="Default"
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={() => (
              <AdditionalInfoPiece
                isVisible={true}
                value={String(value.default)}
                usage={AdditionalInfoPieceUsage.JsonSchemaValidation}
              />
            )}
          />
        )}

        {visibility.showExamplesRow && Array.isArray(value?.examples) && (
          <AdditionalInfoRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            label="Examples"
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={() => (
              <JsonSchemaValidationChips values={resolveListValidationValues(value.examples!)} />
            )}
          />
        )}

        {visibility.showValidationsSection && validationRows.map((row) => (
          <AdditionalInfoRow
            key={row.key}
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            label={row.label}
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={() => (
              <JsonSchemaValidationChips values={row.values} />
            )}
          />
        ))}

        {visibility.showExtensionsRow && value?.extensions && (
          <JsonSchemaExtensionsSection extensions={value.extensions} />
        )}

        {!node.isCycle && (
          <LevelContext.Provider value={level + 1}>
            {children.map((child, index) => (
              <JsonSchemaNodeViewer
                key={child.id}
                data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
                node={child}
                isLastInList={index === children.length - 1}
              />
            ))}
          </LevelContext.Provider>
        )}
      </>
    </div>
  )
}
