import React, {useState} from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = ({ className }) => {

  const [success,setSuccess]=useState(false)

  const handleClear = () => {
    setSuccess(false)
    document
      .querySelectorAll("input,textarea")
      .forEach((input) => (input.value = ""));
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gacrepd",
        "template_d9pk6ld",
        e.target,
        "user_wBCrsl9hoAWr7r1NuEntM"
      )
      .then(
        (result) => {
          console.log("sucress", result.text);
          e.target.reset();
          setSuccess(true)
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  };
  return (
    <BigWrap  className={className}>
      <Wrap>
      <FormWrap
        className="contact-form"
        autocomplete="off"
        onSubmit={sendEmail}
      >
        <Input
          className="a"
          id="Name"
          placeholder="Name"
          type="text"
          name="user_name"
          required={true}
        />
        <Input
          className="b"
          id="email"
          placeholder="Email"
          type="text"
          name="user_email"
          required={true}
        />
        <Input
          className="c"
          id="Subject"
          placeholder="Subject"
          type="text"
          name="subject"
          required={true}
        />

        <TextArea
          className="d"
          id="message"
          placeholder="Message"
          wrap="hard"
          type="text"
          name="message"
          required={true}
        />
        <ButtonWrap className="e">
          <Success open={success}>Thank you for contacting me, I will get back to you quickly.</Success>
          <SmallWrap>
          <FormButton onClick={() => handleClear()}>Reset</FormButton>
          <FormButton type="submit" name="send">
            Send
          </FormButton>
          </SmallWrap>
        </ButtonWrap>
      </FormWrap>
      </Wrap>
    </BigWrap>
  );
};
const SmallWrap=styled.div`
`
const Success = styled.span`
font-size:14px;
opacity: ${({ open }) => (open ? "1" : "0")};
transition: all 0.6s ease-in-out;

`
const Wrap = styled.div`
width:600px;
margin: 0 auto;
@media (max-width:619px){
  width: 300px;
}`
const BigWrap = styled.div`
width:100vw;
height:100vh;
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

const FormButton = styled.button`
  border: 2px solid #fff;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  margin-left: 15px;
  font-weight: bold;
  &:before {
  }
  &:hover {
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 614px;
  @media (max-width: 619px) {
    width: 314px;
  }
`;
const TextArea = styled.textarea`
  height: 300px;
  max-width: 100%;
  min-width: 100%;
  border: 2px solid #fff;
  background-color: #000;
  color: #fff;
  padding: 5px;
  :focus {
    outline: none;
  }
`;
const Input = styled.input`
  width: 100%;
  border: 2px solid #fff;
  background-color: #000;
  color: #fff;
  padding: 5px;
  :focus {
    outline: none;
  }
`;

const FormWrap = styled.form`
  .a {
    grid-area: name;
  }
  .b {
    grid-area: email;
  }
  .c {
    grid-area: subject;
  }
  .d {
    grid-area: message;
  }
  .e {
    grid-area: button;
  }
  display: grid;
  grid-template-columns: 1fr 0px 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "name . email"
    "subject subject subject"
    "message message message"
    "button button button";
  gap: 15px;
  width: 600px;
  margin: 15px auto;
  @media (max-width: 619px) {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
`;

export default Contact;
