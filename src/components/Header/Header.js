import React from 'react'
// import styles from './header.module.scss'
// import Container from "../theme/Container";

const Header = () => {

    return(
    <div className="todo-header">
        <div className="ui inverted vertical masthead center aligned segment todo-header">
            {/*<h1>{darkMode ? 'dark mode' : 'light mode'}</h1>*/}
            {/*<button onClick={()=> setDarkMode(prevMode => !prevMode)}>toddle</button>*/}
            {/*<button onClick={() => themeChange('dark')}>Dark Mode</button>*/}
            {/*<button onClick={() => themeChange('light')}>Light Mode</button>*/}
            {/*<div className="image">*/}

                <h1>Todo app</h1>
            {/*</div>*/}
        </div>
    </div>
    )
}

export default Header