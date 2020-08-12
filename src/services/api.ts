import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oxy-proffy-server.herokuapp.com'
})

export default api;