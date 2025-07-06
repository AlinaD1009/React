import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getPosts = () => axios.get(`${API_URL}/posts`);
export const getComments = () => axios.get(`${API_URL}/comments`);

export const getPostById = (id) => axios.get(`${API_URL}/posts/${id}`);
export const getCommentById = (id) => axios.get(`${API_URL}/comments/${id}`);
