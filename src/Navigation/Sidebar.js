import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Modal from "../Components/Modal/Modal";
import { Contact } from "../Components";
// import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Sidebar = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleOpen = () => {
    !isProjectOpen ? setIsProjectOpen(true) : setIsProjectOpen(false);
  };
  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const closeProjects = () => {
    setIsProjectOpen(false);
  };
  return (
    <SideWrap><Wrap>
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
        <ProjectLink exact to="/arbus">
          <Span>Arbus</Span>
        </ProjectLink>
        <ProjectLink exact to="/clown-town">
          <Span>Clown Town</Span>
        </ProjectLink>
      </ProjectWrap>
      <ContactClick onClick={handleContactClick}>Contact</ContactClick>
      <Modal open={isContactOpen}>
        <Contact
          // isContactOpen={isContactOpen}
          setIsContactOpen={setIsContactOpen}
        />
      </Modal>
      </Wrap>
    </SideWrap>
  );
};

const Wrap = styled.div`
display:flex;
flex-direction:column;
position:fixed;`
const ContactClick = styled.span`
  font-size: 16px;
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
  margin: 127px 0 0 75px;
  display: flex;
  flex-direction: column;
  width:100px;
`;
const ProjectsClick = styled.span`
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;
  &:focus {
    background-color: none;
  }
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
  }
`;
const Span = styled.span`
`;
const Link = styled(NavLink)`
  font-size: 16px;
  margin-bottom: 15px;
  &:focus {
    color: #ff3d3d;
  }
`;
const ProjectLink = styled(NavLink)`
  font-size: 14px;
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
