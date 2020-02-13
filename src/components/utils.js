import axios from 'axios';
const url = "http://54.180.174.253:8888/";
const ApiDefault = axios.create({ baseURL : url });

export default ApiDefault;