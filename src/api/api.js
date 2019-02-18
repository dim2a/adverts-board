import adverts from './temp'

export const getAdverts = async () => {
    return new Promise((resolve, reject) => {
        resolve(adverts)
        //reject('errorMessage')
    })
}