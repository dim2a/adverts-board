import * as R from 'ramda'
import {GET_ADVERTS_SUCCESS,
    LOAD_MORE_SUCCESS,
    GET_ADVERT_BY_ID_SUCCESS
} from '../actions/actionType'

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ADVERTS_SUCCESS:
        console.log('payload', action.payload)
            const newValues = R.indexBy(R.prop('id'), action.payload)
            return R.merge(state, newValues)
        case LOAD_MORE_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), action.payload.adverts)
            return R.merge(state, moreValues)
        case GET_ADVERT_BY_ID_SUCCESS:
            return R.assoc(action.payload.id, action.payload, state)
        default: return state
    }
}