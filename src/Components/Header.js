import React from "react";
import styled from "styled-components";
import { NavLink} from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Header = () => {
 
  return (
    <HeadWrap>
      <Title >Andrew Paul</Title>
      <NavWrap>
        <Nav link to="/about">
          About
        </Nav>
        <Nav link to="/cv">
          C.V.
        </Nav>
        <Nav link to="/projects">
          Projects
        </Nav>
        <Nav link to="/contact">
          Contact
        </Nav>
      </NavWrap>
      <SocialWrap>
        <StyledAiFillInstagram size={25} />
        <AiFillLinkedin size={25} />
        <AiFillGithub size={25} />
      </SocialWrap>
    </HeadWrap>
  );
};
const NavWrap = styled.div`
  padding: 18px;
  margin-right: 45px;
`;
const StyledAiFillInstagram = styled(AiFillInstagram)`
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const SocialWrap = styled.div`
  padding: 20px;
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled(NavLink)`
  font-size: 20px;
  padding: 15px;
  transition: all 0.3s ease-in-out;
`;
const Title = styled.div`
  font-size: 30px;
  padding: 15px;
  &:hover {
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease-in-out;
  }
`;

const HeadWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100vw;
  position: relative;
  z-index:10;

`;
export default Header;
