import React from 'react'
import classes from './Sidebar.css'
import Search from '../../containers/Search/Search'
import Categories from '../Categories/Categories'


const Sidebar = () => {
    return(
        <div className={classes.Sidebar}>
            <div className={classes.wrapper}>
                <Search/>
                <Categories/>
            </div>
        </div>
    )
}

export default Sidebar