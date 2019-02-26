import React, { Component } from 'react'
import classes from './CreateAdvert.css'
import { connect } from 'react-redux'

export class CreateAdvert extends Component {

  render() {
    return (
      <div className={classes.CreateAdvert}> 
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdvert)
