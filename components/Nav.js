import React, { useEffect } from 'react'
import { useTheme, useThemeUpdate } from "../context/themeProvider"
import Link from "next/link"
import navStyles from "../styles/Nav.module.scss"
import { useRouter } from "next/router"
import { AnimateSharedLayout, motion } from "framer-motion"
import { saveState, loadState } from "../utils/localStorage"
import SVGIcon from "./SVGIcon"


const Nav = () => {

  const router = useRouter()

  const linksList = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/portfolio",
      name: "Portfolio"
    }
  ]

  const darkMode = useTheme()
  const toggleTheme = useThemeUpdate()

  const handleDarkToggle = () => {
    saveState(!darkMode, "darkMode")
    toggleTheme()
  }

  return (
    <AnimateSharedLayout>
    <nav className={`${navStyles.nav} ${darkMode ? 'dark' : ''}`}>
      <div className={navStyles.container}>
        <Link href="/" scroll={false} passHref>
          <a>
            <p>
              <span className={navStyles.fullName}>Jacob Broughton {darkMode ? 'dark' : 'light'}</span>
              <span className={navStyles.initials}>JB</span>
            </p>
          </a>

        </Link>
        <ul>
          {/* <button onClick={() => setTheme(!theme)}>Dark</button> */}
          {linksList.map(linkItem => 
            <li key={linkItem.name} className={router.pathname === linkItem.path && navStyles.active}>
              <Link href={linkItem.path} scroll={false} passHref>
                <a>
                {linkItem.name}
                {router.pathname === linkItem.path && 
                <motion.div 
                  animate
                  className={navStyles.underline}
                  layoutId={navStyles.underline}
                  transition="linear"
                  />
                }
                </a>  
              </Link>
            </li>  
          )}
          <button onClick={() => handleDarkToggle("dark")}>
            <SVGIcon type="darkmode" className={navStyles.themeIcon}/>
          </button>
          <button onClick={() => handleDarkToggle("light")}>
            <SVGIcon type="lightmode" className={navStyles.themeIcon}/>
          </button>
        </ul>
      </div>
    </nav>
    </AnimateSharedLayout>
  )
}

export default Nav
