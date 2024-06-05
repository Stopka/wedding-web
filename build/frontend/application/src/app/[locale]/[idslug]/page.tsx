import React, { ReactElement } from 'react'
import createGraphqlServerClient from '../../../graphql/client/createGraphqlServerClient'
import { PageDocument } from '../../../graphql/generated/types'
import { LocaleEnum, LocaleNamespaceEnum } from '../../../locales/locales'
import { getCurrentLocale, setCurrentLocale } from '../../../locales/CurtrentLocale'
import transformLocaleToInputType from '../../../locales/transformLocaleToInputType'
import Content from '../../../components/server/Content'
import getTranslator from '../../../locales/getTranslator'
import parseIdAndSlug from '../../../services/parseIdAndSlug'
import handleError from '../../../graphql/handleError'
import { redirect } from 'next/navigation'

export default async function PagePage (
  { params: { locale, idslug } }: { params: { locale: LocaleEnum, idslug: string } }
): Promise<ReactElement> {
  setCurrentLocale(locale)
  const { id, slug } = parseIdAndSlug(idslug)
  const translate = getTranslator(LocaleNamespaceEnum.page)
  try {
    const graphql = createGraphqlServerClient()
    const { data } = await graphql.query({
      query: PageDocument,
      variables: {
        locale: transformLocaleToInputType(locale),
        id
      }
    })
    const page = data?.Page
    if (slug !== page?.slug && page?.slug !== undefined && page?.slug !== null && page?.slug !== '') {
      redirect(`/${getCurrentLocale()}/${id}-${page?.slug ?? ''}`)
    }
    return <Content content={page.content}/>
  } catch (error) {
    return handleError(error)
  }
}
