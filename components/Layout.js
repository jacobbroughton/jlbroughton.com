import React from 'react'
import Meta from "./Meta"
import Nav from "./Nav"
import Footer from "./Footer"
import styles from "../styles/Layout.module.scss"

const Layout = ({children}) => {
  return (
    <>
      <Nav/>
      <main className={styles.main}>
        <Meta/>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
