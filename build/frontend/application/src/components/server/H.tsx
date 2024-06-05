import React, { ReactElement, ReactNode } from 'react'
import Emoji from './Emoji'

type HLevel = 1 | 2 | 3 | 4 | 5 | 6

const HElement = ({ level, children }: { level: HLevel, children: ReactNode }): ReactElement => {
  switch (level) {
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
  }

  return <h6>{children}</h6>
}

export default function H ({
  level,
  children,
  title,
  emoji
}: {
  level?: HLevel
  children: ReactNode
  title: string
  emoji?: string | null
}): ReactElement {
  return (<>
      <HElement level={level ?? 1}>
        <Emoji value={emoji}/> {title}
      </HElement>
      {children}
    </>
  )
}
