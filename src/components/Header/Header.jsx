import React, {Component} from 'react'
import classes from './Header.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
class Header extends Component {

    getName(userEmail, users) {
        for (let user in users){
            if(users[user].email === userEmail){
                return users[user].userName
            }
        }
    }

    render(){
        const {registered, userEmail, users} = this.props
        return(
           <header className={classes.Header}>
                <div className={classes.create}>
                    {
                        registered
                        ? <NavLink to="/newadvert">
                            <button className={classes.Btn}>Новое объявление</button>
                        </NavLink>
                        : null                        
                    }
                    <div className={classes.greeting}>
                        {
                            userEmail
                            ?<h3>{`Привет ${this.getName(userEmail, users)}`}</h3>
                            : null
                        }
                    </div>
                    
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
    registered: state.auth.registered,
    userEmail: state.auth.userEmail,
    users: state.auth.users
})

const mapDispatchToProps = {

}

export default connect (mapStateToProps, mapDispatchToProps)(Header)