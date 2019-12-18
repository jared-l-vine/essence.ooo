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

["REACT_APP_APPSYNC_GRAPHQL_ENDPOINT", "REACT_APP_APPSYNC_API_KEY"].forEach(
  variableName => {
    if (!process.env[variableName])
      throw new Error(`Could not find environment variable '${variableName}`);
  }
);

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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
    headers: {
      "x-api-key": process.env.REACT_APP_APPSYNC_API_KEY
    }
  })
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
