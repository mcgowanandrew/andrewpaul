import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Homepage,
  About,
  Arbus,
  Cv,
  ClownTown,
  Contact,
  ProjectPage,
  Header,
} from "../Components"
// import Homepage from "../Components/Homepage"
// import About from "../Components/About"
// import Arbus from "../Components/Projects/Arbus"
// import Cv from "../Components/Cv"
// import ClownTown from "../Components/Projects/ClownTown"
// import Contact from "../Components/Contact"
// import ProjectPage from "../Components/ProjectPage"
// import Header from "../Components/Header"
// import GlobalStyles from "../GlobalStyles";

const Nav = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cv">
          <Cv />
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
        <Route exact path="/projects">
          <ProjectPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Nav;
