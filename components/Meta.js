import React from 'react'
import Head from "next/head"
// import meImage from "/public/images/me.jpeg"

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
      <meta property="og:url" content="https://www.jlbroughton.com" />
      <meta property="og:image" content="https://www.jlbroughton.com/images/me.jpeg" />
      <meta property="og:image:secure_url" content="https://www.jlbroughton.com/images/me.jpeg" /> 
      <meta property="og:image:width" content="700" /> 
      <meta property="og:image:height" content="700" />
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:image" content="https://www.jlbroughton.com/images/me.jpeg"/>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Jacob Broughton - Portfolio",
  description: "Hi, i'm Jacob. I'm a web developer at Lowe's Companies, Inc. and create web applications using React & Redux, PHP, SQL / SQL Server, and CSS.",
  keywords: "web developer, react developer, developer, programming, portfolio"

}

export default Meta
