import React, { useState, useEffect } from "react";
import styles from './currentweather.module.css';
import Search from "../Search/search";




 


function CurrentWeather(props) {

    const { searchL, setSearchL } = props;

  
   

    return (
        <main className={styles.container}>      


                    <Search buttonPressedSearch={props.buttonPressed} 
                    searchFor={props.searchForecast}
                    onChange={(e) => setSearchL (e.target.value)}
                    />

                    <p className={styles.todaydate}>{props.date}</p>

                    {props.icon === 'http://openweathermap.org/img/w/undefined.png' ? null : 
                    <img src={props.icon} className={styles.currentIcon}></img>   
                    }

                                    
                                                         
        
                    <section className={styles.location}>
        
                        <h3 className={styles.place}>{props.weatherDisplay && props.weatherDisplay.name} <br></br>{props.weatherDisplay.sys && props.weatherDisplay.sys.country}</h3>
                        <h2 className={styles.temperature}>{props.weatherDisplay.main && props.weatherDisplay.main.temp}</h2>
        
                    </section>   
                  

            
        </main>
    )
}

export default CurrentWeather;

