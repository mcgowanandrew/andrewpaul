import React from 'react';
import styled from 'styled-components';
import img from './images/404background.jpg';

const ErrorPage = () => {
    return <Wrap>
        <Span>404</Span>    
  </Wrap>;
};

export default ErrorPage;

const Span = styled.span`
display:grid;
place-items:center;
font-size: 350px;
`

const Wrap = styled.div`
  background-image: url(${img});
  background-size: cover;
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
  top: 0;
  transition: all 1s ease-out;
  animation: fadein 1s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
