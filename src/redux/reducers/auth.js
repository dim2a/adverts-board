import {GET_USERS_SUCCESS,
    REGISTRATION_SUCCESS,
    LOGIN_SUCCESS
} from '../actions/actionType'
import * as R from 'ramda'

const initialState = {
    regStatus: null,
    users: {},
    userNames: [],
    nameInDataBase: [],
    userEmails: [],
    registered: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            //const newValue = R.indexBy(R.prop('id'), action.payload)
            //console.log('asdasd', action.payload)
            return {...state, users: action.payload }
        case REGISTRATION_SUCCESS: 
            return {...state, regStatus: action.payload.status}
        case LOGIN_SUCCESS:
            return {...state, registered: action.payload.data.registered}
        default: return state
    }
}