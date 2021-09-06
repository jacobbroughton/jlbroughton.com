import React from 'react'
import portfolioStyles from "../styles/Portfolio.module.scss"
import SocialIcons from "../components/SocialIcons"
import ProjectList from "../components/ProjectList"

const portfolio = () => {
  return (
    <div className={portfolioStyles.portfolio}>
      <section className={portfolioStyles.header}>
        <h1>Projects 📚</h1>
        <p>A curated collection of projects that i'm personally proud of, or helped shape me as a developer.</p>
        <SocialIcons/>
      </section>
      <ProjectList/>
    </div>
  )
}

export default portfolio
