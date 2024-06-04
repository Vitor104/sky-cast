import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router-dom";
import Forecast from "../Forecast/forecast";


function Button (props) {
    
    
    return (
        <div className={styles.buttonContainer}>
            
                <button onClick={props.searchForecast} className={styles.button}>Click me</button>
        
            
        </div>
    )
    
}

export default Button;