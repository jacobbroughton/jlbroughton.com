import Layout from "../../../components/Layout"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { marked } from "marked"
import hljs from "highlight.js"


function blog({ frontmatter, slug, blog }) {

  const { title, coverImage, link } = frontmatter

  marked.setOptions({
    highlight: function (code, lang) {
      if (hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code).value
      } else {
        return hljs.highlightAuto(code).value
      }
    }
  });

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
      </div>
      <section>
        <div dangerouslySetInnerHTML={{ __html: marked(blog) }}>

        </div>
        {/* <a className={projectStyles.viewProjectLink} href={link}>View project here</a> */}
      </section>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('_blogs'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('_blogs', slug + '.md'), 'utf-8')

  const { data: frontmatter, content: blog } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      blog
    }
  }
}

export default blog