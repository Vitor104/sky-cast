import React from "react";
import styles from "./button.module.css";
import Forecast from "../Forecast/forecast";


function Button (props) {

    
    return (
        <div className={styles.buttonContainer}>
            <a href={ <Forecast/> }>
                <button onClick={props.buttonPressed} className={styles.button}>Click me</button>
            </a>
        </div>
    )
    
}

export default Button;