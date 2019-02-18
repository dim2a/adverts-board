import {GET_ADVERTS_START, 
    GET_ADVERTS_SUCCESS, 
    GET_ADVERTS_FAILURE,
    LOAD_MORE_START,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_FAILURE
} from './actionType'
import {getAdverts as getAdvertsApi,
    loadMoreAdverts as loadMoreAdvertsApi
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