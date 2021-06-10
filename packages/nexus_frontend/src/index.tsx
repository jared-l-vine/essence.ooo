import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";

["REACT_APP_API_GATEWAY"].forEach(variableName => {
  if (!process.env[variableName])
    throw new Error(`Could not find environment variable '${variableName}`);
});

const LazyApp = React.lazy(() => import("./LazyApp"));

ReactDOM.render(
  <Suspense fallback="loading">
    <LazyApp />
  </Suspense>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
