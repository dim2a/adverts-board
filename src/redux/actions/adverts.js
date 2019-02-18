import {GET_ADVERTS_START, 
    GET_ADVERTS_SUCCESS, 
    GET_ADVERTS_FAILURE
} from './actionType'
import {getAdverts as getAdvertsApi} from '../../api/api'

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