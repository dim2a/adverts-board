import * as R from 'ramda'
import {GET_ADVERTS_SUCCESS,
    LOAD_MORE_SUCCESS,
    GET_ADVERT_BY_ID_SUCCESS
} from '../actions/actionType'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch(type){
        case GET_ADVERTS_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload.adverts)
            return R.merge(state, newValues)
        case LOAD_MORE_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload.adverts)
            return R.merge(state, moreValues)
        case GET_ADVERT_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default: return state
    }
}