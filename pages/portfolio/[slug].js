import React from 'react'
import server from "../../config/index"

const project = ({ project }) => {
  return (
    <article>
      <h1>{project.name}</h1>
      <p>{project.slug}</p>
    </article>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.slug}`)

  const project = await res.json()

  return {
    props: {
      project
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects`)

  const projects = await res.json()

  const slugs = projects.map(project => project.slug)

  const paths = slugs.map(slug => ({
    params: {
      slug
    }
  }))

  return {
    paths, 
    fallback: false 
  }
}

export default project
