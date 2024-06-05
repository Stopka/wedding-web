import React, { ReactElement, ReactNode } from 'react'
import Link from 'next/link'
import Icon from './Icon'
import getTranslator from '../../locales/getTranslator'
import { LocaleNamespaceEnum } from '../../locales/locales'

const buildPageHref = (link: string, page: number, totalPages: number): string => {
  if (page <= 1) {
    return link
  }
  if (page > totalPages) {
    page = totalPages
  }
  if (link.includes('?')) {
    return `${link}&page=${page}`
  }
  return `${link}?page=${page}`
}

const PageLink = (
  { link, page, totalPages, currentPage, children, className, ariaLabel }:
  {
    link: string
    page: number
    currentPage: number
    totalPages: number
    children: ReactNode
    className?: string
    ariaLabel?: string
  }
): ReactElement => {
  return <li className={
    (page > totalPages || page < 1 ? 'disabled ' : '') +
    (page === currentPage ? 'active ' : '') +
    (className ?? '')
  }>
    <Link href={buildPageHref(link, page, totalPages)}
          aria-label={ariaLabel}>
      {children}
    </Link>
  </li>
}

export default function AbsolutePager (
  { data, link }:
  {
    data: { page?: number | undefined | null, totalPages?: number | undefined | null } | undefined | null
    link: string
  }
): ReactElement {
  const translate = getTranslator(LocaleNamespaceEnum.pagination)
  const totalPages = data?.totalPages ?? 1
  const currentPage = data?.page ?? 1
  return <nav className={'pagination'} aria-label={translate('navigation')}>
    <ul>
      <PageLink link={link} totalPages={totalPages} currentPage={currentPage} page={1} className={'first'} ariaLabel={translate('first')}>
        <Icon iconName={'first_page'}/>
      </PageLink>
      <PageLink link={link} totalPages={totalPages} currentPage={currentPage} page={currentPage - 1}
                className={'previous'} ariaLabel={translate('previous')}>
        <Icon iconName={'navigate_before'}/>
      </PageLink>
      {Array.from({ length: 7 }, (el, index) => Math.max((data?.page ?? 1) - 3, 1) + index)
        .map(pageNumber => {
          if (pageNumber > totalPages) {
            return ''
          }
          return <PageLink link={link} totalPages={totalPages} currentPage={currentPage} page={pageNumber}
                           className={'page'}>
            {pageNumber}
          </PageLink>
        })}
      <PageLink link={link} totalPages={totalPages} currentPage={currentPage} page={currentPage + 1} className={'next'} ariaLabel={translate('next')}>
        <Icon iconName={'navigate_next'}/>
      </PageLink>
      <PageLink link={link} totalPages={totalPages} currentPage={currentPage} page={totalPages} className={'last'} ariaLabel={translate('last')}>
        <Icon iconName={'last_page'}/>
      </PageLink>
    </ul>
  </nav>
}
