import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useViewport } from '../Hooks';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Menu = ({ open, setOpen }) => {
  const { width } = useViewport();
  let breakpoint = 768;

  if (width >= breakpoint) {
    setOpen(false);
  }

  const closeClick = () => {
    setOpen(false);
  };
  return (
    <Div open={open}>
      <Content>
        <Nav to='/about' onClick={closeClick}>
          About
        </Nav>
        <Nav to='/cv' onClick={closeClick}>
          C.V.
        </Nav>
        <Nav to='/projects' onClick={closeClick}>
          Projects
        </Nav>
        <Nav to='/contact' onClick={closeClick}>
          Contact
        </Nav>
        <SocialWrap>
          <StyledAiFillInstagram
            onClick={() =>
              window.open('https://www.instagram.com/helloandrewpaul', '_blank')
            }
            size={20}
          />
          <StyledAiFillLinkedin
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/helloandrewpaul/',
                '_blank'
              )
            }
            size={20}
          />
          <StyledAiFillGithub
            onClick={() =>
              window.open('https://github.com/helloandrewpaul', '_blank')
            }
            size={20}
          />
        </SocialWrap>
      </Content>
    </Div>
  );
};
const StyledAiFillInstagram = styled(AiFillInstagram)`
  margin-right: 10px;
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const StyledAiFillLinkedin = styled(AiFillLinkedin)`
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const StyledAiFillGithub = styled(AiFillGithub)`
  margin-left: 10px;
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const SocialWrap = styled.div`
  margin-top: 10px;
`;

const Nav = styled(NavLink)`
  font-size: 20px;
  padding-bottom: 5px;
  margin: 10px;
  ::after{
    content:"";
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:2px;
    background: #666;
    transform: scaleX(0);
    transform-origin:right;
    transition: transform 0.3s ease-in;

  }
  :hover::after{
      transform: scaleX(1);
      transform-origin:left;
  }

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
  transition: all 0.8s ease-in-out;
  opacity: ${({ open }) => (open ? '1' : '0')};
  right: ${({ open }) => (open ? '0' : '-100%')};
  top: ${({ open }) => (open ? '0' : '-100%')};
`;

export default Menu;
