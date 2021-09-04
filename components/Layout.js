import React from 'react'
import Meta from "./Meta"
import Nav from "./Nav"
import styles from "../styles/Layout.module.css"

const Layout = ({children}) => {
  return (
    <>
      <Nav/>
      <main className={styles.main}>
        <Meta/>
        {children}
      </main>
    </>
  )
}

export default Layout
