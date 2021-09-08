import React from 'react'
import Meta from "./Meta"
import Nav from "./Nav"
import Footer from "./Footer"
import { motion } from "framer-motion"
import router from "next/router"
import styles from "../styles/Layout.module.scss"

const Layout = ({children}) => {

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

  return (
    <>
      {/* <Nav/> */}
        <motion.main
          initial="hidden" // setting initial state to variants.hidden
          animate="enter" // animated state to variants.enter
          exit="exit" // exit state to variants.exit
          variants={variants} // pass the variant options to framer motion
          transition={{ type: 'linear' }}
          className={styles.main}
        >
          {children}
        </motion.main>
      {/* <Footer/> */}
      </>
  )
}

export default Layout
