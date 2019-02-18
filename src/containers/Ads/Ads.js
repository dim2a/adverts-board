import React, { Component } from 'react'
import classes from './Ads.css'
import { connect } from 'react-redux'

export class Ads extends Component {

  render() {
    return (
        <div className={classes.Ads}>
        Ads
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Ads)
