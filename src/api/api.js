import store from './temp'
import * as R from 'ramda'

export const getAdverts = async () => {
    return new Promise((resolve, reject) => {
        resolve(store)
        //reject('errorMessage')
    })
}

export const loadMoreAdverts = async ({offset}) => {
    return new Promise((resolve, reject) => {
        resolve(store)
        //reject('errorMessage')
    })
}

export const getAdvertById = async id => {
    return new Promise((resolve, reject) => {
        const advert = R.find(R.propEq('id', id), store.adverts)
        resolve(advert)
    })
}