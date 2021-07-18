import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Menu = ({ open, setOpen }) => {

    const closeClick = ()=>{
        setOpen(false)
    }
  return (
    <Div open={open}>
      <Content>
        <Nav to="/about" onClick={closeClick}>About</Nav>
        <Nav to="/cv" onClick={closeClick}>C.V.</Nav>
        <Nav to="/projects" onClick={closeClick}>Projects</Nav>
        <Nav to="/contact" onClick={closeClick}>Contact</Nav>
      </Content>
    </Div>
  );
};
const Nav = styled(NavLink)`
  font-size: 20px;
  padding: 10px;
`;
const Content = styled.div`
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div = styled.div`
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 3;
  margin-top: -70px;
  transition: all 0.5s ease-in-out;
  opacity: ${({ open }) => (open ? "1" : "0")};
  right:${({ open }) => (open ? "0" : "-100%")};
  top:${({ open }) => (open ? "0" : "-100%")};
  @media (min-width: 781px) {
    display: none;
  }
`;

export default Menu;
