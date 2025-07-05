import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => axios.get(BASE);
export const getPostById = (id) => axios.get(`${BASE}/${id}`);
