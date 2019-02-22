import React from 'react'
import classes from './Header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return(
        <header className={classes.Header}>
            <NavLink to="/registration">
                <button className={classes.regBtn}>Регистрация</button>
            </NavLink>
        </header>
    )
}

export default Header