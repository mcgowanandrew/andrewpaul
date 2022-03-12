import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Homepage, Header, Menu, Project } from './Components';
import { About, Contact, ProjectPage, ErrorPage, Cv } from './Pages';
import GlobalStyles from './GlobalStyles';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cv'>
          <Cv />
        </Route>
        <Route exact path='/projects'>
          <ProjectPage />
        </Route>
        <Route exact path='/project/:title'>
          <Project />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;