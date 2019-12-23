import React, { FunctionComponent, Suspense, lazy } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import { AuthContextProvider } from "./services/auth";
import { Router, View } from "react-navi";
import { mount, route } from "navi";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";
import { setContext } from "apollo-link-context";
import { User } from "../graphql/types.generated";
import Cookies from "js-cookie";

Sentry.init({
  dsn: "https://9656fc1c24a84d66a89f079981d684b7@sentry.io/1860567",
  release: process.env.AWS_COMMIT_ID,
  environment: process.env.NODE_ENV,
  integrations: [
    new Integrations.CaptureConsole({
      levels: ["error"]
    })
  ]
});

Sentry.configureScope(function(scope) {
  scope.setTag("origin", window.location.origin);
  scope.setTag("app", "web");
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token:
    | (User & { token_type: string; access_token: string })
    | null = Cookies.getJSON("discord_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "X-Hasura-User-Id": token?.id,
      "X-Hasura-Discord-Token": `${token?.token_type} ${token?.access_token}`
    }
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
      headers: {
        "X-Hasura-Role": "anonymous"
      }
    }) as any
  ) as any
});

const LazyOauthRedirectPage = lazy(() => import("./pages/oauth/redirect"));
const LazyListingCreatePage = lazy(() => import("./pages/listing/create"));

const routes = mount({
  "/": route({
    title: "Create Listing",
    getView: () => <LazyListingCreatePage />
  }),
  "/oauth/redirect": route({
    title: "Discord OAuth Redirect",
    getView: () => <LazyOauthRedirectPage />
  })
});

const LazyApp: FunctionComponent = () => {
  return (
    <AuthContextProvider>
      <ApolloProvider client={client}>
        <Router routes={routes}>
          <Suspense fallback="loading">
            <View />
          </Suspense>
        </Router>
      </ApolloProvider>
    </AuthContextProvider>
  );
};

export default LazyApp;
