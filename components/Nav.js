import React from 'react'
import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <Link href="/" passHref>
        <a>
          <span>Jacob Broughton</span>
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
