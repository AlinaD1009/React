import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks, selectBooks } from './booksSlice';
import BookCard from '../../components/BookCard';
import BookFilter from '../../components/BookFilter';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function BooksList() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const loading = useSelector(state => state.books.loading);
  const error = useSelector(state => state.books.error);

  useEffect(() => {
    if (books.length === 0) {
      dispatch(loadBooks());
    }
  }, [dispatch, books.length]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Помилка: {error}</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <BookFilter />
      {books.length === 0 ? (
        <Typography>Книги не знайдено</Typography>
      ) : (
        books.map(book => <BookCard key={book.id} book={book} />)
      )}
    </Box>
  );
}
