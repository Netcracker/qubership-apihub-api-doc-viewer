import { UxBadge } from "@apihub/components/kit/ux/UxBadge/UxBadge"
import { FC } from "react"
import { JsonSchemaNodeTitleDisplay } from "../utils/resolve-json-schema-node-title"

const JSON_SCHEMA_NODE_TITLE_CLASS = "text-xs text-black font-Inter-Medium"

export type JsonSchemaNodeTitleProps = {
  display: JsonSchemaNodeTitleDisplay
}

export const JsonSchemaNodeTitle: FC<JsonSchemaNodeTitleProps> = (props) => {
  const { display } = props

  switch (display.variant) {
    case "badge":
      return <UxBadge kind={display.badgeKind} text={display.text} inline={true} />
    case "text":
      return (
        <div className={`inline ${JSON_SCHEMA_NODE_TITLE_CLASS}`}>
          {display.text}
        </div>
      )
  }
}
