import React from "react";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from "react-redux";
import App from "../containers/app";
import Game from "../containers/game";
import Gallery from "../containers/gallery";
import League from "../containers/league";

// Root component uses Provider to provide the app with store.
// Configures url routes with appropriate components.

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="game" component={Game} />
        <Route path="shop" component={Gallery} />
        <Route path="league-table" component={League} />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object
};

export default Root;
