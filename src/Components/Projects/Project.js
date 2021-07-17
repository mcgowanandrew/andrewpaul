import React ,{useState}from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal"

const Project = ({ image, index }) => {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <BigWrap>
      <Wrap>
        <>
          <Img
            key={index}
            onClick={() => setImageOpen(index)}
            src={image.img}
            alt={image}
          />{" "}
          <Modal open={imageOpen === index}>
            <ImgWrap>
              <Img2 key={index} src={image.img} alt={image} />
              <ButWrap>
                <Button onClick={() => setImageOpen(false)}>Close</Button>{" "}
              </ButWrap>
            </ImgWrap>
          </Modal>
        </>
      </Wrap>
    </BigWrap>
  );
};
const Img2 = styled.img`
  margin-bottom: 15px;
  background: #000;
`;
const ButWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ImgWrap = styled.div`
  width: 615px;
  display: flex;
  flex-direction: column;
`;

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
`;

const Img = styled.img`
  margin: 0 15px 15px 0;
  background: #000;
  &:hover {
    cursor: pointer;
    filter: brightness(35%);
  }

  &:nth-child(odd) {
    width: 195px;
    height: 195px;
    overflow: hidden;
    object-fit: cover;
  }
  &:nth-child(even) {
    width: 195px;
    height: 195px;
    overflow: hidden;
    object-fit: cover;
  }
  &:nth-child(1) {
    width: 615px;
    height: auto;
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

export default Project;
