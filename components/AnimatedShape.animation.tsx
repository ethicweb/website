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
{/*         {
            Array.apply(null, Array(randomCount))
                .map((element, index) => index)
                .map((item) => {
                    console.log(item)
                    return(
                    <div 
                        key={item}
                        className={styles.test + " " + "doubleTest"}
                        style={{
                            left: item + getRandomNumber(300),
                            bottom: item - getRandomNumber(500)
                        }}
                            >
                    </div>
                    )
                })
            
            
        } */}
        
        </>
        )
}

export default AnimatedShape;