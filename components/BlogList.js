import Link from "next/link"

function BlogList({ blogs }) {

  return (
    blogs.map((blog, index) => {
      const { coverImage, excerpt, title } = blog.frontmatter

      return (
        <Link href={`/blog/${blog.slug}`} key={index}>
          <article>
            <h3>{title}</h3>
          </article>
        </Link>
      )
    })
  )
}

export default BlogList