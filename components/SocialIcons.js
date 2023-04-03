import React from 'react'
import SVGIcon from "../components/SVGIcon"
import socialIconsStyles from "../styles/SocialIcons.module.scss"

const SocialIcons = () => {
  return (
    <div className={socialIconsStyles.socialIcons}>
      <a className={socialIconsStyles.socialLink} href="https://www.linkedin.com/in/jacob-broughton-637189164/">
        <SVGIcon type="linkedIn" />
      </a>
      <a className={socialIconsStyles.socialLink} href="https://www.github.com/jacobbroughton">
        <SVGIcon type="github" />
      </a>
      <a className={socialIconsStyles.socialLink} href="https://www.youtube.com/channel/UCnHjcw_ZQwEQAUbXPbUecWA">
        <SVGIcon type="youtube" />
      </a>
    </div>
  )
}

export default SocialIcons
