import axios from 'axios';


const BASE_URL = "https://urlshortner-backend-0cum.onrender.com";


export const RegisterUser = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user/register`, payload);
    return response;
};

export const ActivateUser = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user/activate/${payload}`);
    return response;
};



export const LoginUser = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user/login`, payload);
    return response;
};

export const ForgetPassword = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user/forget`, payload);
    return response;
};

export const ResetPassword = async (payload) => {
    const response = await axios.post(`${BASE_URL}/user/reset`, payload);
    return response;
};

export const CreateShortUrl = async (payload,authToken) => {

    const headers = {
        'x-auth-token':authToken,
        'Content-Type':'application/json', 
    };
    const response = await axios.post(`${BASE_URL}/url/createUrl`,payload,{headers});
    return response;
};

export const GetTodayUrl = async (authToken) => {
    const headers = {
        'x-auth-token': authToken,
        'Content-Type': 'application/json', 
    };
    const response = await axios.get(`${BASE_URL}/user/getTodayUrl`,{headers});
    return response;
};
export const GetMonthlyUrl = async (authToken) => {
    const headers = {
        'x-auth-token': authToken,
        'Content-Type': 'application/json', 
    };
    const response = await axios.get(`${BASE_URL}/url/getThisMonth`,{headers});
    return response;
};

export const GetAll = async (authToken) => {
    const headers = {
        'x-auth-token': authToken,
        'Content-Type': 'application/json', 
    };
    const response = await axios.get(`${BASE_URL}/url/getAllUrl`,{headers});
    return response;
};

export const getDashboard = async (authToken) => {
    const headers = {
        'x-auth-token': authToken,
        'Content-Type': 'application/json', 
    };
    const response = await axios.get(`${BASE_URL}/url/dashboard`,{headers});
    return response;
};


export const Redirect = async () => {
    const response = await axios.get(`${BASE_URL}/ShortUrl`);
    return response;
};

export const Logout=()=>{
   localStorage.removeItem('token');
   return
}