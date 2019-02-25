import {combineReducers} from 'redux'
import adverts from './adverts'
import advertsPage from './advertsPage'
import advertPage from './advertPage'
import categories from './categories'
import auth from './auth'

export default combineReducers({
    adverts,
    advertsPage,
    advertPage,
    categories,
    auth
})