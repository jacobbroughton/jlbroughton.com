import { projects } from "../../../projects"

const handler = (req, res) => {
  const { slug } = req.query

  const filtered = projects.filter(project => project.slug === slug)

  if(filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: `Project with the url slug of '${slug}' not found` })
  }
}

export default handler