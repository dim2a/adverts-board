import * as R from 'ramda'

export const getAdvertById = (state, id) => R.prop(id, state.adverts)

export const receiveAdvert = state => {
    const applySearch = item => {
        
        return R.contains(
            state.advertsPage.search.toLowerCase(),
            R.prop('title', item).toLowerCase() 
        ) || R.contains(
            state.advertsPage.search.toLowerCase(),
            R.prop('description', item).toLowerCase()
        )
    }
    const adverts = R.compose(
        R.filter(applySearch),
        R.map(id => getAdvertById(state, id))
    )(state.advertsPage.ids)
    return adverts
    // const adverts = R.map(id => getAdvertById(state, id), state.advertsPage.ids)
    // return adverts

}

export const getRenderedAdverts = state => state.advertsPage.ids.length