import * as R from 'ramda'
import {GET_CATEGORIES_SUCCESS} from '../actions/actionType'

const initialState = {

}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES_SUCCESS:
        const newValue = R.indexBy(R.prop('id'), action.payload)
        return R.merge(state, newValue)
        default: return state
    }
}