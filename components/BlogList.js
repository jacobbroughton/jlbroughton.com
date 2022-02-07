import Link from "next/link"

function BlogList({ blogs }) {

  console.log(blogs)

  return (
    blogs.map(blog => {
      const { coverImage, excerpt, title } = blog.frontmatter

      return (
        <Link href={`/blog/${blog.slug}`}>
          <article>
            <h3>{title}</h3>
          </article>
        </Link>
      )
    })
  )
}

export default BlogList