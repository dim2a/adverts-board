import * as R from 'ramda'

const getAdvertById = (state, id) => R.prop(id, state.adverts)

export const receiveAdvert = state => {
    const adverts = R.map(id => getAdvertById(state, id), state.advertPage.ids)
    return adverts
}

export const getRenderedAdverts = state => state.advertPage.ids.length