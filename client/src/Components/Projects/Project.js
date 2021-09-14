import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Images from './Images';

const Project = () => {
  let { title } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`https://andrew-paul.herokuapp.com/project/${title}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        const array = Object.values(data)[1];
        setProject(array);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, [title]);

  let p = project;

  return (
    <BigWrap>
      <Wrap>
        <Img src={p.headerImg} />
        <DetailWrap>
          <TopWrap>
            <Title>{p.title}</Title>
            <DemoWrap>
              {p.demo && (
                <Demo href={p.demo} target='_blank'>
                  Demo
                </Demo>
              )}
              {p.github && (
                <Demo href={p.github} target='_blank'>
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
        {p.images &&
          p.images.map((img, index) => <Images img={img} key={index} index={index} />)}
      </Wrap>
    </BigWrap>
  );
};

const Description = styled.span`
  font-size: 15px;
  width: 100%;
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
  &:hover {
    cursor: pointer;
    color: #666;
    transition: all 0.3s ease-in-out;
  }
`;

const DetailWrap = styled.div`
  width: 600px;
  margin-bottom: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

const Wrap = styled.div`
  margin: 30px auto;
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 619px) {
    width: 300px;
  }
`;

const Img = styled.img`
  margin: 0 15px 15px 0;
  width: 195px;
  height: 195px;
  overflow: hidden;
  object-fit: cover;
  @media (max-width: 619px) {
    width: 135px;
    height: 135px;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(35%);
  }
  &:first-child {
    width: 615px;
    height: auto;
    filter: brightness(100%);
    cursor: default;
    margin-bottom: 15px;
    @media (max-width: 500px) {
      width: 300px;
    }
  }
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

export default Project;
