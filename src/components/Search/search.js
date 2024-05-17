import React from "react";
import styles from './search.module.css'

function Search () {
    return (
        <div className={styles.searchmodule}>
            <p className={styles.date}>17/05/2024</p>
            <input type="text" className={styles.inputField} placeholder="Search"></input>
        </div>
    )
}

export default Search;