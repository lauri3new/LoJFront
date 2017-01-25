import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import Home from "./home";
import App from "../containers/app";

// Root component uses Provider to provide the app with store.
// Configures url routes with appropriate components.

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="play" component={App} />
      <Route path="*" component={Home} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object
};

export default Root;
