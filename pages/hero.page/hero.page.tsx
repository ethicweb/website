import { NextPage } from "next/types";
import styles from "../hero.page/hero.page.module.css"
import { HERO_TEXT } from '../../shared/text/hero.text'
import { NAVBAR_TEXT } from '../../shared/text/navbar.text'

const HeroPage: NextPage = () => {
 


    return(
        <>
        <h1 className={styles.test}>{HERO_TEXT.NAME}</h1>
        </>
    )
} 


export default HeroPage;