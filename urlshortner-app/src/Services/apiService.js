import axios from 'axios';


const BASE_URL = "https://urlshortner-backend-0cum.onrender.com";


export const RegisterUser = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user/register`, payload);
    return response;
};