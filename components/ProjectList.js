import React from 'react'
import ProjectListItem from "./ProjectListItem"
// import { projects } from "../projects"
import projectListStyles from "../styles/ProjectList.module.scss"

const ProjectList = ({ projects }) => {
  return (
    <section className={projectListStyles.projectList}>
      {projects.map((project, index) => <ProjectListItem key={index} project={project}/>)}
    </section>
  )
}

export default ProjectList
