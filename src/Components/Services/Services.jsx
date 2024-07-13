import React from "react";
import styled from "styled-components";

const TopDiv = styled("div")`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  animation-name: back;
  animation-duration: 50s;

  @keyframes back {
    100% {
      background-image: radial-gradient(
        farthest-corner at 20% 35%,
        gold,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      );
    }

    50% {
      background-image: radial-gradient(
        farthest-corner at 40% 45%,
        gold,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      );
    }

    0% {
      background-image: radial-gradient(
        farthest-corner at 80% 55%,
        gold,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1)
      );
    }
  }
`;
const TopTextDiv = styled("div")`
  height: 80%;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
`;

const Underline = styled("div")`
  height: 2px;
  width: 25%;
  background-color: #bb2d2d;
`;

const H1 = styled("h1")`
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 50px;
`;
const P = styled("p")`
  color: black;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  width: 90%;
  font-size: 18px;
`;

const Img = styled("img")`
  animation-name: example;
  position: relative;
  animation-duration: 1s;
  height: 80%;

  @keyframes example {
    0% {
      right: 0px;
    }

    50% {
      right: 200px;
      transform: rotateY(180deg);
    }

    100% {
      right: 0px;
    }
  }
`;

const Button = styled("button")`
  width: 100px;
  height: 35px;
  background-color: orange;
  border: 2px solid white;
  border-radius: 20px;
  color: black;
  margin-top: 15px;
  cursor: pointer;
  &:focus {
    color: white;
  }
`;

const Services = () => {
  const handleClick = () => {
    const text =
      "IT staff augmentation services .  Since 2010, Innowise has been rendering IT staff augmentationservices, providing customers worldwide with highly qualified ITprofessionals. IT staff augmentation involves the recruitment oftemporary workers to extend the productivity of the in-housedevelopment team. It’s one of the most cost-effective options to staffprojects, fill talent gaps, and stay flexible.";

    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };
  return (
    <TopDiv>
      <TopTextDiv>
        <H1>IT staff augmentation services</H1>
        <Underline></Underline>
        <P>
          Since 2010, Innowise has been rendering IT staff augmentation
          services, providing customers worldwide with highly qualified IT
          professionals. IT staff augmentation involves the recruitment of
          temporary workers to extend the productivity of the in-house
          development team. It’s one of the most cost-effective options to staff
          projects, fill talent gaps, and stay flexible.
        </P>
        <Button onClick={handleClick}>Listen</Button>
      </TopTextDiv>
      <Img
        src="https://png.pngtree.com/png-vector/20231025/ourmid/pngtree-3d-boy-character-playing-laptop-wearing-jacket-png-image_10360769.png"
        alt=""
      />
    </TopDiv>
  );
};

export default Services;
