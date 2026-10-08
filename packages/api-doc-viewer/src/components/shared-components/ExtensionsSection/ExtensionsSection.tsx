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
}

/**
 * "Extensions" header + JSO tree of `x-*` values. Shared by AsyncAPI (message / channel / operation)
 * and OpenAPI (operation, response, Responses Object). Picks `JsoDiffsViewer` when diff meta keys
 * are provided.
 */
export const ExtensionsSection: FC<ExtensionsSectionProps> = (props) => {
  const { rawValues, variant, testId, titleRowDiffProps, [ATTRIBUTE_PRECEDED_BY]: precededBy } = props
  const diffMetaKeys = useDiffMetaKeys()

  const content = (
    <>
      <TitleRow
        data-precededby={precededBy}
        value={EXTENSIONS_SECTION_TITLE}
        expandable={false}
        variant={variant}
        usage={TitleRowUsage.AsyncApiJsoSection}
        {...titleRowDiffProps}
      />
      {diffMetaKeys ? (
        <JsoDiffsViewer
          data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
          mergedSource={rawValues}
          initialLevel={1}
          diffMetaKeys={diffMetaKeys}
        />
      ) : (
        <JsoViewer
          data-precededby={PrecededBy.MESSAGE_SECTION_HEADER_HIGH_LEVEL}
          source={rawValues}
          initialLevel={1}
        />
      )}
    </>
  )
  // Without a test id the section renders as a fragment - the exact DOM AsyncAPI always had.
  return testId ? <div data-testid={testId} className="flex flex-col">{content}</div> : content
}
