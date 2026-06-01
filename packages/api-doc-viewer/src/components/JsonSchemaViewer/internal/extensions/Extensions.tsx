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
import { IJsonSchemaBaseType } from "@netcracker/qubership-apihub-api-data-model";
import { FC, useMemo } from "react";

type ExtensionsProps = {
  extensions: NonNullable<IJsonSchemaBaseType['extensions']>
}

export const Extensions: FC<ExtensionsProps> = (props) => {
  const { extensions } = props

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
      return (
        <JsoDiffsViewer
          mergedSource={extensions}
          initialLevel={level + 1}
          displayMode={displayMode}
          diffMetaKeys={diffMetaKeys}
          diffTypes={[]}
        />
      )
    }
    return (
      <JsoViewer
        source={extensions}
        initialLevel={level + 1}
      />
    )
  }, [inlineDiffsLayout, sideBySideLayout, diffMetaKeys, extensions, level, displayMode])

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
