import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cv' element={<Cv />} />
        <Route exact path='/projects' element={<ProjectPage />} />
        <Route exact path='/project/:title' element={<Project />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
