import React, {Component} from 'react'
import classes from './Header.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Header extends Component {

    render(){
        return(
           <header className={classes.Header}>
                <div className={classes.create}>
                    {
                        this.props.registered
                        ? <NavLink to="/newadvert">
                            <button className={classes.Btn}>Новое объявление</button>
                        </NavLink>
                        : null
                    }
                    
                </div>
                <div className={classes.auth}>
                    <NavLink to="/registration">
                        <button className={classes.Btn}>Регистрация</button>
                    </NavLink>
                    <NavLink to="/login">
                        <button className={classes.Btn}>Вход</button>
                    </NavLink>
                </div>                
            </header>
        )
    }    
}

const mapStateToProps = state => ({
    registered: state.auth.registered
})

const mapDispatchToProps = {

}

export default connect (mapStateToProps, mapDispatchToProps)(Header)