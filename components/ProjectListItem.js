import React from 'react'
import Link from "next/link"
import Image from "next/image"
import projectListItemStyles from "../styles/ProjectListItem.module.scss"

const ProjectListItem = ({ project }) => {
  return (
    <article className={projectListItemStyles.projectListItem}>
      <div className={projectListItemStyles.textParent}>
        <Link href={`/portfolio/${project.slug}`} passHref>
          <a>
            <h3>{project.name}</h3>
          </a>
        </Link>
        <p>{project.excerpt}</p>
        <Link  href={`/portfolio/${project.slug}`}>
          <a className={projectListItemStyles.readMore}>
            Read More
          </a>
        </Link> 
      </div>
      <Image alt="" src="https://via.placeholder.com/150x300" height={150} width={300}/>
    </article>
  )
}

export default ProjectListItem
