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
import { TextValueVariant } from "@apihub/components/shared-components/TextValue/types"
import { TitleRow } from "@apihub/components/shared-components/TitleRow/TitleRow"
import { TitleRowUsage } from "@apihub/components/shared-components/TitleRow/types"
import {
  ATTRIBUTE_PRECEDED_BY,
  PrecededBy,
  WithPrecededByProps,
} from "../../shared-components/WithPrecededByProps"
import { isJsonSchemaRootNode } from "../utils/node-type-checkers"
import { resolveListValidationValue, resolveValidationRows } from "../utils/validation-rows"
import { JsonSchemaNodeViewer } from "../JsonSchemaNodeViewer"
import { JsonSchemaExtensionsSection } from "./JsonSchemaExtensionsSection"
import { JsonSchemaTitleSubheader } from "./JsonSchemaTitleSubheader"

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
  const value = node.value()
  const meta = node.meta()
  const isRoot = isJsonSchemaRootNode(node)

  const visibility = useMemo(
    () => resolvePlainPropertyNodeVisibility(node as JsonSchemaTreeNode<typeof JsonSchemaTreeNodeKinds.PROPERTY>, displayMode),
    [node, displayMode],
  )
  const listLastRowFlags = useMemo(
    () => resolvePlainPropertyListLastRowFlags(isLastInList, visibility),
    [isLastInList, visibility],
  )

  const children = node.childrenNodes()

  const titleValue = useMemo(() => {
    if (isRoot) {
      return value?.title ?? ""
    }
    const requiredSuffix = meta.required ? " *" : ""
    return `${node.key}${requiredSuffix}`
  }, [isRoot, meta.required, node.key, value?.title])

  const subheader = useCallback(
    () => (
      <JsonSchemaTitleSubheader
        value={value}
        meta={meta}
        isCycle={node.isCycle}
        layoutSide={CHANGED_LAYOUT_SIDE}
      />
    ),
    [meta, node.isCycle, value],
  )

  const validationRows = useMemo(() => resolveValidationRows(value), [value])

  return (
    <div data-testid="json-schema-node-viewer" data-name="JsonNode" className="flex flex-col">
      {!isRoot && (
        <TitleRow
          data-precededby={precededBy}
          {...listLastRowFlags}
          value={titleValue}
          expandable={false}
          expanded={false}
          variant={TextValueVariant.body2}
          subheader={subheader}
          usage={TitleRowUsage.JsonSchemaProperty}
        />
      )}

      <>
        {visibility.showDeprecationReasonRow && visibility.deprecationReason && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            value={`**Deprecation reason:** ${visibility.deprecationReason}`}
          />
        )}

        {visibility.showDescription && value?.description && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            value={value.description}
          />
        )}

        {visibility.showEnumValuesRow && Array.isArray(value?.enum) && (
          <AdditionalInfoRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            label="Allowed values"
            usage={AdditionalInfoRowUsage.JsonSchemaValidation}
            subheader={() => (
              <AdditionalInfoPiece
                isVisible={true}
                value={resolveListValidationValue(value.enum!)}
                usage={AdditionalInfoPieceUsage.JsonSchemaValidation}
              />
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
              <AdditionalInfoPiece
                isVisible={true}
                value={resolveListValidationValue(value.examples!)}
                usage={AdditionalInfoPieceUsage.JsonSchemaValidation}
              />
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
              <AdditionalInfoPiece
                isVisible={true}
                value={row.value}
                usage={AdditionalInfoPieceUsage.JsonSchemaValidation}
              />
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
