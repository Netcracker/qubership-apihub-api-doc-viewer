import { useDiffMetaKeys } from "@apihub/contexts/DiffMetaKeysContext"
import { FC } from "react"
import { JsoDiffsViewer } from "../../JsoViewer/JsoDiffsViewer"
import { JsoViewer } from "../../JsoViewer/JsoViewer"
import { TextValueVariant } from "../TextValue/types"
import { TitleRow } from "../TitleRow/TitleRow"
import { TitleRowProps, TitleRowUsage } from "../TitleRow/types"
import { ATTRIBUTE_PRECEDED_BY, PrecededBy, WithPrecededByProps } from "../WithPrecededByProps"

export const EXTENSIONS_SECTION_TITLE = 'Extensions'

export type ExtensionsSectionProps = WithPrecededByProps & {
  /** `x-*` map; in diffs mode it carries its own diff record. */
  rawValues: Record<string, unknown>
  variant: TextValueVariant
  testId?: string
  /** Header diff props (whole-section add / remove). */
  titleRowDiffProps?: Pick<TitleRowProps, 'diff' | 'descendantDiffs' | 'diffsSeverities' | 'highlightingMode'>
  /** `data-precededby` of the JSO viewer's first row; defaults to the AsyncAPI section-header spacing. */
  contentPrecededBy?: PrecededBy
}

type ExtensionsSectionTitleRowProps = WithPrecededByProps & Pick<ExtensionsSectionProps, 'variant' | 'titleRowDiffProps'> & {
  /** A collapsible section's expander (OpenAPI 2nd-level sections); omitted = not expandable. */
  section?: Pick<TitleRowProps, 'usage' | 'expandable' | 'expanded' | 'onClickExpander'>
}

/** The "Extensions" header row alone (OpenAPI plans it as an element of its own). */
export const ExtensionsSectionTitleRow: FC<ExtensionsSectionTitleRowProps> = (props) => {
  const { variant, titleRowDiffProps, section, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  return (
    <TitleRow
      data-precededby={precededBy}
      value={EXTENSIONS_SECTION_TITLE}
      expandable={false}
      variant={variant}
      usage={TitleRowUsage.AsyncApiJsoSection}
      {...section}
      {...titleRowDiffProps}
    />
  )
}

type ExtensionsSectionContentProps = Pick<ExtensionsSectionProps, 'rawValues' | 'contentPrecededBy'>

/** The JSO tree of `x-*` values alone: `JsoDiffsViewer` when diff meta keys are provided. */
export const ExtensionsSectionContent: FC<ExtensionsSectionContentProps> = (props) => {
  const { rawValues, contentPrecededBy = PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL } = props
  const diffMetaKeys = useDiffMetaKeys()
  return diffMetaKeys
    ? (
      <JsoDiffsViewer
        data-precededby={contentPrecededBy}
        mergedSource={rawValues}
        initialLevel={1}
        diffMetaKeys={diffMetaKeys}
      />
    )
    : (
      <JsoViewer
        data-precededby={contentPrecededBy}
        source={rawValues}
        initialLevel={1}
      />
    )
}

/**
 * "Extensions" header + JSO tree of `x-*` values. Used by AsyncAPI (message / channel / operation);
 * OpenAPI composes `ExtensionsSectionTitleRow` and `ExtensionsSectionContent` with a separator row
 * between them.
 */
export const ExtensionsSection: FC<ExtensionsSectionProps> = (props) => {
  const { rawValues, variant, testId, titleRowDiffProps, contentPrecededBy, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const content = (
    <>
      <ExtensionsSectionTitleRow data-precededby={precededBy} variant={variant} titleRowDiffProps={titleRowDiffProps} />
      <ExtensionsSectionContent rawValues={rawValues} contentPrecededBy={contentPrecededBy} />
    </>
  )
  // Without a test id the section renders as a fragment - the exact DOM AsyncAPI always had.
  return testId ? <div data-testid={testId} className="flex flex-col">{content}</div> : content
}
