import * as R from 'ramda'
import {GET_ADVERTS_SUCCESS,
    LOAD_MORE_SUCCESS
} from '../actions/actionType'

const initialState = {
    ids: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ADVERTS_SUCCESS:            
            return R.merge(state,{
                ids: R.pluck('id', action.payload.adverts)
            })
        case LOAD_MORE_SUCCESS:
            const ids = R.pluck('id', action.payload.adverts)
            return R.merge(state, {
                ids: R.concat(state.ids, ids)
            })
        default: return state
    }
}