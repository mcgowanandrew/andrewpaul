import React from "react";
import styled from "styled-components";

const CV = () => {
  return (
    <BigWrap>
      <TextWrap>
        <Text>
          <Heading>Education:</Heading>
          <br />
          Concordia University, 2021 - Diploma in Full-Stack Web Development
          <br />
          Rosemount Technology Centre, 2010 to 2011 - DVS in Digital Layout &
          Printing
          <br />
          <br />
          <Heading>Group Exhibitions:</Heading>
          <br />
          2019 - Now That’s What I Call Love, Hart Club, London, UK
          <br />
          2018 - Chania International Photo Festival, Center of the
          Mediterranean Architecture, Chania, Greece
          <br />
          2018 - Black & White, Blank Wall Gallery, Athens, Greece
          <br />
          2017 - Home, Float Magazine (Online)
          <br />
          2016 - Hit The Road, Art_Inkubator, Lodz, Poland
          <br />
          2013 - Nighted Life, Book & Job Gallery, San Francisco, CA
          <br />
          2013 - Nobody Gives A Break (When You’re Down On Your Luck), Galerie
          Nowhere, Montreal, QC
          <br />
          2011 - Snapshot Aesthetic, Black Box Gallery, Portland, OR
          <br />
          2011 - Sunny Side Up, Harbour Arm, Margate, UK
          <br />
          <br />
          <Heading>Publications:</Heading>
          <br />
          2020 - Malaise, Self-published
          <br />
          2019 - Now That’s What I Call Love, The Photocopy Club
          <br />
          2018 - Issue #6: Psalms, Meanwhile Press
          <br />
          2018 - (Untitled) 2015-2017, Self-published (monograph)
          <br />
          2017 - Spew VIII, spewedition
          <br />
          2017 - VVisions Volume #2 - Street Finds
          <br />
          2015 - You Get What You Give
          <br />
          2014 - Tarot Magazine #1
          <br />
          2014 - Nighted Life 5, Nighted Life
          <br />
          2013 - Nighted Life Book, Nighted Life
          <br />
          2013 - Doom Life Issue 6, Dark Arts Collective
          <br />
          2013 - Doom Life Issue 2, Dark Arts Collective
          <br />
          2013 - Secrets (split w/Alex Lenkeit), Radical Offenders
          <br />
          2012 - Oratoire, Self-published (monograph)
          <br />
          2012 - F / W / S / S, Self-published
          <br />
          2012 - CXXXVIII, Self-published
          <br />
          2011 - Petit, Self-published
          <br />
        </Text>
      </TextWrap>
    </BigWrap>
  );
};
const Heading = styled.div`
  font-size: 15px;
`;
const TextWrap = styled.div`
  width: 90%;
  margin-top: 73px;
`;

const Text = styled.span`
  font-size: 13px;
`;

const BigWrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin-left: -20vw;
  padding-left: 20vw;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default CV;
