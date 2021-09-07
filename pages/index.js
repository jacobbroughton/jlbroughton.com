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
          <Image alt="A picture of me" src={meImage} layout="responsive" className="image" placeholder="blur" />
        </div>
        <h1>Hello, i&apos;m Jacob 👋</h1>
        <p>I&apos;m a frontend web developer at XVentBox Ventilation Systems, and living in Charlotte, NC.</p>
        {/* <div className={styles.socialIcons}>
          <SVGIcon type="linkedIn"/>
          <SVGIcon type="github"/>
        </div> */}
        <SocialIcons/>
      </section>

      <section className={styles.about}>
        <h2>About</h2>
        <p>I spend most of my time working with React.js, Redux, and Node.js / Express backends. At work, i&apos;m coming to a close on a web app i&apos;ve been working on, using those same technologies plus Three.js for 3D interactions. I&apos;m about to embark on the process of rebuilding the company&apos;s website from scratch with Next.js / React / Redux / Sanity.io Headless CMS.</p>
        <p>While i&apos;m not working, code-wise, i&apos;ve been working on a reddit clone as a personal project for the last few months, that project is using React.js / Redux / Node / and Express. On my free time away from the computer, I love to mountain bike, mainly jumping and riding downhill trails.</p>
      </section>

    </div>
  )
}
