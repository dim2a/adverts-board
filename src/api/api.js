import adverts from './temp'

export const getAdverts = async () => {
    return new Promise((resolve, reject) => {
        resolve(adverts)
        //reject('errorMessage')
    })
}

export const loadMoreAdverts = async ({offset}) => {
    return new Promise((resolve, reject) => {
        resolve(adverts)
        //reject('errorMessage')
    })
}