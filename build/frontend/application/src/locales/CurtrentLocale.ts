import { cache } from 'react'
import { defaultLocale, LocaleEnum } from './locales'

interface CacheValue { locale: LocaleEnum }
function getCacheImpl (): CacheValue {
  return { locale: defaultLocale }
}
const getCache = cache(getCacheImpl)

export function setCurrentLocale (locale: string | LocaleEnum | undefined | null): void {
  getCache().locale = (typeof locale === 'string' ? LocaleEnum[locale] : locale) ?? defaultLocale
}

export function getCurrentLocale (): LocaleEnum {
  return getCache().locale
}
