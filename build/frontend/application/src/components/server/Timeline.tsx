import React, { ReactElement, ReactNode } from 'react'
import YearMonthFormat from './YearMonthFormat'
import getTranslator from '../../locales/getTranslator'
import { LocaleNamespaceEnum } from '../../locales/locales'
import MediaImage from './MediaImage'
import { ImageFragment } from '../../graphql/generated/types'

export default function Timeline ({ header, fromDate, toDate, image, children }: {
  header: string
  fromDate: Date
  toDate: Date | null
  image: ImageFragment | undefined | null
  children: ReactNode
}): ReactElement {
  const translate = getTranslator(LocaleNamespaceEnum.date)
  return <section className={'timeline'}>
    <h2>{header}</h2>
    <MediaImage media={image}/>
    <small className={'from'}><YearMonthFormat date={fromDate}/></small>
    <small className={'to'}><YearMonthFormat date={toDate} nullText={(translate('now'))}/></small>
    <div className={'details'}>{children}</div>
  </section>
}
