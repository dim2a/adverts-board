import {GET_USERS_SUCCESS,
    REGISTRATION_SUCCESS,
    LOGIN_SUCCESS
} from '../actions/actionType'

const initialState = {
    regStatus: null,
    users: {},
    userName: null,
    nameInDataBase: [],
    userEmail: '',
    registered: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {...state, users: action.payload }
        case REGISTRATION_SUCCESS: 
            return {...state, regStatus: action.payload.status}
        case LOGIN_SUCCESS:
            return {
                ...state, 
                registered: action.payload.data.registered,
                userEmail: action.payload.data.email,
            }
        default: return state
    }
}