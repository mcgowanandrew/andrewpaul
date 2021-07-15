import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Homepage, About, Arbus, CV, ClownTown } from "../Components";
import GlobalStyles from "../GlobalStyles";
import Sidebar from "./Sidebar";

const Nav = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cv">
          <CV />
        </Route>
        <Route exact path="/arbus">
          <Arbus />
        </Route>
        <Route exact path="/clown-town">
          <ClownTown />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Nav;
