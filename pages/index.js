import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import meImage from "/public/images/me.jpeg";
import SocialIcons from "../components/SocialIcons";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Meta />
        <section className={styles.header}>
          <div className={styles.imageOfMeParent}>
            <Image
              alt="A picture of me"
              src={meImage}
              layout="responsive"
              height={300}
              width={300}
              className="image"
              placeholder="blur"
              blurDataURL={meImage}
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
          A little over 3.5 years ago I started this journey of learning the ways of the web and it all 
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
