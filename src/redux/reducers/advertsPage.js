import * as R from 'ramda'
import {GET_ADVERTS_SUCCESS,
    LOAD_MORE_SUCCESS,
    SEARCH_ADVERT
} from '../actions/actionType'

const initialState = {
    ids: [],
    search: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ADVERTS_SUCCESS:            
            return R.merge(state,{
                ids: R.pluck('id', action.payload)
            })
        case LOAD_MORE_SUCCESS:
            const ids = R.pluck('id', action.payload.adverts)
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            })
        case SEARCH_ADVERT:
            return R.merge(state, {
                search: action.payload
            })
        default: return state
    }
}