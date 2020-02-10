import axios from 'axios';
const url = "http://54.180.174.253:8888/";
const ApiDefault = axios.create({ baseURL : url });

export default ApiDefault;

export const IssuingToken = async () => {
    try {
        const putAuth = await ApiDefault.put('/auth', undefined, {
            headers: { Authorization: localStorage.getItem('refresh_token') }
        })
        console.log(putAuth);
        localStorage.setItem('access_token', putAuth.data.accessToken);
        localStorage.setItem('refresh_token', putAuth.data.refreshToken);
        return 'success';
    } catch (e) {
        console.log(e);
        throw new Error(e.response.status);
    }
};