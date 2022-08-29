import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DefaultLayout from "..layouts/index.tsx"
const Router = () => (
  <Switch>
    <Redirect from="/" to="/dashboard"/>
    <Route path="/dashboard" component={DefaultLayout} />
    <Route path="/wallets" component={DefaultLayout} />

  </Switch>
);

export default Router;