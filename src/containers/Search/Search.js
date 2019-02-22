import React, { Component } from 'react'
import classes from './Search.css'
import { connect } from 'react-redux'
import {searchAdvert} from '../../redux/actions/adverts'

export class Search extends Component {
    constructor (props) {
        super(props)

        this.state={
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
           value: e.target.value 
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.searchAdvert(this.state.value)
    }

  render() {
    return (
      <div className={classes.Search}>
        <h3>Поиск</h3>
        <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange}
                    type='text'
                />
                <button><i className="fas fa-search"></i></button>
            </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    searchAdvert
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
