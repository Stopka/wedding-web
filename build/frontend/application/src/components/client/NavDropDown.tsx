'use client'
import React, { ReactElement, useState } from 'react'
import { NavigationItemFragment } from '../../graphql/generated/types'
import Icon from '../server/Icon'
import DropDownNavItem from '../server/DropDownNavItem'

export default function NavDropDown ({ buttonLabel, buttonIcon, items, className, onClick }: {
  buttonLabel: string
  buttonIcon: string
  items: NavigationItemFragment[]
  className?: string
  onClick: () => void
}): ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <li className="nav-item dropdown">
      <a className={'nav-link dropdown-toggle ' + (showMenu ? 'show' : '')} href="#" role="button"
         data-bs-toggle="dropdown" aria-expanded={showMenu ? 'true' : 'false'}
        onClick={() => setShowMenu(!showMenu)}
      >
        <Icon iconName={buttonIcon}/>
        <span>{buttonLabel}</span>
      </a>
      <ul className={'dropdown-menu ' + (showMenu ? 'show' : 'hide')}>
        {items.map((item) => {
          return <DropDownNavItem key={item.id} item={item} onClick={() => {
            setShowMenu(false)
            onClick()
          }}/>
        })}
      </ul>
    </li>)
}
