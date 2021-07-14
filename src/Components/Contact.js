import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = ({ className, setIsContactOpen }) => {

  const [thankYou, setThankYou]=useState(false)

  const handleClear = () => {
    document
      .querySelectorAll("input,textarea")
      .forEach((input) => (input.value = ""));
    // history.go(0);
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
          e.target.reset()
        },
        (error) => {
          console.log("error", error.text);
        }
      );
  };
  return (
    <FormWrap className="contact-form" autocomplete="off" onSubmit={sendEmail}>
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
      {/* <button onClick={() => setIsContactOpen(false)} /> */}
      <ButtonWrap className="e">
        <FormButton onClick={() => setIsContactOpen(false)}>Close</FormButton>
        <FormButton onClick={() => handleClear()}>Reset</FormButton>
        <FormButton type="submit" name="send">Send</FormButton>
      </ButtonWrap>
    </FormWrap>
  );
};

const FormButton = styled.button`
  border: 2px solid #fff;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  margin-left: 10px;
  font-weight: bold;
  &:before{

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
  justify-content: flex-end;
  width: 514px;
`;
const TextArea = styled.textarea`
  height: 300px;
  max-width: 100%;
  min-width: 100%;
  border: 2px solid #fff;
  background-color: #000;
  color:#fff;
  padding: 5px;
  :focus {
    outline: none;
  }
`;
const Input = styled.input`
  width: 100%;
  border: 2px solid #fff;
  background-color: #000;
  color:#fff;
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
  width: 500px;
  margin: 73px auto;
`;

export default Contact;
