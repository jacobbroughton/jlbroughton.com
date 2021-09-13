import React from 'react'
import Head from "next/head"
// import meImage from "/me.jpeg"

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="www.jlbroughton.com" />
      <meta name="image" property="og:image" content="/me.jpeg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:secure_url" content="/me.jpeg" /> 
      <meta property="og:image:width" content="640" /> 
      <meta property="og:image:height" content="442" />
    </Head>
  )
}

Meta.defaultProps = {
  title: "Jacob Broughton - Portfolio",
  description: "Passionate front-end developer with notable skills in Javascript, React.js / Redux, Node.js, SQL, SCSS / CSS, & HTML5",
  keywords: "web developer, react developer, developer, programming, portfolio"

}

export default Meta
