import React, {Component} from 'react'
import classes from './Advert.css'
import {connect} from 'react-redux'
import {getAdvertById} from '../../redux/actions/adverts'

class Advert extends Component {

    componentDidMount() {
        //console.log(this.props.params)
        this.props.getAdvertById(this.props.match.params.id)
    }

    render(){
        return(
            <div className={classes.Advert}>
                Advert
            </div>
        )
    }
    
}

const mapStateToProps = state => {

}

const mapDispatchToProps = {
    getAdvertById
}

export default connect(null, mapDispatchToProps)(Advert)