import React from "react";
import styled from "styled-components";
import { Nav } from "./Navigation";

const App = () => {
  return (
    <NavWrap>
      <Nav/>
    </NavWrap>
 
  );
};

const NavWrap = styled.div`
display:flex;`
export default App;
