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
          I'm a Photographer and Bookbinder.
        </Text>
      </TextWrap>
    </BigWrap>
  );
};
const TextWrap = styled.div`
  width: 90%;
  margin-top: 70px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const BigWrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin-left: -20vw;
  padding-left: 20vw;
  background-color: rgba(0, 0, 0, 0.7);
`;
export default About;
