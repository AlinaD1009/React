import React from 'react';
import { TextField, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/books/booksSlice';


export default function BookFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.books.filter);

  const handleChange = e => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
      <TextField
        label="Автор"
        name="author"
        value={filter.author}
        onChange={handleChange}
        size="small"
      />
      <TextField
        label="Назва"
        name="title"
        value={filter.title}
        onChange={handleChange}
        size="small"
      />
      <TextField
        label="Рік"
        name="year"
        value={filter.year}
        onChange={handleChange}
        size="small"
      />
    </Box>
  );
}
