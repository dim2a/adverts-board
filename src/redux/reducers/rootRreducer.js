import {combineReducers} from 'redux'
import adverts from './adverts'
import advertsPage from './advertsPage'
import advertPage from './advertPage'
import categories from './categories'

export default combineReducers({
    adverts,
    advertsPage,
    advertPage,
    categories
})