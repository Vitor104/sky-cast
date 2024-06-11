import React from "react";
import styles from './forecast.module.css';


function Forecast(props) {
    
    

    return (
        
        <div className={styles.container}>                
                
                <h2 className={styles.dailytitle}>Daily forecast</h2>
                <section className={styles.forecastContainer}>
                
                <section className={styles.forecastModule}>
                    

                    {props.iconUm === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img alt="weather icon" className={styles.weatherImage} src={props.iconUm && props.iconUm}></img>
                    }
                    <p className={styles.hourandtemp}>{props.dayTxt.dayOne}</p>
                    <br></br>
                    

                    {props.dayTemp.firstTemp === undefined ? '' : 
                    <p className={styles.hourandtemp}>{props.dayTemp.firstTemp} º</p>
                    }


                    

                </section>

                <section className={styles.forecastModule}>

                    
                    {props.iconDois === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img alt="weather icon" className={styles.weatherImage} src={props.iconDois && props.iconDois}></img>
                    }
                    <p className={styles.hourandtemp}>{props.dayTxt.dayTwo}</p>
                    <br></br>
                    {props.dayTemp.secondTemp === undefined ? '' : 
                    <p className={styles.hourandtemp}>{props.dayTemp.secondTemp} º</p>
                    }

                    

                </section>

                <section className={styles.forecastModule}>

                    
                    {props.iconTres === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img alt="weather icon" className={styles.weatherImage} src={props.iconTres && props.iconTres}></img>
                    }
                    <p className={styles.hourandtemp}>{props.dayTxt.dayThree}</p>
                    <br></br>
                    {props.dayTemp.thirdTemp === undefined ? '' :
                    <p className={styles.hourandtemp}>{props.dayTemp.thirdTemp} º</p>
                    }

                    

                </section>

                <section className={styles.forecastModule}>

                    
                    {props.iconQuatro === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img alt="weather icon" className={styles.weatherImage} src={props.iconQuatro && props.iconQuatro}></img>
                    }
                    
                    <p className={styles.hourandtemp}>{props.dayTxt.dayFour}</p>
                    <br></br>
                    {props.dayTemp.fourthTemp === undefined ? '' :
                    <p className={styles.hourandtemp}>{props.dayTemp.fourthTemp} º</p>
                    } 
                    

                </section>
                
            </section>
               

            
        </div>
    )
}

export default Forecast;