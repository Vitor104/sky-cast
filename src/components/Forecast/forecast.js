import React from "react";
import styles from './forecast.module.css';

function Forecast({ data }) {
    return (
        <div className={styles.container}>
            <h3>Próximos Dias</h3>
            <div className={styles.list}>
                {data.map((item, index) => (
                    <div key={index} className={styles.dayCard}>
                        <p className={styles.date}>
                            {new Date(item.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' })}
                        </p>
                        <img 
                            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} 
                            alt="icon" 
                        />
                        <p className={styles.temp}>{Math.round(item.main.temp)}°</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Forecast;