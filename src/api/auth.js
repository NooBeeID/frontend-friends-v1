import axios from "axios";
import agent from "./agent";

export function login({ email, password }) {
    return agent.post('/auth/login', {
        email, password
    });
}

export function register({ email, password, img_url }) {
    return agent.post('/auth/register', {
        email, password, img_url,
    });
}

export function search({ email }) {
    return agent.post('/auth/search', {
        email,
    });
}

export function profile() {
    return agent.get('/auth/profile');
}
