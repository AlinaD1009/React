import React from 'react';
import { Card, Typography } from '@mui/material';

export default function BookCard({ book }) {
  return (
    <Card sx={{ p: 2, m: 1 }}>
      <Typography variant="h6">{book.title}</Typography>
      <Typography>Автор(и): {book.authors.join(', ')}</Typography>
      <Typography>Том: {book.volume}</Typography>
      <Typography>Рік: {book.year}</Typography>
      <Typography>Сторінок: {book.pages}</Typography>
    </Card>
  );
}
