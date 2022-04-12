import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { NextPage } from "next";

export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(props.apolloState)}>
        <Component {...props}/>
      </ApolloProvider>
    )
  }
}

function getApolloClient(ssrCache?: NormalizedCacheObject) {
  const httpLink = new HttpLink({
    uri: 'http://localhost:3332/graphql',
    fetch
  });
  
  const cache = new InMemoryCache().restore(ssrCache ?? {});
  
  return new ApolloClient({
    link: from([httpLink]),
    cache,
  });
}