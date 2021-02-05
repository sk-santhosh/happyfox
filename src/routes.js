import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tickets from "./views/Tickets";
import store from "./redux/store";

export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Tickets} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
