import { UxBadge } from "@apihub/components/kit/ux/UxBadge/UxBadge"
import { LayoutSide } from "@apihub/types/internal/LayoutSide"
import { Diff } from "@netcracker/qubership-apihub-api-diff"
import { FC } from "react"
import { JsonSchemaNodeTitleDisplay } from "../utils/resolve-json-schema-node-title"
import { JsonSchemaRequiredDiffIndicator } from "./JsonSchemaRequiredDiffIndicator"

const JSON_SCHEMA_NODE_TITLE_CLASS = "text-xs text-black font-Inter-Medium"

export type JsonSchemaNodeTitleProps = {
  display: JsonSchemaNodeTitleDisplay
  required?: boolean
  requiredDiff?: Diff
  layoutSide?: LayoutSide
}

export type JsonSchemaNodeTitlePlainProps = Omit<JsonSchemaNodeTitleProps, "requiredDiff" | "layoutSide">

export const JsonSchemaNodeTitlePlain: FC<JsonSchemaNodeTitlePlainProps> = (props) => {
  const { display, required = false } = props

  switch (display.variant) {
    case "badge":
      return <UxBadge kind={display.badgeKind} text={display.text} inline={true} />
    case "text":
      return (
        <div className={`inline ${JSON_SCHEMA_NODE_TITLE_CLASS}`}>
          {display.text}
          {required && <sup className="ml-0.5 text-red-500">*</sup>}
        </div>
      )
  }
}

export const JsonSchemaNodeTitleWithDiffs: FC<JsonSchemaNodeTitleProps> = (props) => {
  const { display, required = false, requiredDiff, layoutSide } = props

  switch (display.variant) {
    case "badge":
      return <UxBadge kind={display.badgeKind} text={display.text} inline={true} />
    case "text":
      return (
        <div className={`inline ${JSON_SCHEMA_NODE_TITLE_CLASS}`}>
          {display.text}
          <JsonSchemaRequiredDiffIndicator
            required={required}
            requiredDiff={requiredDiff}
            layoutSide={layoutSide}
          />
        </div>
      )
  }
}

/** @deprecated Use {@link JsonSchemaNodeTitlePlain} or {@link JsonSchemaNodeTitleWithDiffs}. */
export const JsonSchemaNodeTitle = JsonSchemaNodeTitleWithDiffs
