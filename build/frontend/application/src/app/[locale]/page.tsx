import React, { ReactElement } from 'react'
import { HomePageDocument} from '../../graphql/generated/types'
import createGraphqlServerClient from '../../graphql/client/createGraphqlServerClient'
import { LocaleEnum } from '../../locales/locales'
import transformLocaleToInputType from '../../locales/transformLocaleToInputType'
import Content from '../../components/server/Content'
import { setCurrentLocale } from '../../locales/CurtrentLocale'

export default async function SlugPage (
  { params: { locale } }: { params: { locale: LocaleEnum } }
): Promise<ReactElement> {
  setCurrentLocale(locale)
  const graphql = createGraphqlServerClient()
  const { data } = await graphql.query({
    query: HomePageDocument,
    variables: {
      locale: transformLocaleToInputType(locale)
    }
  })
  const page = data.HomePage
  if (page == null) {
    throw new Error('HomePage data not found')
  }
  return <Content content={page.content}/>
}
