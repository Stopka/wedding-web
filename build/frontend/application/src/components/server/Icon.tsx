import React, { ReactElement } from 'react'
import 'material-symbols/outlined.scss'

const Icon = ({ iconName, className }: { iconName: String, className?: string }): ReactElement => (
  <span className={'material-symbols-outlined' + ' ' + (className ?? '')} aria-hidden={true}>
    {iconName}
  </span>
)

export default Icon
