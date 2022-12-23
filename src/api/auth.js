import axios from "axios";
import agent from "./agent";

export function login({ email, password }) {
    return agent.post('/auth/login', {
        email, password
    });
}

export function register({ email, password, img_url }) {
    return agent.post('/auth/login', {
        email, password, img_url,
    });
}

export function search({ email }) {
    return axios.post('http://127.0.0.1:4444/v1/auth/search', {
        email,
    });
}

export function profile() {
    return agent.get('/auth/profile');
}
