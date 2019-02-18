import React, { Component } from 'react'
import classes from './Adverts.css'
import { connect } from 'react-redux'
import {getAdverts} from '../../redux/actions/adverts'

export class Adverts extends Component {

    componentDidMount() {
        this.props.getAdverts()
    }

  render() {
    return (
        <div className={classes.Adverts}>
        Adverts
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  getAdverts
}

export default connect(mapStateToProps, mapDispatchToProps)(Adverts)
