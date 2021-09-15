import React from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Squash as Hamburger } from 'hamburger-react';

const Header = ({ open, setOpen }) => {
  let history = useHistory();

  const homepageClick = () => {
    history.push('/');
    setOpen(false);
  };
  return (
    <HeadWrap>
      <Title onClick={homepageClick}>Andrew Paul</Title>
      <NavWrap>
        <Nav to='/about'>About</Nav>
        <Nav to='/cv'>C.V.</Nav>
        <Nav to='/projects'>Projects</Nav>
        <Nav to='/contact'>Contact</Nav>
      </NavWrap>
      <SocialWrap>
        <StyledAiFillInstagram
          onClick={() =>
            window.open('https://www.instagram.com/helloandrewpaul', '_blank')
          }
          size={25}
        />
        <StyledAiFillLinkedin
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/helloandrewpaul/',
              '_blank'
            )
          }
          size={25}
        />
        <StyledAiFillGithub
          onClick={() =>
            window.open('https://github.com/helloandrewpaul', '_blank')
          }
          size={25}
        />
      </SocialWrap>
      <BurgWrap>
        <Hamburger
          color='#faf7ff'
          toggled={open}
          toggle={setOpen}
          duration={0.8}
        />
      </BurgWrap>
    </HeadWrap>
  );
};

const BurgWrap = styled.div`
  padding: 0 15px 13px 0;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavWrap = styled.div`
  padding: 18px;
  margin-right: 45px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledAiFillInstagram = styled(AiFillInstagram)`
  color: #faf7ff;
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const StyledAiFillLinkedin = styled(AiFillLinkedin)`
  color: #faf7ff;
  &:hover {
    color: #666;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const StyledAiFillGithub = styled(AiFillGithub)`
  color: #faf7ff;
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled(NavLink)`
  font-size: 20px;
  padding-bottom: 5px;
  margin: 0 15px;
  &.active {
    color: #666;
  }
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
const Title = styled.div`
  font-size: 30px;
  padding: 15px;
  &:hover {
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
      color: #fff;
    }
  }
`;

const HeadWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100vw;
  position: relative;
  z-index: 10;
`;
export default Header;
