import React, { useState } from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import meImage from "/public/images/me.jpeg";
import SocialIcons from "../components/SocialIcons";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {

  const [currentTime, setCurrentTime] = useState({
    unit: 'years',
    value: `${((new Date() - new Date(2018, 11, 26)) / (86400000 * 7 * 4 * 12)).toFixed(2)}`
  })

  function handleTimeUnitButtonClick() {
    switch (currentTime.unit) {
      case 'years': {
        setCurrentTime({
          unit: 'months',
          value: (new Date() - new Date(2018, 11, 26)) / (86400000 * 7 * 4)
        })
        break
      }
      case 'months': {
        setCurrentTime({
          unit: 'weeks',
          value: (new Date() - new Date(2018, 11, 26)) / (86400000 * 7)
        })
        break
      }
      case 'weeks': {
        setCurrentTime({
          unit: 'days',
          value: (new Date() - new Date(2018, 11, 26)) / (86400000)
        })
        break
      }
      case 'days': {
        setCurrentTime({
          unit: 'years',
          value: (new Date() - new Date(2018, 11, 26)) / (86400000 * 7 * 4 * 12)
        })
        break
      }
    }
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Meta />
        <section className={styles.header}>
          <div className={styles.imageOfMeParent}>
            <Image
              alt="A picture of me"
              src={meImage}
              height={300}
              width={300}
              className="image"
              placeholder="blur"
              priority={true}
            />
          </div>
          <h1>Hello, i&apos;m Jacob 👋</h1>
          <p>
            I&apos;m a web developer at Lowe&apos;s Companies, Inc.,
            and living in Charlotte, NC.
          </p>
          <div className={styles.socialAndCTA}>
            <SocialIcons />
            <a className={styles.CTA} href="mailto:jacobbroughtondev@gmail.com">
              Get in touch
            </a>
          </div>
        </section>

        <section className={styles.about}>
          <h2>About</h2>
          <p>
            <button className={styles.timePassedButton} onClick={handleTimeUnitButtonClick}>{currentTime.value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}</button> {currentTime.unit} ago I started learning how to code at a &apos;Full Stack Web Development&apos; bootcamp at UNCC. It was kind of an &apos;on-a-whim&apos; decision to go to that bootcamp since I, at the time, was actually thinking of becoming a welder. I saw an ad on Reddit for the bootcamp and figured it might be a good idea. Prior to that, though, I was really into computers and technology in general, but my coding experience was next to non-existant other than a single class in middle-school.
          </p>
          <p>
            For personal projects, I like to use build stuff with <strong>React</strong>,{" "}
            <strong>Redux</strong>, and <strong>Node.js</strong> /{" "}
            <strong>Express</strong> / <strong>MySQL</strong> backends. I have recently started a youtube channel where I help beginners learn how to code as well. Make sure to check out the <Link href='/portfolio'>portfolio</Link> page to see some of my personal projects.
          </p>
          <p>At work, I build analytics and reporting tools that various teams need. We often use <strong>React</strong> as our front-end library, <strong>Redux</strong> for state management <strong>PHP</strong> as our API layer, <strong>SQL Server</strong> for the data, and of course <strong>CSS</strong>.</p>
          <p>
            While i&apos;m not working, I love to mountain bike. Mainly jumping
            and riding downhill / enduro trails. Just like coding, you fall and you get right back up and do it again the next day (hopefully without the falling part). Recently i&apos;ve also gotten super into riding my OneWheel, if you haven&apos;t tried one, I definitely recommend it if you get the chance.
          </p>
        </section>
      </div>
    </Layout>
  );
}
