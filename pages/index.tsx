import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedShape from '../components/AnimatedShape.animation'
import { HERO_TEXT } from '../shared/text/hero.text'
import { NAVBAR_TEXT } from '../shared/text/navbar.text'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const handleClick = (e:any) => {
    e.preventDefault();
    console.log(e.target);
    e.target.classList.add("button-active");
    //console.log(e.target.props.key);
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
        <h1 className={styles.titleXl}>{HERO_TEXT.NAME.toUpperCase()}</h1>
        <h2 className={styles.titleL}>{HERO_TEXT.TITLE}</h2>
        <p>{HERO_TEXT.INTRO}</p>
      </div>   
      
      <div className={styles.flexContainerCol + " " + styles.buttonsContainer}>
      <button key={1} onClick={handleClick} className={styles.button + " " + styles.textRegular}>{NAVBAR_TEXT.CV}</button>
      <button key={2} onClick={handleClick} className={styles.button + " " + styles.textRegular}>{NAVBAR_TEXT.CONTACT}</button>
      <button key={3} onClick={handleClick} className={styles.button + " " + styles.textRegular}>{NAVBAR_TEXT.ABOUT}</button>
      </div>
    </div>
    <AnimatedShape ></AnimatedShape>



    </>
  )
}

export default Home
