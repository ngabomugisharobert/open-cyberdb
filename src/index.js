import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import Home from "./views/Home";

import { Provider } from 'react-redux'
import { store } from './store'
import SignIn from "views/Auth/SignIn";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path={'/auth'} component={AuthLayout} />
        <Route path={'/admin'} component={AdminLayout} />
        {/* <Route path={'/home'} component={Home} /> */}
        <Redirect from={'/'} to="/auth/home" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
