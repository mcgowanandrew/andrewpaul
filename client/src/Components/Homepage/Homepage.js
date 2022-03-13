import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import bg from './background.json';

const Homepage = () => {
  const [homeBg, setHomeBg] = useState([]);

  useEffect(() => {
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
  position: center;
  object-fit: cover;
`;

export default Homepage;
