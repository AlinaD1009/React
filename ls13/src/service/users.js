import axios from 'axios';
const BASE = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = () => axios.get(BASE);
export const getUserById = (id) => axios.get(`${BASE}/${id}`);
