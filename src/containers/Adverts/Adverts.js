import React, { Component } from 'react'
import classes from './Adverts.css'
import { connect } from 'react-redux'
import {getAdverts, 
  loadMoreHandler,
  getCategories
} from '../../redux/actions/adverts'
import {receiveAdvert} from '../../helpers/selectors'
import {NavLink} from 'react-router-dom'
import * as R from 'ramda'

export class Adverts extends Component {

  componentDidMount() {
    this.props.getAdverts()
    this.props.getCategories()    
  }

  renderAdvert(advert, id) {
    const shortDescription = `${R.take(300, advert.description)}...`
    return(
      <div className={classes.advert} key={id}>
        <h2>{advert.title}</h2>
        <p>{shortDescription}</p>
        <h4>{`Price: ${advert.price} $`}</h4>
        <p>{`Views ${advert.views}`}</p>
        <NavLink to={`/adverts/${advert.id}`}>More info</NavLink>    
      </div>
    )
  }

  render() {
    const {adverts, loadMoreHandler} = this.props
    console.log('state', this.props)
    return (
      <div className={classes.Adverts}>
        <div>
          {adverts && adverts.map((advert, id) => this.renderAdvert(advert, id))}
        </div>
        <div className={classes.loadMore}>
          <button onClick={loadMoreHandler}>Load more</button>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    adverts: receiveAdvert(state, ownProps)
  }  
}

const mapDispatchToProps = {
  getAdverts,
  loadMoreHandler,
  getCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Adverts)
