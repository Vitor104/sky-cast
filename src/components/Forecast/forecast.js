import React from "react";
import styles from './forecast.module.css';


function Forecast(props) {
    
   

    return (

        

        <div className={styles.container}>

           
                <section className={styles.forecastContainer}>
                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconUm && props.iconUm}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconDois && props.iconDois}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconTres && props.iconTres}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>

                <section className={styles.forecastModule}>
                    <img className={styles.weatherImage} src={props.iconQuatro && props.iconQuatro}></img>
                    <p className={styles.hourandtemp}>01:00 pm</p>
                    <p className={styles.hourandtemp}>21º</p>
                </section>
                
            </section>
            

            
        </div>
    )
}

export default Forecast;