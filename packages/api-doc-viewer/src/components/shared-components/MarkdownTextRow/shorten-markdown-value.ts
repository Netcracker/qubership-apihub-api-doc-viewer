import { ArrayUtils } from "@apihub/utils/common/arrays"

export const MARKDOWN_OVERFLOW_LINES_AMOUNT = 5

export function isMarkdownExpandable(value: string): boolean {
  return ArrayUtils.trim(value.split("\n")).length > MARKDOWN_OVERFLOW_LINES_AMOUNT
}

export function shortenMarkdownValue(value: string, expanded: boolean): string {
  const lines = ArrayUtils.trim(value.split("\n"))
  if (lines.length <= MARKDOWN_OVERFLOW_LINES_AMOUNT || expanded) {
    return value
  }
  return lines.slice(0, MARKDOWN_OVERFLOW_LINES_AMOUNT).join("\n")
}
