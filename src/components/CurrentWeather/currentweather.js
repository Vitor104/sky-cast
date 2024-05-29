import React, { useState } from "react";
import styles from './currentweather.module.css';
import imageSun from '../sun.png';
import Search from "../Search/search";
import Forecast from "../Forecast/forecast";



 


function CurrentWeather(props) {

    const { searchL, setSearchL } = props;
    

    return (
        <main className={styles.container}>      


                    <Search buttonPressedSearch={props.buttonPressed} 
                    onChange={(e) => setSearchL (e.target.value)} 
                    />

                    <p className={styles.todaydate}>{props.date}</p>
        
                    <img src={props.icon} className={styles.logo}></img>
        
                    <section className={styles.location}>
        
                        <h3 className={styles.place}>{props.weatherDisplay && props.weatherDisplay.name}, <br></br>{props.weatherDisplay.sys && props.weatherDisplay.sys.country}</h3>
                        <h2 className={styles.temperature}>{props.weatherDisplay.main && props.weatherDisplay.main.temp}º</h2>
        
                    </section>   
                  

            
        </main>
    )
}

export default CurrentWeather;

//onChange={(e) => props.onChangeSearch (e.target.value)}