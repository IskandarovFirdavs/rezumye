import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ServicesDiv = styled("div")`
  width: 100%;
  height: auto;
  display: flex;
`;
const Left = styled("div")`
  width: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
`;
const Right = styled("div")`
  display: flex;
  width: 50%;
  height: 100%;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  text-align: start;
`;
const MeImg = styled("img")`
  height: 500px;
  position: relative;
  animation-duration: 1s;
  animation-name: MeImg;

  @keyframes MeImg {
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
const Icons1 = styled("img")`
  height: 200px;
  animation-name: Smaylik;
  position: relative;
  animation-duration: 5s;
  @keyframes Smaylik {
    0% {
      top: 0px;
    }

    50% {
      top: 60px;
    }

    100% {
      top: 0px;
    }
  }
`;

const Icons2 = styled("img")`
  height: 200px;
  animation-name: icon;
  position: relative;
  animation-duration: 5s;
  @keyframes icon {
    0% {
      top: 0px;
    }

    50% {
      top: -60px;
      transform: rotateY(180deg);
    }

    100% {
      top: 0px;
    }
  }
`;
const IconsEx5 = styled("img")`
  height: 200px;
  position: relative;
  animation-duration: 1s;
  animation-name: Me;
  rotate: 320deg;

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
const ImgDiv1 = styled("div")`
  display: flex;
  align-items: start;
  justify-content: end;
  height: 100%;
  width: 30%;
`;
const ImgDiv2 = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 40%;
`;
const ImgDiv3 = styled("div")`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100%;
  width: 30%;
`;
const ImzoImg = styled("img")`
  height: 150px;
`;

const ImzoEx5 = styled("div")`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Experiences = () => {
  return (
    <ServicesDiv>
      <Left>
        <ImgDiv1>
          <Icons1
            src="https://static.vecteezy.com/system/resources/previews/010/851/674/original/3d-illustration-colorful-laptop-and-book-png.png"
            alt=""
          />
        </ImgDiv1>
        <ImgDiv2>
          <MeImg
            src="https://cdn3d.iconscout.com/3d/premium/thumb/php-developer-4613274-3821448.png"
            alt=""
          />
        </ImgDiv2>
        <ImgDiv3>
          <Icons2
            src="https://cdn3d.iconscout.com/3d/premium/thumb/scrum-presentation-6230314-5107138.png?f=webp"
            alt=""
          />
        </ImgDiv3>
      </Left>
      <Right>
        <NavLink to={"/my-portifolio/"} style={{ textDecoration: "none" }}>
          About Me
        </NavLink>
        <h1>Learn to develop sites with components and design systems</h1>
        <h3>Create Solutions that are bold and forward looking .</h3>
        <ul>
          <li>Frontend</li>
          <li>Backend</li>
          <li>Design</li>
          <li>App</li>
          <li>Telegram Bots</li>
        </ul>
        <ImzoEx5>
          <ImzoImg
            src="https://avatanplus.com/files/resources/original/5838019ece2c11589ac6547c.png"
            alt=""
          />
          <IconsEx5
            src="https://images.squarespace-cdn.com/content/v1/554e1e00e4b0c12e5ca4e2e8/1536253333900-Y70T5UL2NGX5551J7TLW/5+YEARS+WARRANTY.png"
            alt=""
          />
        </ImzoEx5>
      </Right>
    </ServicesDiv>
  );
};

export default Experiences;
