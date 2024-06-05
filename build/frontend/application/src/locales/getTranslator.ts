import { defaultLocale, defaultLocaleNamespace, dictionaries, LocaleNamespaceEnum } from './locales'
import { getCurrentLocale } from './CurtrentLocale'

type Translator = (text: string) => string

export default function getTranslator (namespace?: LocaleNamespaceEnum): Translator {
  const effectiveNamespace = namespace ?? defaultLocaleNamespace
  const locale = getCurrentLocale()
  const localeDictionary = dictionaries[locale] ?? {}
  const namespaceDictionary = localeDictionary[effectiveNamespace] ?? {}

  const fallbackLocaleDictionary = dictionaries[defaultLocale] ?? {}
  const fallbackNamespaceDictionary = fallbackLocaleDictionary[effectiveNamespace] ?? {}

  return (text: string): string => {
    console.warn('T', {
      defaultLocale,
      locale,
      effectiveNamespace,
      text
    })
    const translation = namespaceDictionary[text]
    if (translation !== undefined) {
      return translation
    }
    if (locale !== defaultLocale) {
      const fallbackTranslation = fallbackNamespaceDictionary[text]
      if (fallbackTranslation !== undefined) {
        console.warn('Missing translation, returning fallback translation', {
          defaultLocale,
          locale,
          effectiveNamespace,
          text
        })
        return fallbackTranslation
      }
      console.warn('Missing translation and fallback translation', {
        defaultLocale,
        locale,
        effectiveNamespace,
        text
      })
      return text
    }
    console.warn('Missing translation', {
      defaultLocale,
      locale,
      effectiveNamespace,
      text
    })
    return text
  }
}
