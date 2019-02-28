import {GET_ADVERTS_START, 
    GET_ADVERTS_SUCCESS, 
    GET_ADVERTS_FAILURE,
    LOAD_MORE_START,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_FAILURE,
    GET_ADVERT_BY_ID_START,
    GET_ADVERT_BY_ID_SUCCESS,
    GET_ADVERT_BY_ID_FAILURE,
    SEARCH_ADVERT,
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAILURE,
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    REGISTRATION_START,
    REGISTRATION_SUCCESS,
    REGISTRATION_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './actionType'
import {getAdverts as getAdvertsApi,
    loadMoreAdverts as loadMoreAdvertsApi,
    getAdvertById as getAdvertByIdApi,
    getCategories as getCategoriesApi,
    getUsers as getUsersApi,
    registration as registrationApi,
    login as loginApi
} from '../../api/api'
import {getRenderedAdverts} from '../../helpers/selectors'

export const getAdverts = () => async dispatch => {
    dispatch({type: GET_ADVERTS_START})

    try{
        const ads = await getAdvertsApi()
        dispatch({
            type: GET_ADVERTS_SUCCESS,
            payload: ads
        })
    } catch(err) {
        dispatch({
            type: GET_ADVERTS_FAILURE,
            payload: err,
            error: true
        })
    }    
}

export const loadMoreHandler = () => async (dispatch, getState) => {
    const offset = getRenderedAdverts(getState())
    dispatch({type: LOAD_MORE_START})

    try{
        const ads = await loadMoreAdvertsApi(offset)
        dispatch({
            type: LOAD_MORE_SUCCESS,
            payload: ads
        })
    } catch(err) {
        dispatch({
            type: LOAD_MORE_FAILURE,
            payload: err,
            error: true
        })
    }    
}

export const getAdvertById = id => async dispatch => {
    dispatch({type:GET_ADVERT_BY_ID_START})

    try {
        const advert = await getAdvertByIdApi(id)
        dispatch({
            type: GET_ADVERT_BY_ID_SUCCESS,
            payload: advert
        })

    } catch(err) {
        dispatch({
            type: GET_ADVERT_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const searchAdvert = text => dispatch => {
    dispatch({
        type: SEARCH_ADVERT,
        payload: text
    })
}

export const getCategories = () => async dispatch => {
    dispatch({type: GET_CATEGORIES_START})

    try{
        const categories = await getCategoriesApi()
        dispatch({
            type: GET_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch(err) {
        dispatch({
            type: GET_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }    
}

export const getUsers = () => async dispatch => {
    dispatch({type: GET_USERS_START})

    try{
        const users = await getUsersApi()
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: users
        })
    } catch(err) {
        dispatch({
            type: GET_USERS_FAILURE,
            payload: err,
            error: true
        })
    }    
}

export const  registration = userData => async dispatch => {
    dispatch({type: REGISTRATION_START})

    try{
        const reg = await registrationApi(userData)
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: reg
        })


    } catch(err) {
        dispatch({
            type: REGISTRATION_FAILURE,
            payload: err,
            error: true
        })        
    }
}

export const  login = (loginData) => async dispatch => {
    dispatch({type: LOGIN_START})

    try{
        const reg = await loginApi(loginData)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: reg
        })        
    } catch(err) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: err,
            error: true
        })        
    }
}

// export const getUserName = (userEmail, users) => async dispatch => {
        
//         const reg = await getUserNameSelect(userEmail, users)
        
//         dispatch({
//             type: GET_USER_NAME,
//             payload: reg
//         })        
    
// }