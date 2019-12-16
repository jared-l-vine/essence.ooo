import React, { FunctionComponent } from "react";
import CreateListingPage from "./CreateListingPage";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://48p1r2roz4.sse.codesandbox.io"
  })
});

const LazyApp: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <CreateListingPage />
    </ApolloProvider>
  );
};

export default LazyApp;
