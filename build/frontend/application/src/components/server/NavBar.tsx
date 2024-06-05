import React, { ReactElement } from 'react'
import NavigationCollapser from '../client/NavigationCollapser'
import {
  MainNavigationDocument,
  NavigationItemFragment
} from '../../graphql/generated/types'
import loadGraphql from '../../services/loadGraphql'
import locales, { LocaleEnum } from '../../locales/locales'
import Swing from '../svg/swing.svg'
import transformLocaleToInputType from '../../locales/transformLocaleToInputType'
import { getCurrentLocale } from '../../locales/CurtrentLocale'

export default async function NavBar (): Promise<ReactElement> {
  const data = await loadGraphql({
    query: MainNavigationDocument,
    variables: {
      locale: transformLocaleToInputType(getCurrentLocale())
    }
  })
  const navigationData = data.MainNavigation
  if (navigationData == null) {
    throw new Error('Navigation data not found')
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              {/* <Swing/> */}
              <span>Áňa ❤️ Štěpa</span>
            </a>
            <NavigationCollapser
              buttonLabel='Toggle navigation'
              buttonIcon='menu'
              className='menu'
              items={navigationData.items}
              langItems={
                Object.keys(locales).map((localeEnum: LocaleEnum): NavigationItemFragment => {
                  return {
                    id: localeEnum,
                    url: 'locale:' + localeEnum,
                    title: locales[localeEnum].label
                  }
                })
              }
            />
          </div>
        </nav>
    </>
  )
}
