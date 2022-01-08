import React from 'react';
import styled from 'styled-components';

const About = () => {

  return (
    <BigWrap>
      <TextWrap>
        <Text>
          👋 I'm an ex-Printer turned Full-Stack Web Developer. <br />
          <br />I am currently working with HTML, CSS, JavaScript, React.js,
          Node.js, Express and MongoDB.
          <br />
          <br />
          Currently learning Gatsby {'&'} Sass.
          <br />
          <br />
          Outside of Web Development I'm a Photographer and a Bookbinder.
        </Text>
      </TextWrap>
    </BigWrap>
  );
};

const TextWrap = styled.section`
  width: 630px;
  margin: 30px auto;
  padding: 0 15px;
  @media (max-width: 660px) {
    width: 90%;
  }
`;

const Text = styled.p`
  font-size: 20px;
`;

const BigWrap = styled.div`
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
export default About;
