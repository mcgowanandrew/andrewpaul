import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Modal from "../Components/Modal/Modal"
// import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Sidebar = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isContactOpen,setIsContactOpen]= useState(false)

  const toggleOpen = () => {
    !isProjectOpen ? setIsProjectOpen(true) : setIsProjectOpen(false);
  };
  const handleContactClick=()=>{
    setIsContactOpen(true)

  }

  const closeProjects = () => {
    setIsProjectOpen(false);
  };
  return (
    <SideWrap>
      <Title onClick={closeProjects} exact to="/">
        Andrew Paul
      </Title>
      <Link exact to="/about">
        <Span onClick={closeProjects}>About</Span>
      </Link>
      <Link exact to="/cv">
        <Span onClick={closeProjects}>C.V.</Span>
      </Link>
      <ProjectsClick onClick={toggleOpen}>Projects</ProjectsClick>

      <ProjectWrap isOpen={isProjectOpen}>
        <Link exact to="/arbus">
          <Span>Arbus</Span>
        </Link>
        <Link exact to="/clown-town">
          <Span>Clown Town</Span>
        </Link>
      </ProjectWrap>
      
        <ContactClick onClick={handleContactClick}>Contact</ContactClick>
    <Modal open={isContactOpen}></Modal>
    </SideWrap>
  );
};
const ContactClick = styled.span`
font-size: 15px;
cursor: pointer;
&:focus {
  background-color: none;
}
&:hover {
  color: #666;
  transition: all 0.3s ease-in-out;
}
`;
const ProjectWrap = styled.div`
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: 0.5s ease-in-out;
  position: absolute;
  z-index: 15;
  margin: 99px 0 0 75px;
  display: flex;
  flex-direction: column;
`;
const ProjectsClick = styled.span`
  font-size: 15px;
  cursor: pointer;
  &:focus {
    background-color: none;
  }
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
  }
`;
const Span = styled.span``;
const Link = styled(NavLink)`
  font-size: 15px;
  &:focus {
    color: #ff3d3d;
  }
`;
const Title = styled(NavLink)`
  font-size: 25px;
  margin-bottom: 20px;
`;

const SideWrap = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  margin: 20px;
  position: relative;
  z-index: 10;
`;

export default Sidebar;
