import React from 'react'
import youtubeStyles from "../../styles/Youtube.module.scss"
import Layout from "../../../components/Layout"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sortById } from "../../../utils/sortById"

const youtube = () => {

  const videoArray = [
    {title: "WTF Is The Array Push Method In Javascript?", link: "https://www.youtube.com/embed/krNHMZsHFJs"},
    {title: "Got 1 Minute? Learn This Javascript Array Method 😎", link: "https://www.youtube.com/embed/y4hgD0hQTIM"},
    {title: "How I Got A Developer Job Using LinkedIn 🧑‍💻", link: "https://www.youtube.com/embed/pjvlTZ90nuI"},
    {title: "Strategies I Used To Get A Developer Job 📊", link: "https://www.youtube.com/embed/K_XqZbZKiIY"},
    {title: "A Coding Bootcamp MIGHT Not Be Right For You 🤔", link: "https://www.youtube.com/embed/YuEh38GyXu0"},
    {title: "A Practical Explanation Of The Array Map Method In Javascript", link: "https://www.youtube.com/embed/uOIg2WKHhA0"},
    {title: "Beginners NEED To Understand This Programming Term", link: "https://www.youtube.com/embed/yTABFtiBGFk"},
    {title: "React Guy Tries Svelte (First Impressions)", link: "https://www.youtube.com/embed/oMeXoU0CQTc"},
    { title: 'Beginners Need To Understand This Programming Term', link: 'https://www.youtube.com/embed/yTABFtiBGFk' },
    { title: 'React Guy Tries Svelte (First Impressions)', link: 'https://www.youtube.com/embed/oMeXoU0CQTc' },
    { title: 'THIS Is The Perfect Beginner React Project', link: 'https://www.youtube.com/embed/I8Ws07OSc1c' },
    { title: 'Build An Accordion In React From Scratch | ReactJS Tutorial', link: 'https://www.youtube.com/embed/Y6AfeQIgtVw' },
    { title: 'Build A On/Off Toggle With React In 6 Minutes', link: 'https://www.youtube.com/embed/6O_4p-H1-lY' },
    { title: 'Learn How To Build A Custom Right Click Menu / Context Menu in 8 Minutes', link: 'https://www.youtube.com/embed/moj-hTXBgz4' },
    { title: 'Master Table Sorting In React In 5 Minutes', link: 'https://www.youtube.com//embed/ran0d8WHTYs' },
    { title: 'Learn Tables In React: A 3-Minute Crash Course', link: 'https://www.youtube.com//embed/PQNev4cJOEU' },
    { title: 'Learn Forms In React: A 7-Minute Crash Course', link: 'https://www.youtube.com//embed/qIPYA2DqYIA' },
    { title: "Learn How To Build A Dropdown Menu In React: A Beginner-Friendly Tutorial", link: 'https://www.youtube.com//embed/qb70Epml9X0' },
    { title: 'Learn How To Build A Sidebar With React JS (Static and Slide-Out', link: 'https://www.youtube.com//embed/6YFvKkGXWQ8' },
    { title: 'How To Build A Modal With React JS', link: 'https://www.youtube.com/embed/xhaJRxhQFJc' },
    { title: 'How to Convert an Object To An Array In Javascript', link: 'https://www.youtube.com/embed/Nsr6-Q3aAKE' }
  ]

  return (
    <Layout>
      <div className={youtubeStyles.container}>
        <section className={youtubeStyles.header}>
          <h1>Youtube 📹</h1>
          <p>A collection of my youtube videos</p>
        </section>
        <div className={youtubeStyles.videoList}>
          {videoArray.map((video, i) => {
            return (
              <div key={i} className={youtubeStyles.videoContainer}>
                <p>{video.title}</p>
                <iframe
                  className={youtubeStyles.video}
                  src={video.link}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async (context) => {

  const files = fs.readdirSync(path.join('_projects'))

  // Get slug and frontmatter from files
  const projects = files.map(filename => {
    // create slug
    const slug = filename.replace('.md', '')

    // gives unparsed markdown, exactly whats in the files
    const markdownWithMeta = fs.readFileSync(
      path.join('_projects', filename),
      'utf-8'
    )

    // Gets metadata from markdown files, renaming data to frontmatter
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })


  return {
    props: {
      projects: projects.sort(sortById)
    }
  }
}

export default youtube
