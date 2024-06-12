import React from "react";
import styles from './search.module.css';



function Search (props) {

    let press = props.buttonPressedSearch;
    let pressFor = props.searchFor;
    
    
    return (
        <div className={styles.searchmodule}>
            <article className={styles.logomodule}>
                <img alt="daily cast icon" className={styles.logo} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE00lEQVR4nO3W6Y8TdRzH8e+gEvCZPBTjUxLwf/EI+lj0gX+BZgPxiiZmNRAQAkbFNeF4QAQ2IiTEDYvLtdttZ7b3tNPpsT22x3Q67Uyn0wb9mJlpu12222u7Cw/6Td7p09d3rv6IJjOZyUxmMrs1eEwH6n/TR7W7NFu7Tbz+J2nVm6RVrxOvXaOb2hU6plyh1+hFGzym/Y37dMKYo7Jxl2DcIdRuEfRZQvU6oXqNoF0lqJcIld9JqfxKx3GS9tOLMHhIr9fnyVGfIwyAR+UiofwzQbnAcPJpevP54ufpjcZ9So2AR+kcg9JpJimdpIPP77GZJ9fI+DMM5JMMit8zy7Evad+uL9CYp8/HgIf0HYPCNzS1618bY7AXti9e+pZB/itGUaZ28etUn6OPx4UvfM0g/wWD3HH6cNcWqN2l2bHiTzDITTE3dm0B4zYJo+CVXw5BuzeFWvgO6pKIhl5GXddgFBOohu5VDaNxwjCMQzu+gH6L1GHwyswR6PwsGnUDjUYD9bpZHYaZYWag1kzXa//puv6XWq8f2bEFqrOkDobfA3X+Uxh6pY1tQWs1A3qtZqfXUNV1K61qVoWqaY2Kpn0GgBn7AtofFOqL//FlqNxPfaE2tpWGimpXVlWUKyqUinoRwEvjXcA8mPV5bMpPpm1stfOqboZWmlAbW4FStiuZKWUrWVFOjXeBK3Ss5zN/490RoWXIJQXFVnIJUrOCJNcLRVnLF2W+IMlX88XiBwD2jrSAco0OWKfKLvjSmVdRzgTWsT2gcheoVCyhUJTtJBl5qWiVK5hJVtm8WQFr+UIkk5PeG2kJ80jc7VMp3/lkW9D8JqhkY3Ot8shk7dLZHNJrZtkfAOwZagHM0L7SeWb52T+pYvg+inIHdlzQrI1NWWWRymSRtFrDanoNiVRmeui7IF2gg+aRWP7tMKQH05CEh21sG9px+7Mbb/86tI3tDU2mbexqOmOCm6URT9rFVtPvDLVALBbbl0+LM7lCoddzOiZopg21sal20UTSSownBZ/Pt3dgfC4vzfWG5geGrg4DTZjYVauIWcwsAcEsmnh/oAXWsvnz3aDpsUOTW0EhROMIm4lxhMSYnRC93BefyWQOpzLZf7eGrg0FjY4CjcTAW0XBC1EErUT4wxG+7wLJVOZsN2hiS2hqBGi8JzQYFhGwisAfWs/LC5W+CySSqcC4oOGBoeIGqI8X2nn5MLzBMDzBMNyBUP8FxHhSexYqPgttYsNdbn8bGumACh3QjqvqC22G2tgQPIGQCbbz81jx8+D8wWDfBSLxRGUc0MBA0HBXqJUvCK4Z6w20utR3gZAY829+oTqh0R2DcutQuDxmfiun28yHZbfvaN8FeEE8vV2opy802BNqYVfMvHCYcV4ssV5xoD+yQCTylo8XntrYTqiwg1CfjeWaWM6DJdZukXVj0eU2f9+mQccTDJ/rD+W7QtntQl1uPHGt4IlzBY+bPXKwwx3mzFu14gvO7TzUbUHb2GUOj1o5WDx0sHjgYKeHPk63lmC9/rOsx/90I9S/JdRhQrkOKNsB3XBVO6DLNtTOhQdLdgtLTuGfRXbwx2arWeL8Rxwr3lPLnNe7xHnU8UDZNnQ9p7qw6AouLLouLyyyR51O5yvbxk9mMpOZzGSox/wPmHei/qZXGHUAAAAASUVORK5CYII="></img>
                <h1 className={styles.name}>Sky Cast</h1>
            </article>
            <section className={styles.inputFieldModule}>

                <input 
                type="text" 
                className={styles.inputField} 
                placeholder="Search"
                onChange={props.onChange}
                >                    
                </input>
                
                

                <button 
                className={styles.button} 
                type="submit"
                onClick={() => {
                    press()
                    pressFor()
                }}>Search</button>

            </section>
        </div>
    )
}

export default Search;


