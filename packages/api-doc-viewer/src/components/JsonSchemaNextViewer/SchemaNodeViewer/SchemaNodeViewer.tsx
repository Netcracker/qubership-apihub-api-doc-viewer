import { useCustomizationOptions } from "@apihub/contexts/CustomizationOptionsContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { JsonSchemaTreeNode, JsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/aliases"
import { JsonSchemaTreeNodeValue } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-value"
import { JsonSchemaTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/json-schema/types/node-kind"
import {
  resolvePlainPropertyAdditionalInfoRowUsesAfterRowPrecededBy,
  resolvePlainPropertyIsExpandable,
  resolvePlainPropertyInitiallyExpanded,
  resolvePlainPropertyListLastRowFlags,
  resolvePlainPropertyNodeVisibility,
} from "@netcracker/qubership-apihub-next-data-model/building-service/json-schema/tree/node-visibility-data/kind-property"
import { FC, useCallback, useMemo, useState } from "react"
import { AdditionalInfoPiece } from "@apihub/components/shared-components/AdditionalInfoPiece/AdditionalInfoPiece"
import { AdditionalInfoPieceUsage } from "@apihub/components/shared-components/AdditionalInfoPiece/types"
import { AdditionalInfoRow } from "@apihub/components/shared-components/AdditionalInfoRow/AdditionalInfoRow"
import { AdditionalInfoRowUsage } from "@apihub/components/shared-components/AdditionalInfoRow/types"
import { MarkdownTextRow } from "@apihub/components/shared-components/MarkdownTextRow/MarkdownTextRow"
import { NestingIndicatorTitleRow } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRow"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
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
import { NodeDiffsSeverityPlacemennt } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { isJsonSchemaTreeNodeWithDiffs } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/guards/tree-node"
import { buildRowDiffProps, useNodeDiffState } from "../../shared-components/diffs/node-diff-props"
import { TitleRowProps } from "../../shared-components/TitleRow/types"
import {
  isDiffSideHeaderVisible,
  takeAddRemoveDiffIfPresent,
} from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/list-side-display"

import { useJsonSchemaNextViewerContext } from "../JsonSchemaNextViewerContext"
import { resolveJsonSchemaPropertyNestingIndicatorTitle } from "../utils/resolve-json-schema-nesting-indicator-title"

export type SchemaNodeViewerProps = WithPrecededByProps & {
  node: JsonSchemaTreeNode | JsonSchemaTreeNodeWithDiffs
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
  const { expandedDepth, materializeChildren, treeRevision } = useJsonSchemaNextViewerContext()
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

  const children = useMemo(
    () => node.childrenNodes(),
    // treeRevision: lazy materialization mutates tree in place
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [node, treeRevision],
  )

  const expandable = useMemo(
    () => resolvePlainPropertyIsExpandable(node),
    // treeRevision: lazy materialization adds children without changing node identity
    // eslint-disable-next-line react-hooks/exhaustive-deps -- treeRevision
    [node, treeRevision],
  )

  const initiallyExpanded = useMemo(
    () => resolvePlainPropertyInitiallyExpanded(node, { expandedDepth, level }),
    [node, expandedDepth, level],
  )

  const [expanded, setExpanded] = useState(initiallyExpanded)

  const onClickExpander = useCallback(() => {
    setExpanded((previousExpanded) => {
      const nextExpanded = !previousExpanded
      if (nextExpanded) {
        materializeChildren(node)
      }
      return nextExpanded
    })
  }, [materializeChildren, node])

  const showNodeBody = !expandable || expanded

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

  const nodeDiffState = useNodeDiffState(node, isJsonSchemaTreeNodeWithDiffs)
  const titleRowDiffProps: Pick<TitleRowProps, "diff" | "descendantDiffs" | "diffsSeverities"> = useMemo(
    () => buildRowDiffProps(nodeDiffState),
    [nodeDiffState],
  )

  const subheader = useCallback(
    (layoutSide: LayoutSide) => {
      if (!isDiffSideHeaderVisible(takeAddRemoveDiffIfPresent(titleRowDiffProps.diff), layoutSide)) {
        return <></>
      }

      return (
        <JsonSchemaTitleSubheader
          value={value}
          meta={meta}
          isCycle={node.isCycle}
          layoutSide={layoutSide}
          showTypeLabel={showTypeSubheader}
        />
      )
    },
    [meta, node.isCycle, showTypeSubheader, titleRowDiffProps.diff, value],
  )

  const validationRows = useMemo(() => resolveValidationRows(value), [value])
  const propertyNestingIndicatorTitle = useMemo(
    () => resolveJsonSchemaPropertyNestingIndicatorTitle(node),
    [node],
  )

  const descriptionRowDiffProps = useMemo(
    () => buildRowDiffProps<JsonSchemaTreeNodeValue>(nodeDiffState, {
      diffKey: "description" as keyof JsonSchemaTreeNodeValue,
      diffsSeverityPlacement: NodeDiffsSeverityPlacemennt.DescriptionRow,
    }),
    [nodeDiffState],
  )

  return (
    <div data-testid="json-schema-node-viewer" data-name="JsonNode" className="flex flex-col">
      <TitleRow
        data-precededby={precededBy}
        {...listLastRowFlags}
        titleContent={titleContent}
        expandable={expandable}
        expanded={expanded}
        onClickExpander={expandable ? onClickExpander : undefined}
        variant={TextValueVariant.body2}
        subheader={subheader}
        usage={TitleRowUsage.JsonSchemaProperty}
        {...titleRowDiffProps}
      />

      {showNodeBody && (
      <>
        {visibility.showDeprecationReasonRow && visibility.deprecationReason && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            usage={TextRowUsage.JsonSchemaDescription}
            value={`**Deprecation reason:** ${visibility.deprecationReason}`}
          />
        )}

        {visibility.showDescription && (value?.description || descriptionRowDiffProps.diff) && (
          <MarkdownTextRow
            data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
            usage={TextRowUsage.JsonSchemaDescription}
            value={value?.description ?? ""}
            {...descriptionRowDiffProps}
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

        {!node.isCycle && children.length > 0 && (
          <LevelContext.Provider value={level + 1}>
            <NestingIndicatorTitleRow
              data-precededby={PrecededBy.JSON_SCHEMA_VIEWER}
              title={propertyNestingIndicatorTitle}
              usage={NestingIndicatorTitleRowUsage.JsonSchema}
              lastInvisible
            />
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
      )}
    </div>
  )
}
