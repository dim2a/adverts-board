import React, { Component } from 'react'
import classes from './Advert.css'
import { connect } from 'react-redux'
import {getAdvertById} from '../../redux/actions/adverts'
import {getAdvertById as advertSelector} from '../../helpers/selectors'

export class Advert extends Component {

  componentDidMount() {
      this.props.getAdvertById(this.props.match.params.id)  
    }    

    renderContent(){
      const {title, description, views, price} = this.props.advert
      return (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>{`Price: ${price} $`}</h3>
          <p>{`Views: ${views}`}</p>
        </>
      )
    }

  render() { 
    const {advert} = this.props   
    return (
      <div className={classes.Advert}>
        {advert && this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  advert: advertSelector(state, state.advertPage.id)
})

const mapDispatchToProps = {
  getAdvertById
}

export default connect(mapStateToProps, mapDispatchToProps)(Advert)
