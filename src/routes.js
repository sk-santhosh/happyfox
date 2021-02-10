import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import Tickets from "./views/Tickets";
import Kanboard from "./views/Kanboard";
import Layout from "./components/Layout";

export default class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Tickets} />
              <Route exact path="/kanboard" component={Kanboard} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}
