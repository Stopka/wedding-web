import { z } from 'zod'
import csDictionary from './cs.json'
import enDictionary from './en.json'

export enum LocaleEnum {
  cs = 'cs',
  en = 'en'
}

export enum LocaleNamespaceEnum {
  default = 'default',
  curriculum = 'curriculum',
  contacts = 'contacts',
  platforms = 'platforms',
  date = 'date',
  pagination = 'pagination',
  page = 'page',
}

export interface Locale {
  label: string
  flagEmoji: string
}

export type Locales = Required<Record<LocaleEnum, Locale>>
export const defaultLocale = LocaleEnum.en
export const defaultLocaleNamespace = LocaleNamespaceEnum.default

const locales: Locales = {
  [LocaleEnum.cs]: {
    label: 'Česky',
    flagEmoji: '🇨🇿'
  },
  [LocaleEnum.en]: {
    label: 'English',
    flagEmoji: '🇬🇧'
  }
}
const dictionarySchema = z.record(
  z.nativeEnum(LocaleEnum),
  z.record(
    z.nativeEnum(LocaleNamespaceEnum),
    z.record(z.string())
  )
)

export const dictionaries = dictionarySchema.parse({
  [LocaleEnum.en]: enDictionary,
  [LocaleEnum.cs]: csDictionary
})

export default locales
