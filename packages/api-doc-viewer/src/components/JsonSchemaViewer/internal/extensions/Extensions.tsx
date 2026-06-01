import { NestingIndicatorTitle } from "@apihub/components/common/NestingIndicatorTitle";
import { JsoDiffsViewer } from "@apihub/components/JsoViewer/JsoDiffsViewer";
import { JsoViewer } from "@apihub/components/JsoViewer/JsoViewer";
import { SideBySideLayout } from "@apihub/components/shared-components/Layout/SideBySideLayout";
import { LevelIndicator } from "@apihub/components/shared-components/LevelIndicator";
import { DEFAULT_ROW_PADDING_LEFT } from "@apihub/constants/configuration";
import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext";
import { useDisplayMode } from "@apihub/contexts/DisplayModeContext";
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext";
import { useLevelContext } from "@apihub/contexts/LevelContext";
import { INLINE_DIFFS_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode";
import { DiffMetaKeys, IJsonSchemaBaseType, NodeChange } from "@netcracker/qubership-apihub-api-data-model";
import type { Diff, DiffType } from "@netcracker/qubership-apihub-api-diff";
import { isSpecificationExtensionKey, SpecificationExtensionKey } from "@netcracker/qubership-apihub-next-data-model/model/specification-extension-key";
import { FC, useMemo } from "react";

type ExtensionsProps = {
  extensions: NonNullable<IJsonSchemaBaseType['extensions']>
  $nodeChange?: NodeChange
}

const STUB_DIFF_TYPES: DiffType[] = []

export const Extensions: FC<ExtensionsProps> = (props) => {
  const { extensions, $nodeChange } = props

  const level = useLevelContext()
  const displayMode = useDisplayMode()
  const layoutMode = useLayoutMode()
  const diffMetaKeys = useDiffMetaKeys()
  const inlineDiffsLayout = layoutMode === INLINE_DIFFS_LAYOUT_MODE
  const sideBySideLayout = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  const subheader = useMemo(() => {
    const subheaderElement = (
      <div className={`flex flex-row ${DEFAULT_ROW_PADDING_LEFT}`}>
        <LevelIndicator level={level + 1} lastInvisible />
        <NestingIndicatorTitle>
          Extensions
        </NestingIndicatorTitle>
      </div>
    )
    switch (layoutMode) {
      case INLINE_DIFFS_LAYOUT_MODE:
        return null // TODO: Not supported yet
      case SIDE_BY_SIDE_DIFFS_LAYOUT_MODE:
        return (
          <SideBySideLayout left={subheaderElement} right={subheaderElement} />
        )
      default:
        return subheaderElement
    }
  }, [layoutMode, level])

  const jsoViewerElement = useMemo(() => {
    if (inlineDiffsLayout) {
      return null // TODO: Not supported yet
    }
    if (sideBySideLayout && diffMetaKeys) {
      const extensionsWithNodeChange = injectNodeChangeToExtensions(extensions, $nodeChange, diffMetaKeys)
      return (
        <JsoDiffsViewer
          mergedSource={extensionsWithNodeChange}
          initialLevel={level + 1}
          displayMode={displayMode}
          diffMetaKeys={diffMetaKeys}
          diffTypes={STUB_DIFF_TYPES}
        />
      )
    }
    return (
      <JsoViewer
        source={extensions}
        initialLevel={level + 1}
      />
    )
  }, [inlineDiffsLayout, sideBySideLayout, diffMetaKeys, extensions, level, $nodeChange, displayMode])

  if (!jsoViewerElement) {
    return null
  }

  return (
    <div className='flex flex-col'>
      {subheader}
      {jsoViewerElement}
    </div>
  )
}

function nodeChangeToDiff(nodeChange?: NodeChange): Diff | undefined {
  if (!nodeChange) {
    return undefined
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { depth, ...diff } = nodeChange
  return diff
}

function injectNodeChangeToExtensions(
  extensions: Record<SpecificationExtensionKey, unknown>,
  nodeChange: NodeChange | undefined,
  metaKeys: DiffMetaKeys | undefined,
): Record<SpecificationExtensionKey, unknown> {
  if (!nodeChange || !metaKeys) {
    return extensions
  }
  const diff = nodeChangeToDiff(nodeChange)
  if (!diff) {
    return extensions
  }
  const extensionsKeys = Object.keys(extensions)
  const extensionsDiffsRecord: Record<SpecificationExtensionKey, Diff> = {}
  for (const extensionKey of extensionsKeys) {
    if (!isSpecificationExtensionKey(extensionKey)) {
      continue
    }
    extensionsDiffsRecord[extensionKey] = diff
  }
  return {
    ...extensions,
    [metaKeys.diffsMetaKey]: extensionsDiffsRecord,
  }
}
