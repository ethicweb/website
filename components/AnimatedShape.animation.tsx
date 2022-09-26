import { randomInt } from "crypto";
import { useEffect, useState } from "react";
import styles from "../styles/animations/AnimatedShape.module.css";

const AnimatedShape = () => {
    
    const getRandomNumber: Function = (num: number) => {
        return Math.floor(num*Math.random())
    }

    const [randomCount, setRandomCount] = useState();

    

    useEffect(() => {
        setRandomCount(getRandomNumber(100))
        console.log("RANDOM COUNT : ", randomCount);
    },[]);

    useEffect(() => {

    }, 
    [])

    return (
        <>
        <ul className={styles.area}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>        
        </>
        )
}

export default AnimatedShape;