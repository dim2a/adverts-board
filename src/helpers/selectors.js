import * as R from 'ramda'

export const getAdvertById = (state, id) => R.prop(id, state.adverts)

export const receiveAdvert = (state, ownProps) => {
    const activeCategoryId = getActiveCategoryId(ownProps)
    const applySearch = item => {
        
        return R.contains(
            state.advertsPage.search.toLowerCase(),
            R.prop('title', item).toLowerCase() 
        ) || R.contains(
            state.advertsPage.search.toLowerCase(),
            R.prop('description', item).toLowerCase()
        )
    }

    const applyCategory = item => R.equals(
        activeCategoryId,
        R.prop('categoryId', item)
    )

    const adverts = R.compose(
        R.filter(applySearch),
        R.when(() => activeCategoryId, R.filter(applyCategory)),
        R.map(id => getAdvertById(state, id))
    )(state.advertsPage.ids)
    return adverts

}

export const getRenderedAdverts = state => state.advertsPage.ids.length

export const getCategories = state => R.values(state.categories)

export const getActiveCategoryId = ownProps => {
    const urlString = R.path(['location','pathname'], ownProps)
    const arrUrlString = urlString.split('/')
    const activeCategoryId = arrUrlString[arrUrlString.length - 1]
    return activeCategoryId
}