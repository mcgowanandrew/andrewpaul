import React, { useState }from "react";
import styled from "styled-components";
import BeatLoader from "react-spinners/BeatLoader";


const Loading = () => {
    const [color,setColor]=useState('ffffff')
  return (
    <>
      <LoaderWrapper>
              <BeatLoader size={35} color={color}/>
      </LoaderWrapper>
    </>
  );
};

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;