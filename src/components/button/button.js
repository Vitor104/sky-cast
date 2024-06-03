import React from "react";
import styles from "./button.module.css";


function Button (props) {

    
    return (
        <div className={styles.buttonContainer}>
            <button onClick={props.forecast} className={styles.button}>Click me</button>
        </div>
    )
    
}

export default Button;