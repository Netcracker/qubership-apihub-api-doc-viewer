import { FC, memo } from "react"
import "./JsonSchemaTypeValueText.css"
import { JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR } from "./json-schema-type-value-colors"

export type JsonSchemaTypeValueTextProps = {
  text: string
  color?: string
  className?: string
}

/**
 * Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
 * whether to render it at all.
 */
export const JsonSchemaTypeValueText: FC<JsonSchemaTypeValueTextProps> = memo<JsonSchemaTypeValueTextProps>((props) => {
  const { text, color = JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR, className } = props

  return (
    <span
      className={["json-schema-type-value-text", className].filter(Boolean).join(" ")}
      style={{ color }}
    >
      {text}
    </span>
  )
})
