import React from 'react'
import SocialIcons from "./SocialIcons"
import footerStyles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a href="mailto:jacobbroughtondev@gmail.com">jacobbroughtondev@gmail.com</a>
      <SocialIcons/>
    </footer>
  )
}

export default Footer
