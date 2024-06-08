import React from "react";
import styles from './forecast.module.css';


function Forecast(props) {
    
    

    return (

        <div className={styles.container}>                
                
                
                <section className={styles.forecastContainer}>
                
                <section className={styles.forecastModule}>
                    

                    {props.iconUm === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img className={styles.weatherImage} src={props.iconUm && props.iconUm}></img>
                    }
                    <p className={styles.hourandtemp}>{props.dayTxt.dayOne}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.firstTemp}</p>

                </section>

                <section className={styles.forecastModule}>

                    
                    {props.iconDois === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img className={styles.weatherImage} src={props.iconDois && props.iconDois}></img>
                    }
                    <p className={styles.hourandtemp}>{props.dayTxt.dayTwo}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.secondTemp}</p>

                </section>

                <section className={styles.forecastModule}>

                    
                    {props.iconTres === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img className={styles.weatherImage} src={props.iconTres && props.iconTres}></img>
                    }
                    <p className={styles.hourandtemp}>{props.dayTxt.dayThree}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.thirdTemp}</p>

                </section>

                <section className={styles.forecastModule}>

                    
                    {props.iconQuatro === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img className={styles.weatherImage} src={props.iconQuatro && props.iconQuatro}></img>
                    }
                    <p className={styles.hourandtemp}>{props.dayTxt.dayFour}</p>
                    <p className={styles.hourandtemp}>{props.dayTemp.fourthTemp}</p>

                </section>
                
            </section>
               

            
        </div>
    )
}

export default Forecast;