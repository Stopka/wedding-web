import { LocaleNamespaceEnum } from '../../locales/locales'
import { ReactElement } from 'react'
import getTranslator from '../../locales/getTranslator'

export default async function YearMonthFormat ({ date, nullText }: {
  date?: Date | null
  nullText?: string
}): Promise<ReactElement> {
  const translate = getTranslator(LocaleNamespaceEnum.date)
  if (date === null || date === undefined) {
    return <span className={'year-month none'}>{nullText}</span>
  }
  const dateObject = new Date(date)
  return <time dateTime={`${dateObject.getFullYear().toString().padStart(4, '0')}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}`} className={'year-month'}>
    {translate(`month${dateObject.getMonth()}`)} {dateObject.getFullYear()}
  </time>
}
