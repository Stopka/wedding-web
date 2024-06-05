'use client'
import {NavigationItemFragment} from '../../graphql/generated/types'
import React, {ReactElement, useState} from 'react'
import Icon from '../server/Icon'
import NavItem from '../server/NavItem'
import NavDropDown from "./NavDropDown";

export default function NavigationCollapser({buttonLabel, buttonIcon, items, langItems, className}: {
  buttonLabel: string,
  buttonIcon: string,
  items: NavigationItemFragment[],
  langItems: NavigationItemFragment[],
  className?: string
}): ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  className = className ?? ''
  return (
    <>
      <button className={'navbar-toggler ' + (showMenu ? '' : 'collapsed')} type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded={showMenu ? 'true' : 'false'}
              aria-label={buttonLabel} onClick={() => setShowMenu(!showMenu)}>
        <Icon iconName={showMenu ? 'close' : buttonIcon}/>
      </button>
      <div className={'collapse navbar-collapse' + (showMenu ? ' show' : '') + ' ' + className}
           id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map((item) => {
            return <NavItem key={item.id} item={item} onClick={() => setShowMenu(false)}/>
          })}
        </ul>
        <ul className="navbar-nav mb-2 mb-lg-0">
          <NavDropDown buttonLabel={''} buttonIcon={'translate'} items={langItems} onClick={() => setShowMenu(false)}/>
        </ul>
      </div>
    </>
  )
}
