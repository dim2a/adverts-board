import React from 'react'
import classes from './Content.css'

const Content = props => {
    return(
        <div className={classes.Content}>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Content