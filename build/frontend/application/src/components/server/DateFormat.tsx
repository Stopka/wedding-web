import { ReactElement } from 'react'
import { LocaleNamespaceEnum } from '../../locales/locales'
import getTranslator from '../../locales/getTranslator'

export default function DateFormat ({ date, nullText }: { date?: Date | null, nullText?: string }): ReactElement {
  const translate = getTranslator(LocaleNamespaceEnum.date)
  const format = translate('dateFormat')
  if (date === null || date === undefined) {
    return <span className={'date none'}>{nullText}</span>
  }
  const value = new Date(date)
  return <time dateTime={`${value.getFullYear().toString().padStart(4, '0')}-${(value.getMonth() + 1).toString().padStart(2, '0')}-${value.getDay().toString().padStart(2, '0')}`} className={'date'}>
    {
    format.replaceAll('%Y', value.getFullYear().toString())
      .replaceAll('%m', translate('dateMonth' + value.getMonth().toString()))
      .replaceAll('%d', value.getDay().toString())
  }
  </time>
}
