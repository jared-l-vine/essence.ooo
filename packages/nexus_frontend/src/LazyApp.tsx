import React, { FunctionComponent } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import CreateListingPage from "./pages/listing/create";
import OauthRedirectPage from "./pages/oauth/redirect";
import LoginOrganism from "./organisms/login";
import { AuthContextProvider } from "./services/auth";

["REACT_APP_APPSYNC_GRAPHQL_ENDPOINT", "REACT_APP_APPSYNC_API_KEY"].map(
  variableName => {
    if (!process.env[variableName])
      throw new Error(`Could not find environment variable '${variableName}`);
  }
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
    headers: {
      "x-api-key": process.env.REACT_APP_APPSYNC_API_KEY
    }
  })
});

const LazyApp: FunctionComponent = () => {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <LoginOrganism />
        <CreateListingPage />
        <OauthRedirectPage />
      </ApolloProvider>
    </AuthContextProvider>
  );
};

export default LazyApp;
