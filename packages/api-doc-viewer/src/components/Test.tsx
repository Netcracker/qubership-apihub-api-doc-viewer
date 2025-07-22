import { FC, memo, ReactElement, useCallback, useState } from "react"

type Item = {
  name: string
  value: string | number | boolean | null | undefined | ReactElement
  visible: boolean
}

type RowProps = {
  item: Item
  onExpand: (index: number, count: number) => void
  onCollapse: (index: number, count: number) => void
  flag?: boolean
}

const INVISIBLE_COUNT = 2

const EXPANDABLE_INDEX = 10

const Row: FC<RowProps> = memo<RowProps>(({ item, onExpand, onCollapse, flag }) => {
  const [expanded, setExpanded] = useState(false)
  console.log('render', item.name)
  return (
    <li onClick={() => {
      if (expanded) {
        onCollapse(EXPANDABLE_INDEX, INVISIBLE_COUNT)
      } else {
        onExpand(EXPANDABLE_INDEX, INVISIBLE_COUNT)
      }
      setExpanded(!expanded)
    }}>
      {item.name}: {item.value} {flag ? expanded ? 'collapse' : 'expand' : ''}
    </li>
  )
})

type ViewerProps = {
  source: unknown
}

export const TestViewer: FC<ViewerProps> = ({ source }) => {
  const [list, setList] = useState(() => getList(source))

  const onExpand = useCallback((index: number, count: number) => {
    setList((prevList) => {
      const newList = [...prevList]
      for (let i = index + 1; i <= index + count; i++) {
        newList[i].visible = true
      }
      return newList
    })
  }, [])

  const onCollapse = useCallback((index: number, count: number) => {
    setList((prevList) => {
      const newList = [...prevList]
      for (let i = index + 1; i <= index + count; i++) {
        newList[i].visible = false
      }
      return newList
    })
  }, [])

  return <ul>
    {list.map((item, i) => {
      if (item.visible) {
        return <Row key={item.name} item={item} onExpand={onExpand} onCollapse={onCollapse} flag={i === EXPANDABLE_INDEX} />
      }
      return null
    })}
  </ul>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getList(_: unknown): Item[] {
  return Array(20).fill(null).map((_, index) => ({
    name: `Item ${index}`,
    value: `Value ${index}`,
    visible: index <= EXPANDABLE_INDEX || index > EXPANDABLE_INDEX + INVISIBLE_COUNT
  }))
}
