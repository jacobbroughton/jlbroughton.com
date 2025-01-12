import React from 'react'
import { motion } from "framer-motion"
import styles from "../styles/Layout.module.scss"

import { Analytics } from "@vercel/analytics/react"

const Layout = ({children}) => {

  const variants = {
    hidden: { opacity: 0, x: -50, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -25 },
}


  return (
    <motion.main
      initial="hidden" // setting initial state to variants.hidden
      animate="enter" // animated state to variants.enter
      exit="exit" // exit state to variants.exit
      variants={variants} // pass the variant options to framer motion
      transition={{ type: 'linear' }}
      className={styles.main}
    >
      <Analytics/>
      {children}
    </motion.main>
  )
}

export default Layout
