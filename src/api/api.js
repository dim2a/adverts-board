import state from './temp'
import * as R from 'ramda'

export const getAdverts = async () => {
    return new Promise((resolve, reject) => {
        resolve(state)
        //reject('errorMessage')
    })
}

export const loadMoreAdverts = async ({offset}) => {
    return new Promise((resolve, reject) => {
        resolve(state)
        //reject('errorMessage')
    })
}

export const getAdvertById = id => {
    return new Promise((resolve, reject) => {
        const advert = R.find(R.propEq('id', id), state.adverts)
        resolve(advert)
    })
}

export const getCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(state.categories)
        //reject('errorMessage')
    })
}