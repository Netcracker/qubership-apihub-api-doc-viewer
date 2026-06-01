import { NestingIndicatorTitle } from "@apihub/components/common/NestingIndicatorTitle";
import { JsoViewer } from "@apihub/components/JsoViewer/JsoViewer";
import { LevelIndicator } from "@apihub/components/shared-components/LevelIndicator";
import { DEFAULT_ROW_PADDING_LEFT } from "@apihub/constants/configuration";
import { useLayoutMode } from "@apihub/contexts/LayoutModeContext";
import { useLevelContext } from "@apihub/contexts/LevelContext";
import { CHANGED_LAYOUT_SIDE, LayoutSide, ORIGIN_LAYOUT_SIDE } from "@apihub/types/internal/LayoutSide";
import { INLINE_DIFFS_LAYOUT_MODE, SIDE_BY_SIDE_DIFFS_LAYOUT_MODE } from "@apihub/types/LayoutMode";
import { IJsonSchemaBaseType } from "@netcracker/qubership-apihub-api-data-model";
import { FC } from "react";

type ExtensionsProps = {
  extensions: NonNullable<IJsonSchemaBaseType['extensions']>
}

export const Extensions: FC<ExtensionsProps> = (props) => {
  const { extensions } = props

  const layoutMode = useLayoutMode()
  const inlineDiffsLayout = layoutMode === INLINE_DIFFS_LAYOUT_MODE
  const sideBySideDiffsLayout = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  if (inlineDiffsLayout) {
    return null // TODO: Not supported yet
  }

  if (sideBySideDiffsLayout) {
    return (
      <div className='flex flex-row'>
        <ExtensionsContent extensions={extensions} layoutSide={ORIGIN_LAYOUT_SIDE} />
        <ExtensionsContent extensions={extensions} layoutSide={CHANGED_LAYOUT_SIDE} />
      </div>
    )
  }

  return (
    <div className='flex flex-row'>
      <ExtensionsContent extensions={extensions} layoutSide={CHANGED_LAYOUT_SIDE} />
    </div>
  )
}

type ExtensionsContentProps = {
  extensions: NonNullable<IJsonSchemaBaseType['extensions']>
  layoutSide: LayoutSide
}

const ExtensionsContent: FC<ExtensionsContentProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { extensions, layoutSide } = props

  const level = useLevelContext()
  const layoutMode = useLayoutMode()
  const sideBySideDiffsLayout = layoutMode === SIDE_BY_SIDE_DIFFS_LAYOUT_MODE

  const width = sideBySideDiffsLayout ? 'w-1/2' : 'w-full'

  return (
    <div className={`${width}`}>
      <div className='flex flex-col'>
        <div className={`flex flex-row ${DEFAULT_ROW_PADDING_LEFT}`}>
          <LevelIndicator level={level + 1} lastInvisible />
          <NestingIndicatorTitle>
            Extensions
          </NestingIndicatorTitle>
        </div>
        {extensions.map((extension) => (
          <JsoViewer
            key={Object.keys(extension)[0]}
            source={extension}
            initialLevel={level + 1}
          />
        ))}
      </div>
    </div>
  )
}
