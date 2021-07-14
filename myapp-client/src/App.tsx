import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { SearchResultField } from './components/SearchResultField'
import { apolloClient } from './graphql/client'

export const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <SearchResultField />
    </ApolloProvider> // 追加
  )
}
