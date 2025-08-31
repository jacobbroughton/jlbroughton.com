import Layout from "../../components/Layout"
import BlogList from "../../components/BlogList"
import SocialIcons from "../../components/SocialIcons"
import blogListStyles from "../../styles/BlogListStyles.module.scss"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {sortById} from "../../utils/sortById"


function blog({ blogs }) {
  return (
    <Layout>
      <div className={blogListStyles.container}>
      <section className={blogListStyles.header}>
          <h1>Blog</h1>
          <p>Thoughts and things i want to share</p>
          <SocialIcons/>
        </section>
      </div>
      <BlogList blogs={blogs}/>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const files = fs.readdirSync(path.join('_blogs'))

  const blogs = files.map(filename => {

    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('_blogs', filename),
      'utf-8'
    )

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      blogs: blogs.sort(sortById)
    }
  }
}

export default blog