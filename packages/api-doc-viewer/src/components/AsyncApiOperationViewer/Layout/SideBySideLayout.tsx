import { FC, memo, ReactElement } from "react";

type SideBySideLayoutProps = {
  left: ReactElement
  right: ReactElement
}

export const SideBySideLayout: FC<SideBySideLayoutProps> = memo<SideBySideLayoutProps>((props) => {
  const { left, right } = props
  return (
    <div className="flex flex-row">
      <div className='w-1/2'>
        {left}
      </div>
      <div className='w-1/2'>
        {right}
      </div>
    </div>
  )
})
