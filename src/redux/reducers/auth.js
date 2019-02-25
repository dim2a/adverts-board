import {GET_USERS_SUCCESS,
    REGISTRATION_SUCCESS
} from '../actions/actionType'
import * as R from 'ramda'

const initialState = {
    regStatus: null,
    users: {},
    userNames: [],
    nameInDataBase: [],
    userEmails: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            //const newValue = R.indexBy(R.prop('id'), action.payload)
            //console.log('asdasd', action.payload)
            return {...state, users: action.payload }
        case REGISTRATION_SUCCESS: 
            return {...state, regStatus: action.payload.status}
        default: return state
    }
}