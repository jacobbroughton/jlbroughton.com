import React, { useEffect, useState } from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import meImage from "/public/images/me-3.png";
import SocialIcons from "../components/SocialIcons";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  const [currentTime, setCurrentTime] = useState({
    unit: "years",
    value: `${((new Date() - new Date(2018, 11, 26)) / (86400000 * 7 * 4 * 12)).toFixed(
      2
    )}`,
  });
  const [randomEmoji, setRandomEmoji] = useState(null);
  const [emojiButtonClickedCount, setEmojiButtonClickedCount] = useState(0);

  function handleTimeUnitButtonClick() {
    switch (currentTime.unit) {
      case "years": {
        setCurrentTime({
          unit: "months",
          value: (new Date() - new Date(2018, 11, 26)) / (86400000 * 7 * 4),
        });
        break;
      }
      case "months": {
        setCurrentTime({
          unit: "weeks",
          value: (new Date() - new Date(2018, 11, 26)) / (86400000 * 7),
        });
        break;
      }
      case "weeks": {
        setCurrentTime({
          unit: "days",
          value: (new Date() - new Date(2018, 11, 26)) / 86400000,
        });
        break;
      }
      case "days": {
        setCurrentTime({
          unit: "years",
          value: (new Date() - new Date(2018, 11, 26)) / (86400000 * 7 * 4 * 12),
        });
        break;
      }
    }
  }

  useEffect(() => {
    console.log(emojiButtonClickedCount);
    function getRandomEmoji() {
      let emojiArray = ["🚲", "🏍️", "🏎️", "👽", "👾", "👁️", "🧌", "🐉"];
      let randomInt = Math.floor(Math.random() * emojiArray.length);
      let generatedEmoji = emojiArray[randomInt];
      let existingEmoji = localStorage.getItem("jlbLastEmoji");

      if (existingEmoji === null || existingEmoji !== generatedEmoji) {
        localStorage.setItem("jlbLastEmoji", generatedEmoji);
        setRandomEmoji(generatedEmoji);
      } else {
        getRandomEmoji();
      }
    }

    getRandomEmoji();
  }, [emojiButtonClickedCount]);

  return (
    <Layout>
      <div className={styles.container}>
        <Meta />
        <section className={styles.header}>
          <div className={styles.imageOfMeParent}>
            <Image
              alt="A picture of me"
              src={meImage}
              fill
              className="image"
              placeholder="blur"
              priority={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <h1>
            Hi, i&apos;m Jacob 👨‍💻
            {/* <button
              className={styles.emojiButton}
              onClick={() => setEmojiButtonClickedCount((prevCount) => prevCount + 1)}
            >
              {randomEmoji}
            </button> */}
          </h1>
          <p>I am a web developer currently living in Matthews, NC.</p>
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
            I am an experienced web developer that has built and shipped applications that have reached 100k+ unique users. Here&apos;s a link to some personal projects: <Link href="/portfolio">portfolio</Link> page to see some of my
            personal projects.
          </p>
          <p>
            <button
              className={styles.timePassedButton}
              onClick={handleTimeUnitButtonClick}
            >
              {currentTime.value.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </button>{" "}
            {currentTime.unit} ago I started learning how to code at a &apos;Full Stack
            Web Development&apos; bootcamp at UNCC, and have been building things ever
            since.
          </p>
        </section>
      </div>
    </Layout>
  );
}
