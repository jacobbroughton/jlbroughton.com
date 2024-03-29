import React from 'react'
import Link from "next/link"
import Image from "next/image"
import projectListItemStyles from "../styles/ProjectListItem.module.scss"

const ProjectListItem = ({ project }) => {

  return (
    <article className={projectListItemStyles.projectListItem}>
      <div className={projectListItemStyles.textParent}>
        <Link href={`/portfolio/${project.slug}`} scroll={false} passHref>
          <h3>{project.frontmatter.title}</h3>
        </Link>
        <p>{project.frontmatter.excerpt}</p>
        <Link href={`/portfolio/${project.slug}`} scroll={false} className={projectListItemStyles.readMore}>
          Read More
        </Link>
      </div>
      <div className={projectListItemStyles.imageParent}>
        <Image alt="" src={project.frontmatter.coverImage} height={200} width={320} placeholder="blur" priority={true} blurDataURL={project.frontmatter.coverImage} />
      </div>

    </article>
  )
}

export default ProjectListItem
