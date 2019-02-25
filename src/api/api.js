import * as R from 'ramda'
import axios from 'axios'

const baseUrl = 'https://ads-board-98ab4.firebaseio.com'
const apiKey =  'AIzaSyC5uQgA-B_P8TEb519yuUbMHjCnNbUG36c'

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

export const getUsers = async () => {

    const response = await axios.get(`${baseUrl}/users/.json`)
    
    // for(let name in response.data){
    //     userIds.push(name)
    // }
    const getNames = R.pluck('userName')
    console.log('userIds',getNames(response.data))
    console.log('users',response.data)
    //return R.sort(userName, users.data)
    return response.data
}

export const registration = async userData => {
    const regData = {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
    }
    const reg = await axios.post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${apiKey}`, 
        regData)
    if (reg.status === 200) {
        axios.post(`${baseUrl}/users.json`,userData)
    }
    return reg
}

export const login = async data => {
    const loginData = {
        email: data.email,
        password: data.password,
        returnSecureToken: true
    }
    const response = await axios.post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`, 
        loginData)
    // if (reg.status === 200) {
    //     axios.post(`${baseUrl}/users.json`,userData)
    // }
    console.log('login',response)
    return response
}