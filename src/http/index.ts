import axios from 'axios';

const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.REACT_APP_API_KEY!
    }
})
export default $api;