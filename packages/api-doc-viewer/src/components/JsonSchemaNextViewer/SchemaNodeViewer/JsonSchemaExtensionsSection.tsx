import { JsoDiffsViewer } from "@apihub/components/JsoViewer/JsoDiffsViewer"
import { JsoViewer } from "@apihub/components/JsoViewer/JsoViewer"
import { NestingIndicatorTitleRow } from "@apihub/components/shared-components/NestingIndicatorTitleRow/NestingIndicatorTitleRow"
import { NestingIndicatorTitleRowUsage } from "@apihub/components/shared-components/NestingIndicatorTitleRow/types"
import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext"
import { LevelContext, useLevelContext } from "@apihub/contexts/LevelContext"
import { Diff, DiffType } from "@netcracker/qubership-apihub-api-diff"
import { OpenApiExtensionKey } from "@netcracker/qubership-apihub-next-data-model/shared/json-schema/types/extension-key"
import { FC, useMemo } from "react"

export type JsonSchemaExtensionsSectionProps = {
  extensions: Record<OpenApiExtensionKey, unknown>
  extensionsDiffs?: Partial<Record<OpenApiExtensionKey, Diff<DiffType>>>
}

export const JsonSchemaExtensionsSection: FC<JsonSchemaExtensionsSectionProps> = (props) => {
  const { extensions, extensionsDiffs } = props
  const level = useLevelContext()
  const nestedLevel = level + 1
  const displayMode = useDisplayMode()
  const diffMetaKeys = useDiffMetaKeys()

  const hasExtensionsDiffs = !!extensionsDiffs && Object.keys(extensionsDiffs).length > 0

  // Only whole-key add/remove and a value's type crossing (object<->array<->primitive<->JSON
  // Schema) need a synthetic top-level diff injected here - those are the cases where the raw
  // crawl diffs record carries a diff for the extension KEY itself (see
  // `JsonSchemaNodeDiffsAggregatorKindAny.aggregateExtensionsDiffs`). A same-JS-type replace
  // (object -> object, array -> array with different content) is NOT a key-level diff at all:
  // api-diff recurses and embeds `[diffsMetaKey]` *inside* the merged value instead, which
  // `JsoDiffsViewer`'s own crawl already discovers on its own. So the viewer choice must be
  // "are we in a diffs tree at all" (`diffMetaKeys` presence), never "did this aggregator find a
  // top-level diff" - gating on the latter left same-type replaces rendering as a single-column
  // plain `JsoViewer` with an empty changed side.
  const mergedSource = useMemo(() => {
    if (!hasExtensionsDiffs || !diffMetaKeys) {
      return extensions
    }
    return { ...extensions, [diffMetaKeys.diffsMetaKey]: extensionsDiffs }
  }, [diffMetaKeys, extensions, extensionsDiffs, hasExtensionsDiffs])

  return (
    <LevelContext.Provider value={nestedLevel}>
      <div className="flex flex-col">
        <NestingIndicatorTitleRow
          title="Extensions"
          usage={NestingIndicatorTitleRowUsage.JsonSchema}
          lastInvisible
        />
        {diffMetaKeys ? (
          <JsoDiffsViewer
            mergedSource={mergedSource}
            initialLevel={nestedLevel}
            displayMode={displayMode}
            diffMetaKeys={diffMetaKeys}
          />
        ) : (
          <JsoViewer
            source={extensions}
            initialLevel={nestedLevel}
          />
        )}
      </div>
    </LevelContext.Provider>
  )
}
