import React from 'react'
import classes from './Sidebar.css'
import Search from '../../containers/Search/Search'


const Sidebar = () => {
    return(
        <div className={classes.Sidebar}>
            <Search/>
        </div>
    )
}

export default Sidebar