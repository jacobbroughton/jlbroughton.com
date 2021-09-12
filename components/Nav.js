import React, {useState, useEffect} from 'react'
import Link from "next/link"
import navStyles from "../styles/Nav.module.scss"
import { useRouter } from "next/router"
import { AnimateSharedLayout, motion } from "framer-motion"
import { useTheme, setTheme } from "../utils/theme"

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

  return (
    <AnimateSharedLayout>
    <nav className={navStyles.nav}>
      <div className={navStyles.container}>
        <Link href="/" scroll={false} passHref>
          <a>
            <p>
              <span className={navStyles.fullName}>Jacob Broughton</span>
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
        </ul>
      </div>
    </nav>
    </AnimateSharedLayout>
  )
}

export default Nav
