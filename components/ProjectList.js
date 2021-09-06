import React from 'react'
import ProjectListItem from "./ProjectListItem"
import { projects } from "../projects"
import projectListStyles from "../styles/ProjectList.module.scss"

const ProjectList = () => {
  return (
    <section className={projectListStyles.projectList}>
      {projects.map(project => <ProjectListItem key={project.name} project={project}/>)}
    </section>
  )
}

export default ProjectList
