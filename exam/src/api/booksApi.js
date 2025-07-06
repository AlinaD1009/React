import axios from 'axios';

export const fetchBooks = () => {
  return axios.get('/books.json').then(res => res.data);
};
