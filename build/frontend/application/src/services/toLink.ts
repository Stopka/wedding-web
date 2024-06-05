import { LocaleEnum } from '../locales/locales'
import resolveResourceFromTypename from './resolveResourceFromTypename'
import { getCurrentLocale } from '../locales/CurtrentLocale'

const resolveLocalePrefix = (locale?: LocaleEnum): string => {
  let effectiveLocale = locale
  if (effectiveLocale === undefined) {
    effectiveLocale = getCurrentLocale()
  }
  return effectiveLocale !== undefined ? `/${effectiveLocale}` : ''
}

const resolveOptionalString = (id: string | null | undefined): string => {
  if (typeof id !== 'string') {
    return ''
  }
  return `/${id}`
}

export default function toLink ({ __typename: typename, id, slug }: {
  __typename?: string
  id?: string | null
  slug?: string | null
}, locale?: LocaleEnum): string {
  return resolveLocalePrefix(locale) +
    resolveResourceFromTypename(typename) +
    resolveOptionalString(id) +
    resolveOptionalString(slug)
}
