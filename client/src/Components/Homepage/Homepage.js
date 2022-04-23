import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from './background.json';

// const randomPos = Math.random() * 100;
// const left = Math.random() * 100;
// const Img = styled.img`
//   position: fixed;
//   top: ${randomPos}vh;
//   left: ${left}vw;
//   width: 640px;
//   height: auto;
//   object-fit: cover;
// `;

const Homepage = () => {
  const [homeBg, setHomeBg] = useState([]);

  useEffect(() => {
//     Generate random BG Img for homepage
    const background = bg.filter((obj) => obj.img)[
      Math.floor(Math.random() * bg.length)
    ];
    setHomeBg(background);
  }, []);

  return <Img src={homeBg.img} />;
};

const Img = styled.img`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export default Homepage;
