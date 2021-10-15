import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Images from './Images';

const Project = () => {
  let { title } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`https://andrew-paul.herokuapp.com/project/${title}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        const array = Object.values(data)[1];
        setProject(array);
      })
      .catch((error) => {
        console.log('Error:', error);
        //create an error page
      });
  }, [title]);

  let p = project;



  return (
    <BigWrap>
      <Wrap>
        <Img src={p.headerImg} alt={p.title} />
        <DetailWrap>
          <TopWrap>
            <Title>{p.title}</Title>
            <DemoWrap>
              {p.demo && (
                <Demo href={p.demo} target='_blank'rel='noopener noreferrer'>
                  Demo
                </Demo>
              )}
              {p.github && (
                <Demo href={p.github} target='_blank' rel='noopener noreferrer'>
                  GitHub
                </Demo>
              )}
            </DemoWrap>
          </TopWrap>
          <Description>
            {p.description}
            <br />
            <br />
            {p.tech}
          </Description>
        </DetailWrap>
        <ImagesWrap>
          {p.images &&
            p.images.map((img, index) => (
              <Images
                img={img}
                key={index}
                index={index}
                title={p.title}
                length={p.images.length}
              />
            ))}
        </ImagesWrap>
      </Wrap>
    </BigWrap>
  );
};

const Description = styled.span`
  font-size: 15px;
  width: 100%;
  height: auto;
`;

const DemoWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: flex-end;
  width: 100%;
`;

const Title = styled.span`
  font-size: 22px;
  width: 100%;
`;

const Demo = styled.a`
  font-size: 18px;
  margin-left: 10px;
`;

const DetailWrap = styled.div`
  width: 100%;
  margin: 30px 0;
<<<<<<< HEAD
  /* padding: 15px; */
=======
>>>>>>> 551a52a59e1ad14b2bc1a7a99d2819b5e1d7d6af
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  margin: 0 auto;
  padding: 30px;
  max-width: 630px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const BigWrap = styled.div`
  width: 100%;
  height: 100%;
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

const ImagesWrap = styled.div`
  max-width: 630px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 22px;
  position: relative;
  z-index: 1;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export default Project;
