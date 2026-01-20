import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import "../styles/styles.css"

type MessageSelectorProps = {
  options: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>[]
  selectedOption: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE> | null
  onSelectOption: (option: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.MESSAGE>) => void
}

export const MessageSelector: FC<MessageSelectorProps> = (props) => {
  const { options, selectedOption, onSelectOption } = props

  if (options.length === 0) {
    return null
  }

  return (
    <div className='flex flex-row gap-2'>
      {options.map((option) => {
        const optionKey = option.key.toString()
        const optionValue = option.value()
        const optionTitle = optionValue?.title ?? optionValue?.internalTitle ?? optionKey
        if (!optionTitle) {
          return null
        }
        return (
          <button
            key={option.id}
            className={`button-selector-option ${selectedOption === option ? 'selected' : ''}`}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onSelectOption(option)
            }}
          >
            {optionTitle}
          </button>
        )
      })}
    </div>
  )
}