import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com/comments';

export const getComments = () => axios.get(BASE);
export const getCommentById = (id) => axios.get(`${BASE}/${id}`);

