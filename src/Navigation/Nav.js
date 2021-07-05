import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Homepage, About, CV,Contact } from "../Components";
import {Arbus,ClownTown} from "../Components/Projects"
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
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Nav;
