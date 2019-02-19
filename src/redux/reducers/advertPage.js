import {GET_ADVERT_BY_ID_SUCCESS} from '../actions/actionType'
import *as R from 'ramda'

const initialState = {
    id: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADVERT_BY_ID_SUCCESS:
            return R.merge(state,{
                id: R.prop('id', action.payload)
            })
        default: return state
    }
}