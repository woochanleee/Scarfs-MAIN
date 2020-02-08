import axios from 'axios';
const url = "http://15.164.184.104:8888/";
const ApiDefault = axios.create({ 
    baseURL : url, 
    headers: {
    'Access-Control-Allow-Origin': '*'
} });

export default ApiDefault;

export const IssuingToken = async () => {
    return await ApiDefault.put('/auth', {
        headers: { Authorization: "Bearer " + localStorage.getItem('refresh_token') }
    })
};