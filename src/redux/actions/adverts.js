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
    GET_CATEGORIES_FAILURE
} from './actionType'
import {getAdverts as getAdvertsApi,
    loadMoreAdverts as loadMoreAdvertsApi,
    getAdvertById as getAdvertByIdApi,
    getCategories as getCategoriesApi
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