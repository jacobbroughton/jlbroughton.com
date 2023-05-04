import React, { useState } from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import meImage from "/public/images/me.jpeg";
import SocialIcons from "../components/SocialIcons";
import Layout from "../components/Layout";

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
            })}</button> {currentTime.unit} ago I started this journey of learning the ways of the web and it all
            started with a &apos;Full Stack Web Development&apos; bootcamp at UNCC back in 2018.
            I spend most of my time working with <strong>React.js</strong>,{" "}
            <strong>Redux</strong>, and <strong>Node.js</strong> /{" "}
            <strong>Express</strong> / <strong>MySQL</strong> backends.
          </p>
          <p>
            While i&apos;m not working, I love to mountain bike. Mainly jumping
            and riding downhill / enduro trails. Just like coding, you fall and you get right back up and do it again the next day (hopefully without the falling part).
          </p>
        </section>
      </div>
    </Layout>
  );
}
