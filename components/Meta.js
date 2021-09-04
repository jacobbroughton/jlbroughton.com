import React from 'react'
import Head from "next/head"

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Jacob Broughton - Portfolio",
  description: "Passionate front-end developer with notable skills in Javascript, React.js / Redux, Node.js, SQL, SCSS / CSS, & HTML5",
  keywords: "web developer, react developer, developer, programming, portfolio"

}

export default Meta
