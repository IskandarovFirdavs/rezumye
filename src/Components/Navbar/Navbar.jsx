import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const NavbarDiv = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 70%;
  align-items: center;
  flex-direction: row;
  height: 100%;
`;

const Left = styled("div")`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: row;
  align-items: center;
`;
const Right = styled("div")`
  width: 60%;
  flex-direction: row;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const H2 = styled(Link)`
  font-family: "Noto Sans Old South Arabian", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 25px;
  color: black;
  text-decoration: none;
`;
const P = styled(NavLink)`
  font-family: "Noto Sans Old South Arabian", sans-serif;
  font-weight: 500;
  font-style: normal;
  text-decoration: none;
  color: black;
  transition: all 0.6s;
  &:hover {
    margin-bottom: 8px;
  }
`;
const P2 = styled(Link)`
  font-family: "Noto Sans Old South Arabian", sans-serif;
  font-weight: 500;
  font-style: normal;
  color: black;
  transition: all 1s;
  text-decoration: none;
  &:hover {
    margin-bottom: 8px;
  }
`;

const Button = styled("button")`
  width: 80px;
  height: 30px;
  background-color: orange;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <NavbarDiv>
      <Left>
        <H2 to={"/my-portifolio/"}>I.Firdavs</H2>
      </Left>
      <Right>
        <P to={"/my-portifolio/"}>Home</P>
        <P to={"/services"}>Services</P>
        <P to={"/experience"}>Experience</P>
        <P to={"/portifolio"}>Portifolio</P>
        <P to={"/testimonial"}>Testimonial</P>
        <Button>
          <P2 to={"/contact"}>Contact</P2>
        </Button>
      </Right>
    </NavbarDiv>
  );
};

export default Navbar;
