import React from "react";
import styles from './forecast.module.css';


function Forecast(props) {
    
   

    return (

        

        <div className={styles.container}>
            <section className={styles.forecastContainer}>
                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconURLUm && props.iconURLUm}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconURLDois && props.iconURLDois}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconURLTres && props.iconURLTres}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconURLQuatro && props.iconURLQuatro}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>
                
            </section>
        </div>
    )
}

export default Forecast;