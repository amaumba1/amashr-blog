
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "./styles/Layout";

import Nav from "./components/layout/Nav";
import Home from "./pages/Home";
import Explore from './pages/Explore'


const AppRouter = () => {
  return (
    <Router>
      <Nav />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;