import { projects } from "../../../projects"

const handler = (req, res) => {
  if (projects.length > 0) {
    res.status(200).json(projects)
  } else {
    res.status(400)
  }
}

export default handler