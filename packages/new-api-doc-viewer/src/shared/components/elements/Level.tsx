import { memo, type FC } from "react";

type LevelProps = {
  level: number
}

export const Level: FC<LevelProps> = memo<LevelProps>(({ level }) => {
  if (level === 0) {
    return null
  }

  return <div style={{ display: 'flex', flexDirection: 'row' }}>
    {Array.from({ length: level }).map((_, index) => (
      <div key={index} className="level-line"></div>
    ))}
  </div>
})
