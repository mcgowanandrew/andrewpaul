import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
console.log(mousePosition);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX -16,
        y: e.clientY -16,
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  },[]);

  return <Pointer style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}></Pointer>;
};

export default Cursor;

const Pointer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  /* z-index: -1; */
  border-radius: 50%;
  background-color: yellow;
`;
