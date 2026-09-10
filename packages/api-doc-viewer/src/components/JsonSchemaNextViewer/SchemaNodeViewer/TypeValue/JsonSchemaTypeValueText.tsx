import { FC, memo } from "react"
import "./JsonSchemaTypeValueText.css"
import { JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR } from "./json-schema-type-value-colors"

export type JsonSchemaTypeValueTextProps = {
  text: string
  /**
   * Omitted -> defaults to {@link JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR} (title row's color).
   * `null` -> no inline color is set, so an ambient CSS color (e.g. a combiner-selector
   * button's own selected/unselected text color) applies instead. A string -> used as-is.
   */
  color?: string | null
  className?: string
}

/**
 * Leaf: draws type-value text only. No diff awareness, no visibility gate - callers decide
 * whether to render it at all.
 */
export const JsonSchemaTypeValueText: FC<JsonSchemaTypeValueTextProps> = memo<JsonSchemaTypeValueTextProps>((props) => {
  const { text, color: colorProp, className } = props
  const color = colorProp === undefined ? JSON_SCHEMA_TYPE_VALUE_DEFAULT_COLOR : colorProp

  return (
    <span
      className={["json-schema-type-value-text", className].filter(Boolean).join(" ")}
      style={color ? { color } : undefined}
    >
      {text}
    </span>
  )
})
