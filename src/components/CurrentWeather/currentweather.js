import React from "react";
import styles from './currentweather.module.css';
import imageSun from '../sun.png';

function CurrentWeather() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; 
    let currentDay = currentDate.getDate();
    let formattedDate = currentDay + "-" + currentMonth + "-" + currentYear;

    return (
        <main className={styles.container}>
            <p className={styles.todaydate}>{formattedDate}</p>
            <img src={imageSun} className={styles.logo}></img>
            <section className={styles.location}>
                <h3 className={styles.place}>Vancouver, <br></br> Canada</h3>
                <h2 className={styles.temperature}>21º</h2>
            </section>
        </main>
    )
}

export default CurrentWeather;