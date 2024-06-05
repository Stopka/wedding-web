import { LocaleEnum } from './locales'
import { LocaleInputType } from '../graphql/generated/types'

export default function transformLocaleToInputType (locale: LocaleEnum): LocaleInputType {
  const localeString = locale.toString()
  const transformedLocaleString = localeString.charAt(0).toUpperCase() + localeString.slice(1)
  const inputLocale = LocaleInputType[transformedLocaleString]
  if (inputLocale === undefined) {
    throw new Error('Invalid locale')
  }
  return inputLocale
}
