import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import AnimatedShape from '../components/AnimatedShape.animation'
import { HERO_TEXT } from '../shared/text/hero.text'
import { NAVBAR_TEXT } from '../shared/text/navbar.text'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [isButtonClicked, setButtonClicked] = useState<string>("unclicked");

  const timeOut: any = (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  const handleClick = async (e:any) => {
    e.preventDefault();
    setButtonClicked("clicked");
    await timeOut(2000);
    router.push("home");
  }

  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"/>
    </Head>
    <div className={styles.mainGridContainer}>
      
      <div className={styles.flexContainerCol + " " + styles.titleBlock}>
        <h1 className={styles.titleXxl}>{HERO_TEXT.NAME}</h1>
        <h2 className={styles.titleXl}>{HERO_TEXT.TITLE}</h2>
        <p>{HERO_TEXT.INTRO}</p>
      </div>   
      
      <div className={styles.flexContainerCol + " " + styles.buttonsContainer}>
        <Link href="home">
          <a 
            key={1} 
            onClick={handleClick} 
            className={styles.button + " " + styles.textRegular + " " + ((isButtonClicked === "clicked") ? styles.buttonActive : '')}>
                {NAVBAR_TEXT.GO_WEBSITE}
          </a>
        </Link>
      </div>

    </div>
    <AnimatedShape ></AnimatedShape>



    </>
  )
}

export default Home
