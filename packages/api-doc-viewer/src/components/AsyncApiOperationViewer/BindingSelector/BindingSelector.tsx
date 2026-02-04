import { AsyncApiTreeNode } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/aliases"
import { AsyncApiTreeNodeKinds } from "@netcracker/qubership-apihub-next-data-model/model/async-api/types/node-kind"
import { FC } from "react"
import "../styles/styles.css"

type BindingSelectorProps = {
  options: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING>[]
  selectedOption: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING> | null
  onSelectOption: (option: AsyncApiTreeNode<typeof AsyncApiTreeNodeKinds.BINDING>) => void
}

export const BindingSelector: FC<BindingSelectorProps> = (props) => {
  const { options, selectedOption, onSelectOption } = props

  if (options.length === 0) {
    return null
  }

  return (
    <div className='flex flex-row gap-2'>
      {options.map((option) => {
        const optionValue = option.value()
        if (!optionValue) {
          return null
        }
        return (
          <button
            key={option.id}
            className={`button-selector-option button-selector-option_secondary ${selectedOption === option ? 'selected' : ''}`}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              onSelectOption(option)
            }}
          >
            {optionValue.protocol}
          </button>
        )
      })}
    </div>
  )
}