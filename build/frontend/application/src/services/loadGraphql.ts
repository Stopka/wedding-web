import createConfig from '../config/createConfig'
import createGraphqlServerClient from '../graphql/client/createGraphqlServerClient'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { OperationVariables } from '@apollo/client/core/types'
import { QueryOptions } from '@apollo/client/core/watchQueryOptions'

export default async function loadGraphql<TData, TVariables extends OperationVariables> (options: QueryOptions<TVariables, TData>): Promise<TData> {
  const clientConfig = createConfig().get('client')
  const graphql = createGraphqlServerClient()
  const { data, error, loading } = await graphql.query(options)
  if (loading) {
    return data
  }
  if (error != null) {
    throw error
  }
  return data
}
