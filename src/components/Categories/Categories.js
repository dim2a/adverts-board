import React from 'react'
import classes from './Categories.css'
import {connect} from 'react-redux'
import {getCategories, getActiveCategoryId} from '../../helpers/selectors'
import {NavLink, withRouter} from 'react-router-dom'
import {compose} from 'redux'

const Categories = ({categories, activeCategoryId}) => {
    const renderCategory = (category, id) => {
        return(            
            <NavLink to={`/categories/${category.id}`} key={id} activeClassName={classes.active}>
                <div className={classes.categoryItem}>
                    {category.name}
                </div>
            </NavLink>            
        )
    }

    const rebderAllCategory = () => {
        return(
            <NavLink to={`/`}>
                <div className={classes.categoryItem}>
                    All
                </div>
            </NavLink>
        )
    }

    return (
        <div className={classes.Categories}>
            <h4>Категории</h4>
            <div className={classes.categoryList}>
                {rebderAllCategory()}
                {categories.map((category, id) => renderCategory(category, id))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
})

export default compose(
    withRouter,
    connect(mapStateToProps, null)
)(Categories)