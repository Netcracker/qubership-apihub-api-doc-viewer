import { FC } from "react";

type LevelIndicatorProps = {
  level: number
}

export const LevelIndicator: FC<LevelIndicatorProps> = (props) => {
  const { level } = props

  if (level === 0) return null

  return (
    <div
      style={{
        display: 'flex',
        gap: 24,
        height: '100%',
      }}
    >
      {Array.from({ length: level }).map((_, index) => (
        <div
          key={index}
          style={{
            width: '1px',
            backgroundColor: '#9e9e9e',
            alignSelf: 'stretch',
          }}
        />
      ))}
    </div>
  )
}
