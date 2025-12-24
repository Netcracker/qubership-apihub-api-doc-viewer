import { FC } from "react";

type GapSize = 'small' | 'medium' | 'large'

type LevelIndicatorProps = {
  level: number
  gapSize?: GapSize
}

const GAP_SIZES: Record<GapSize, number> = {
  small: 8,
  medium: 16,
  large: 24,
}

export const LevelIndicator: FC<LevelIndicatorProps> = (props) => {
  const { level, gapSize = 'medium' } = props
  const gap = GAP_SIZES[gapSize]

  if (level === 0) return null

  return (
    <div
      style={{
        display: 'flex',
        gap: `${gap}px`,
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
