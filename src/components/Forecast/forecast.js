import React from "react";
import styles from './forecast.module.css';


function Forecast(props) {
    
   

    return (

        

        <div className={styles.container}>

                <button className="button" onClick={props.searchForecast}>click me</button>

                
                    <section className={styles.forecastContainer}>
                <section className={styles.forecastModule}>

                    <img className={styles.weatherImage} src={props.iconUm && props.iconUm}></img>
                    <p className={styles.hourandtemp}>{props.dayTxt.dayOne}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.firstTemp}</p>

                </section>

                <section className={styles.forecastModule}>

                    <img className={styles.weatherImage} src={props.iconDois && props.iconDois}></img>
                    <p className={styles.hourandtemp}>{props.dayTxt.dayTwo}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.secondTemp}</p>

                </section>

                <section className={styles.forecastModule}>

                    <img className={styles.weatherImage} src={props.iconTres && props.iconTres}></img>
                    <p className={styles.hourandtemp}>{props.dayTxt.dayThree}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.thirdTemp}</p>

                </section>

                <section className={styles.forecastModule}>

                    <img className={styles.weatherImage} src={props.iconQuatro && props.iconQuatro}></img>
                    <p className={styles.hourandtemp}>{props.dayTxt.dayFour}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.fourthTemp}</p>

                </section>
                
            </section>
               

            
        </div>
    )
}

export default Forecast;