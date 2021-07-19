import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "./todos/Dashboard";
import Header from "./layout/Header";
import history from "../history";
import TodoDelete from "./todos/TodoDelete";
import TodoEdit from "./todos/TodoEdit";
import { Provider } from "react-redux";
import store from "../store";

import LoginForm from "./auth/LoginForm";
import PrivateRoute from "./common/PrivateRoute";

import { loadUser } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/delete/:id" component={TodoDelete} />
            <Route exact path="/edit/:id" component={TodoEdit} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
