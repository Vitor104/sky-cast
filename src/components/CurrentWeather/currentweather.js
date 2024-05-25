import React, { useState } from "react";
import styles from './currentweather.module.css';
import imageSun from '../sun.png';
import Search from "../Search/search";
import Forecast from "../Forecast/forecast";



 


function CurrentWeather(props) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1; 
    let currentDay = currentDate.getDate();
    let formattedDate = currentDay + "-" + currentMonth + "-" + currentYear;

    const API = {
        key: "99600cffaca177235cff252ce19ca928",
        base: "https://api.openweathermap.org/data/2.5/",
      }


      
    const [searchLocation, setSearchLocation] = useState(null);   
    
    
    const [weather, setWeather] = useState({});
    console.log(weather);

    const searchPressed = () => {
        fetch(`${API.base}weather?q=${searchLocation}&units=metric&APPID=${API.key}`)
        .then(res => res.json())
        .then(result => {
            setWeather(result)
        });
    };

    const icon = weather.weather && weather.weather[0].icon;
    const iconURL = "http://openweathermap.org/img/w/" + icon + ".png";


    return (
        <main className={styles.container}>      

                
                    <Search buttonPressed={searchPressed} onChange={(e) => setSearchLocation(e.target.value)} />

                    <p className={styles.todaydate}>{formattedDate}</p>
        
                    <img src={iconURL} className={styles.logo}></img>
        
                    <section className={styles.location}>
        
                        <h3 className={styles.place}>{weather && weather.name}, <br></br>{weather.sys && weather.sys.country}</h3>
                        <h2 className={styles.temperature}>{weather.main && weather.main.temp}º</h2>
        
                    </section>   
                  
                
                    <Forecast />

            
        </main>
    )
}

export default CurrentWeather;

//{(e) => setSearchLocation(e.target.value)}