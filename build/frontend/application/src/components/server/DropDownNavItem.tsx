import { useParams, usePathname } from 'next/navigation'
import React, { MouseEventHandler, ReactElement } from 'react'
import Link from 'next/link'
import { NavigationItemFragment } from '../../graphql/generated/types'

const isFullPath = (path: string): boolean => {
  return path.match(/^\/[a-zA-Z-]+\//) !== null
}

const replaceLocale = (path: string, newLocale: string): string => {
  if (!isFullPath(path)) {
    return path.replace(/^\/[a-zA-Z-]+/, `/${newLocale}/`)
  }
  return path.replace(/^\/[a-zA-Z-]+\//, `/${newLocale}/`)
}

const extractLocaleIfExists = (url: string | null | undefined): string | undefined => {
  return url?.match(/^locale:([a-zA-Z-]+)$/)?.[1]
}

const prepareUrl = (locale: string, url: string | null | undefined): string => {
  const localePrefix = `${locale !== '' ? '/' : ''}${locale}`
  const sanitizedUrl = url === '/' ? '' : (url ?? '')
  return `${localePrefix}${sanitizedUrl}`
}

export default function DropDownNavItem ({ item, onClick }: {
  item: NavigationItemFragment
  onClick?: MouseEventHandler<HTMLAnchorElement>
}): ReactElement {
  const currentPath = usePathname()
  const params = useParams()
  const currentLocale = (params.locale ?? '').toString()
  const newLocale = extractLocaleIfExists(item.url)
  const url = newLocale !== undefined
    ? replaceLocale(currentPath, newLocale)
    : prepareUrl(currentLocale, item.url)
  const active = currentPath === url
  return (
    <li className={ (active ? ' active' : '')}>
      <Link
        href={url}
        className='dropdown-item'
        aria-current={active ? 'page' : undefined}
        onClick={onClick}
      >
        <span>{item.title}</span>
      </Link>
    </li>
  )
}
