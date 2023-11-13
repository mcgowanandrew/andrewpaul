import React from 'react';
import styled from 'styled-components';

const About = () => {

  return (
    <BigWrap>
      <TextWrap>
        <Text>
          👋 I'm an ex-Printer turned Full-Stack Web Developer. <br />
          <br />
          Front-end: HTML, CSS/Sass, JavaScript ES6, React.js, jQuery, Twig  
          Back-end: Node.js, Express, MongoDB, PHP, MySQL, MariaDB
          CMS: Drupal, Wordpress 
          Software: Visual Studio Code, Insomnia, Adobe Creative Suite, QuarkXPress
          <br />
          <br />
          Currently learning D3.js {'&'} Three.js
          <br />
          <br />
          Outside of Web Development I'm a Photographer and a Bookbinder.
        </Text>
      </TextWrap>
    </BigWrap>
  );
};

const TextWrap = styled.section`
  width: 39.375rem;
  margin: 1.875rem auto;
  padding: 0 0.938rem;
  @media (max-width: 41.25rem) {
    width: 90%;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
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
