import React from "react";
import styles from './search.module.css';

function Search({ search, setSearch, handleSearch }) {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSearch();
    }

    return (
        <div className={styles.searchBox}>
            <input 
                type="text" 
                className={styles.input} 
                placeholder="Digite a cidade..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button className={styles.button} onClick={handleSearch}>
                🔍
            </button>
        </div>
    )
}
export default Search;