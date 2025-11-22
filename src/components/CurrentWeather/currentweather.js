import React from "react";
import styles from './currentweather.module.css';

function CurrentWeather({ data }) {
    const dateBuilder = (d) => {
        let date = new Date();
        return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    }

    return (
        <div className={styles.weatherCard}>
            <div className={styles.location}>
                <h2>{data.name}, {data.sys.country}</h2>
                <p>{dateBuilder(new Date())}</p>
            </div>
            <div className={styles.mainData}>
                <div className={styles.temp}>
                    {Math.round(data.main.temp)}°c
                </div>
                <div className={styles.iconContainer}>
                    <img 
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                        alt={data.weather[0].description} 
                    />
                    <p>{data.weather[0].description}</p>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather;