import React from "react";
import styled from "styled-components";

const HomeDiv = styled("div")`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const LeftDiv = styled("div")`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const RightDiv = styled("div")`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  animation-duration: 4s;
  background-image: url("https://cdn-icons-png.flaticon.com/512/10949/10949087.png");
  background-repeat: no-repeat;
  background-size: 100%;
`;
const LeftSmaylik = styled("div")`
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: end;
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

const H1 = styled("h1")`
  font-size: 60px;
  font-family: "Satisfy", cursive;
  font-weight: 600;
  font-style: normal;
  color: black;
`;
const Name = styled("h1")`
  font-size: 60px;
  color: black;
  font-family: "Black Ops One", system-ui;
  font-weight: 300;
  font-style: normal;
  height: 60px;
`;

const P = styled("p")`
  color: black;
  width: 80%;
`;
const Texts = styled("div")`
  line-height: 0.6;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Me = styled("img")`
  height: 100%;
  animation-name: Me;
  position: relative;
  animation-duration: 1s;

  @keyframes Me {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(90deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    75% {
      transform: rotateY(90deg);
    }

    100% {
      transform: rotateY(0deg);
    }
  }
`;
const Smaylik = styled("img")`
  height: 120px;
  animation-name: Smaylik;
  position: relative;
  animation-duration: 5s;
  @keyframes Smaylik {
    0% {
      top: 0px;
    }
    25% {
      top: 40px;
    }
    50% {
      top: 40px;
    }

    100% {
      top: 0px;
    }
  }
`;

const Comments = styled("div")`
  height: 80px;
  width: 170px;
  border-radius: 20px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  animation-name: Comments;
  position: relative;
  animation-duration: 5s;
  @keyframes Comments {
    0% {
      bottom: 0px;
    }
    25% {
      bottom: 40px;
    }
    50% {
      bottom: 40px;
    }

    100% {
      bottom: 0px;
    }
  }
`;
const Karona = styled("img")`
  height: 60px;
  width: 60px;
`;
const P2 = styled("p")`
  color: black;
`;

function Home() {
  const handleClick = () => {
    const text =
      "Hello! I Am Iskandarov Firdavs . Fronted Developer with high level of experience in web designing and development . Producting the Quality work .";

    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  };

  return (
    <HomeDiv>
      <LeftDiv>
        <Texts>
          <H1>Hy! I Am</H1>
          <Name>I. Firdavs</Name>
        </Texts>
        <P>
          Fronted Developer with high level of experience in web designing and
          development . Producting the Quality work
        </P>
        <Button onClick={handleClick}>Listen me</Button>
      </LeftDiv>
      <RightDiv>
        <LeftSmaylik>
          <Smaylik
            src="https://static.vecteezy.com/system/resources/thumbnails/009/357/877/small/3d-rendering-smile-emoji-side-view-3d-emoji-icon-png.png"
            alt=""
          />
          <Comments>
            <Karona
              src="https://cdn-icons-png.flaticon.com/512/6359/6359836.png"
              alt=""
            />
            <P2>
              Web <br />
              developer
            </P2>
          </Comments>
        </LeftSmaylik>
        <Me
          src="https://png.pngtree.com/png-vector/20231215/ourmid/pngtree-programmer-computer-3d-character-cartoon-three-dimensional-cute-profession-png-image_11362833.png"
          alt=""
        />
      </RightDiv>
    </HomeDiv>
  );
}

export default Home;
