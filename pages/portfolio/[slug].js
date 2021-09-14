import React from 'react'
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import marked from "marked"
import Layout from "../../components/Layout"
// import Image from "next/image"
import projectStyles from "../../styles/Project.module.scss"

const project = ({ frontmatter, slug, project }) => {

  const {title, coverImage, link} = frontmatter

  // const { name, description, technicalDetails, task, link, slug } = project

  // parseMarkdown(`../../_content/${slug}.md`)

  return (
    <Layout>
      <article className={projectStyles.project}>
        <div className={projectStyles.header}>
          <h1>{title}</h1>
        </div>
        <section className={projectStyles.body}>
          <div dangerouslySetInnerHTML={{__html: marked(project)}}>

          </div>
          {/* <a className={projectStyles.viewProjectLink} href={link}>View project here</a> */}
        </section>
      </article>
    </Layout>

  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('_content'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  console.log(paths)

  return {
    paths,
    fallback: false 
  }
}

// Able to get params: slug now that we've gotten the static paths
export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('_content', slug + '.md'), 'utf-8')

  const {data: frontmatter, content: project} = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      project
    }
  }
}

export default project
