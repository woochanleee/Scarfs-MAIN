import axios from 'axios';
const url = "https://virtserver.swaggerhub.com/LeagueLugas1/scarfs/1.0.0";
const ApiDefault = axios.create({ baseURL : url });
export default ApiDefault;
export const IssuingToken = async () => {
    return await ApiDefault.put('/auth', {
        headers: { Authorization: "Bearer " + localStorage.getItem('refresh_token') }
    })
};