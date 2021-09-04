import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jacob Broughton - Portfolio</title>
        <meta name="description" content="Jacob Broughton - Passionate front-end developer with notable skills in Javascript, React.js / Redux, Node.js, SQL, SCSS / CSS, & HTML5." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
