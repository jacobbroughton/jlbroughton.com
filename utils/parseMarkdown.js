import fs from "fs"
import {unified} from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"


export const parseMarkdown = (fileString) => {

  const buf = fs.readFileSync(fileString)

  unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(buf)
    .then(file => {
      console.log(file)
      return file
    })
}
