import React, { useEffect, useState } from 'react'
import SVGIcon from "./SVGIcon";
import navStyles from "../styles/Nav.module.scss";
import styled from "@emotion/styled"
// import { saveState } from "../utils/localStorage";


const ThemeToggle = () => {


  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme)
  }, [activeTheme]);

  const Button = styled.button`
    background-color: transparent;
    width: 25px;
    border: 0;
    color: currentColor;
    position: absolute;
    right: 0;
    cursor: pointer;
    appearance: none;
    font-size: 1rem;
  `

  return (
    <Button onClick={() => setActiveTheme(inactiveTheme)}>
      {activeTheme === "light" ? <span>🌙</span>: <span>☀️</span>}
    </Button>
  )
}

export default ThemeToggle
