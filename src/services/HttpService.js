import store from '../store'
import axios from 'axios'
import auth from './AuthService'

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        hiders: {
            Authorization: auth.getToken()
        }
    })
}