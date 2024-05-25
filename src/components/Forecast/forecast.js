import React from "react";
import styles from './forecast.module.css';
import imageSun from '../sun.png';
import imageStorm from '../storm.png';
import imageCloudyandrain from '../cloudyandraining.png';
import imageCloudy from '../cloudy.png';

function Forecast() {
    
    const API = {
        key: "99600cffaca177235cff252ce19ca928",
        base: "http://api.openweathermap.org/data/2.5/forecast",
      }


    return (
        <div className={styles.container}>
            <section className={styles.forecastContainer}>
                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={imageSun}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={imageStorm}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={imageCloudyandrain}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={imageCloudy}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>
                
            </section>
        </div>
    )
}

export default Forecast;