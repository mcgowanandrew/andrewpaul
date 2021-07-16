import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <BigWrap>
      <TextWrap>
        <Text>
          👋 I'm an ex-Printer turned Full-Stack Web Developer. I am currently
          working with HTML, CSS, JavaScript, React.js, Node.js, Express and
          MongoDB. Currently learning Sass and Figma. Outside of Web Development
          I'm a Photographer and a Bookbinder.
        </Text>
      </TextWrap>
    </BigWrap>
  );
};
const TextWrap = styled.div`
  width: 630px;
  margin:30px auto;
`;

const Text = styled.span`
  font-size: 15px;
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
