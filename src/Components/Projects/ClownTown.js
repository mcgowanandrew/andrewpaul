import React, { useState } from "react";
import styled from "styled-components";
import data from "./clownTownData.json";
import Modal from "../Modal/Modal";

const ClownTown = () => {
  const [imageOpen, setImageOpen] = useState(false);

  let ctHeader = data.filter((obj)=>{
    return obj.img
  })[0]

  return (
    <BigWrap>
      <Wrap>
        <Img src={ctHeader.img}/>
        <DetailWrap>
        <TopWrap>
<Title>Clown Town</Title>
<Demo onClick={()=> window.open("https://github.com/helloandrewpaul/group-project-ecomm","_blank")}>GitHub</Demo>

</TopWrap>
<Description>
E-commerce group project completed with two other Concordia students. This project was built using JavaScript, React, Node.js, Express and Styled Components. 
</Description>
      </DetailWrap>
        {data.slice(1,5).map((clown, index) => {
          return (
            <>
              <Img key={index}  onClick={() => setImageOpen(index)} src={clown.img} alt="Clown Town"/>{" "}
              <Modal open={imageOpen === index}>
                <ImgWrap>
                  <Img2 src={clown.img} alt="Clown Town"/>
                  <ButWrap>
                    <Button key={index} onClick={() => setImageOpen(false)}>Close</Button>{" "}
                  </ButWrap>
                </ImgWrap>
              </Modal>
            </>
          );
        })}
      </Wrap>
    </BigWrap>
  );
};
const Img2 = styled.img`
  margin-bottom: 15px;
  background: #000;
  @media (max-width:619x){
    width:300px;
  }
`;
const ButWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ImgWrap = styled.div`
  width: 615px;
  display: flex;
  flex-direction: column;
  @media (max-width:619px){
    width:300px;
  }

`;
const Description = styled.span`
font-size:15px;
width:100%;`


const TopWrap = styled.div`
display:flex;
justify-content:space-between;
margin-bottom: 15px;
align-items: flex-end;
width: 100%;
`
const Title=styled.span`
font-size:22px;
`

const Demo=styled.span`
font-size:18px;
margin-left:10px;
&:hover{
  cursor: pointer;
  color:#666;
  transition: all 0.3s ease-in-out;

}`
const DetailWrap = styled.div`
width:600px;
margin-bottom:15px;
padding:10px;
display:flex;
flex-direction:column;
@media (max-width:619px){
  width:300px;
}`

const Button = styled.button`
  border: 2px solid #fff;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  font-weight: bold;
  &:before {
  }
  &:hover {
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
`;
const Wrap = styled.div`
  margin: 30px auto;
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width:619px){
    width:300px;
  }
`;

const Img = styled.img`
  margin: 0 15px 15px 0;
  background: #000;
  width: 142px;
  height: 142px;
  overflow: hidden;
  object-fit: cover;
  @media (max-width:619px){
  width:135px;
  height:135px;

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
    @media (max-width:500px){
      width:300px;
    }
  }
`;
const BigWrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
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

export default ClownTown;
