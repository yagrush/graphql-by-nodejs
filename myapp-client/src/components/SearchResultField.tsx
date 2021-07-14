import { useQuery } from '@apollo/client'
import React from 'react'
import { Query } from '../generated/graphql'
import { helloWorld } from '../graphql/queries'

const SearchResultField = () => {
  const { loading, error, data } = useQuery<Query>(helloWorld)
  if (loading) return <>"Loading..."</>
  if (error) return <>`Error! ${error.message}`</>

  return (
    <div>
      <div>Result: {data?.helloWorld}</div>
    </div>
  )
}
export { SearchResultField }
