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
            <h3>{project.frontmatter.title}</h3>
          </a>
        </Link>
        <p>{project.frontmatter.excerpt}</p>
        <Link  href={`/portfolio/${project.slug}`}>
          <a className={projectListItemStyles.readMore}>
            Read More
          </a>
        </Link> 
      </div>
      <div className={projectListItemStyles.imageParent}>
        <Image alt="" src={project.frontmatter.coverImage} layout="responsive" height={200} width={320} />
      </div>
      
    </article>
  )
}

export default ProjectListItem
