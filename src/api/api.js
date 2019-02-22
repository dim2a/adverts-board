import * as R from 'ramda'
import axios from 'axios'

const baseUrl = 'https://ads-board-98ab4.firebaseio.com'
//const apiKey =  "AIzaSyC5uQgA-B_P8TEb519yuUbMHjCnNbUG36c"

export const getAdverts = async () => {    

    const adverts = await axios.get(`${baseUrl}/adverts/-LZ9ccPHSAT8Yv9OZps8.json`)
    return adverts.data
}

export const loadMoreAdverts = async ({offset}) => {
    
    const adverts = await axios.get(`${baseUrl}/adverts/-LZ9ccPHSAT8Yv9OZps8.json`)
    return adverts.data
}

export const getAdvertById = async id => {

    const adverts = await axios.get(`${baseUrl}/adverts/-LZ9ccPHSAT8Yv9OZps8.json`)
    
    return new Promise((resolve, reject) => {
        const advert = R.find(R.propEq('id', id), adverts.data)
        resolve(advert)
    })
}

export const getCategories = async () => {

    const categories = await axios.get(`${baseUrl}/categories/-LZ9e1-LQrW6hDpdCWY6.json`)
    return categories.data
}

