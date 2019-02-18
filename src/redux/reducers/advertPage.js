import * as R from 'ramda'
import {GET_ADVERT_BY_ID_SUCCESS} from '../actions/actionType'

const initialState = {
    id: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ADVERT_BY_ID_SUCCESS:
            return R.merge(state, {
                id: R.prop('id',payload)
            })
        default: return state
    }
}