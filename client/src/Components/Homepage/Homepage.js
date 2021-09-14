import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import data from './background.json';

const Homepage = () => {
  const [homeBg, setHomeBg] = useState([]);

  // useEffect(() => {
  //   const background = data.filter((obj) => obj.img)[
  //     Math.floor(Math.random() * data.length)
  //   ];
  //   setHomeBg(background);
  // }, []);
  const background = data.filter((obj) => obj.img)[
    Math.floor(Math.random() * data.length)
  ];

  return (
    <>
      <Img src={background.img} />
    </>
  );
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
