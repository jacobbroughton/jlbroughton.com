import React from "react"
import Meta from "../components/Meta"
import styles from '../styles/Home.module.scss'
import meImage from "../assets/me.jpeg"
import Image from "next/image"
import SocialIcons from "../components/SocialIcons"


export default function Home() {

  return (
    <div className={styles.container}>
      <Meta/>
      
      <section className={styles.introduction}>
        <div className={styles.imageOfMeParent}>
          <Image src={meImage} layout="responsive" className="image" placeholder="blur" />
        </div>
        <h1>Hello, i'm Jacob 👋</h1>
        <p>I'm a frontend web developer at XVentBox Ventilation Systems, and living in Charlotte, NC.</p>
        {/* <div className={styles.socialIcons}>
          <SVGIcon type="linkedIn"/>
          <SVGIcon type="github"/>
        </div> */}
        <SocialIcons/>
      </section>

      <section className={styles.about}>
        <h2>About</h2>
        <p>I spend most of my time working with React.js, Redux, and Node.js / Express backends. At work, i'm coming to a close on a web app i've been working on, using those same technologies plus Three.js for 3D interactions. I'm about to embark on the process of rebuilding the company's website from scratch with Next.js / React / Redux / Sanity.io Headless CMS.</p>
        <p>While i'm not working, code-wise, i've been working on a reddit clone as a personal project for the last few months, that project is using React.js / Redux / Node / and Express. On my free time away from the computer, I love to mountain bike, mainly jumping and riding downhill trails.</p>
      </section>

    </div>
  )
}
