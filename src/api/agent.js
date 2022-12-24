import axios from 'axios';
import localforage from 'localforage';

const agent = axios.create({
    baseURL: 'http://103.226.138.102:4444/v1/',
});

agent.interceptors.request.use(async config => {
    const token = await localforage.getItem('token');
    return ({
        ...config,
        headers: token ? {
            ...config.headers,
            Authorization: `Bearer ${token}`
        } : config.headers,
    });
});

export default agent;
