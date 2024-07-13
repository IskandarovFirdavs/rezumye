import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import ReactSwitch from "react-switch";
import Services from "./Components/Services/Services";
import Experiences from "./Components/Experiences/Experiences";
import Portifolio from "./Components/Portifolio/Portifolio";
import Testim from "./Components/Testiminional/Testim";
import Contact from "./Components/Contact/Contact";
const Navbars = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  flex-direction: row;
  height: 110px;
`;

const SwitchIcons = styled("img")`
  height: 25px;
  width: 25px;
`;

const Switches = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 15%;
  align-items: center;
  flex-direction: row;
  height: 100%;
`;

export const ThemeContext = createContext(null);
function App() {
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    async function getUsers() {
    }
    getUsers();
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbars>
          <Navbar />
          <Switches>
            <SwitchIcons
              src="https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-q9y4y4t6.png"
              alt=""
            />
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            <SwitchIcons
              src="https://static-00.iconduck.com/assets.00/moon-icon-512x512-fm9crgpt.png"
              alt=""
            />
          </Switches>
        </Navbars>
        <Routes>
          <Route path="/my-portifolio/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experiences />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/testiminional" element={<Testim />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
