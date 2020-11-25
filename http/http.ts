import  axios from 'axios';
const http = axios.create({baseURL:'https://api.first.org/data/v1/'})
export default http;