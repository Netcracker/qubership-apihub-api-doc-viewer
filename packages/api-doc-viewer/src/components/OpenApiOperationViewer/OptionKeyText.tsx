import { DiffsClassesBuilder } from "@netcracker/qubership-apihub-next-data-model/building-service/abstract/tree-with-diffs/node-diffs-data/utilities"
import { HighlightVariant } from "@netcracker/qubership-apihub-next-data-model/model/abstract/tree-with-diffs/tree-node.interface"
import { FC } from "react"

type OptionKeyTextProps = {
  text: string
  /** Text highlighter from the data layer (a renamed media type / response code); none = plain text. */
  highlight: HighlightVariant | undefined
}

/**
 * Title of a media-type / response-code selector option. Unchanged options keep the bare text, so
 * their markup does not change.
 */
export const OptionKeyText: FC<OptionKeyTextProps> = ({ text, highlight }) => (
  highlight ? <span className={DiffsClassesBuilder.highlighter(highlight)}>{text}</span> : <>{text}</>
)
