import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = ({ className, setIsContactOpen }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gacrepd",
        "template_h1rokyp",
        e.target,
        "user_wBCrsl9hoAWr7r1NuEntM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <FormWrap className={className}>
      <Input
        className="a"
        id="Name"
        placeholder="Name"
        type="text"
        name="Name"
        required="true"
      />
      <Input
        className="b"
        id="email"
        placeholder="Email"
        type="text"
        name="Email"
        required="true"
      />
      <Input
        className="c"
        id="Subject"
        placeholder="Subject"
        type="text"
        name="Subject"
        required="true"
      />

      <TextArea
        className="d"
        id="message"
        placeholder="Message"
        wrap="hard"
        type="text"
        name="message"
        required="true"
      />
      <button onClick={() => setIsContactOpen(false)} />
    </FormWrap>
  );
};
const TextArea = styled.textarea`
  height: 300px;
  max-width: 100%;
  min-width: 100%;
  border: 2px solid #000;
  padding: 5px;
  :focus {
    outline: none;
  }
`;
const Input = styled.input`
  width: 100%;
  border: 2px solid #000;
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
  display: grid;
  grid-template-columns: 1fr 0px 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "name . email"
    "subject subject subject"
    "message message message";
  gap: 15px;
  width: 500px;
  margin: 73px auto;
`;

export default Contact;
