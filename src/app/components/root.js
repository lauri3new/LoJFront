import React from "react";

import App from "../containers/app.js";
import top from "./top.js";

import { Router, Route, browserHistory, IndexRedirect } from "react-router";
import { Provider } from "react-redux";

// Root component uses Provider to provide the app with store.
// Configures url routes with appropriate components.

 const Root = ({ store }) => (
   <Provider store={store}>
       <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/aloha" component={top}>
          </Route>
        </Route>
      </Router>
  </Provider>
);

export default Root;
