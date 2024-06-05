import { notFound, permanentRedirect, redirect, RedirectType } from 'next/navigation'
import resolveResourceFromTypename from './resolveResourceFromTypename'
import { getCurrentLocale } from '../locales/CurtrentLocale'

export default function redirectToSlug (
  object: {
    id?: string | null | undefined
    slug?: string | null | undefined
    __typename?: string | null | undefined
  } | undefined | null,
  slug?: string
): void | never {
  if (object === null || object === undefined) {
    notFound()
  }
  const objectSlug = typeof object.slug !== 'string' || object.slug === '' ? '-' : object.slug
  if (objectSlug !== slug) {
    permanentRedirect(`/${getCurrentLocale()}/${resolveResourceFromTypename(object.__typename)}/${object.id ?? ''}/${objectSlug}`)
  }
}
