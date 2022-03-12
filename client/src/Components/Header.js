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
            window.open(
              'https://www.instagram.com/helloandrewpaul/',
              '_blank',
              'noopener noreferrer'
            )
          }
          size={25}
        />
        <StyledAiFillLinkedin
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/helloandrewpaul/',
              '_blank',
              'noopener noreferrer'
            )
          }
          size={25}
        />
        <StyledAiFillGithub
          onClick={() =>
            window.open(
              'https://github.com/helloandrewpaul',
              '_blank',
              'noopener noreferrer'
            )
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
  padding: 0 0.938rem 0.813rem 0;
  display: none;
  @media (max-width: 48.75rem) {
    display: block;
  }
`;

const NavWrap = styled.nav`
  padding: 1.125rem;
  margin-right: 2.813rem;
  @media (max-width: 48.75rem) {
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
  padding: 1.25rem;
  width: 6.25rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 48.75rem) {
    display: none;
  }
`;

const Nav = styled(NavLink)`
  font-size: 1.25rem;
  padding-bottom: 0.313rem;
  margin: 0 0.938rem;
  &.active {
    color: #666;
  }
  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #666;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in;
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.875rem;
  padding: 0.938rem;
  &:hover {
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease-in-out;
    @media (max-width: 48.75rem) {
      color: #fff;
    }
  }
`;

const HeadWrap = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100vw;
  position: relative;
  z-index: 10;
`;

export default Header;
