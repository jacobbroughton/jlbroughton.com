import React from 'react'
import Link from "next/link"
import navStyles from "../styles/Nav.module.scss"
import { useRouter } from "next/router"

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
          {linksList.map(linkItem => 
            <li key={linkItem.name} className={router.pathname === linkItem.path && navStyles.active}>
              <Link href={linkItem.path} scroll={false}>{linkItem.name}</Link>
            </li>  
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
