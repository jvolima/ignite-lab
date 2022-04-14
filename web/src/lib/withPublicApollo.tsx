import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { GetServerSidePropsContext, NextPage } from "next";

export type ApolloClientContext = GetServerSidePropsContext;

export const withPublicApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props}/>
      </ApolloProvider>
    )
  }
}

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject
) {
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