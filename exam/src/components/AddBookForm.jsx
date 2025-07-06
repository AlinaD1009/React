import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/booksSlice';
import { v4 as uuidv4 } from 'uuid';

const validationSchema = Yup.object({
  authors: Yup.string().required('Обов’язкове поле'),
  title: Yup.string().required('Обов’язкове поле'),
  volume: Yup.number().required('Обов’язкове поле').positive().integer(),
  year: Yup.number().required('Обов’язкове поле').min(1000).max(new Date().getFullYear()),
  pages: Yup.number().required('Обов’язкове поле').positive().integer(),
});

export default function AddBookForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      authors: '',
      title: '',
      volume: '',
      year: '',
      pages: '',
    },
    validationSchema,
    onSubmit: values => {
      const newBook = {
        id: uuidv4(),
        authors: values.authors.split(',').map(a => a.trim()),
        title: values.title,
        volume: Number(values.volume),
        year: Number(values.year),
        pages: Number(values.pages),
      };
      dispatch(addBook(newBook));
      formik.resetForm();
      alert('Книга додана!');
    },
  });

  return (
    <Box
      component="form"
      sx={{ maxWidth: 400, mx: 'auto', mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        label="Автор"
        name="authors"
        value={formik.values.authors}
        onChange={formik.handleChange}
        error={formik.touched.authors && Boolean(formik.errors.authors)}
        helperText={formik.touched.authors && formik.errors.authors}
      />
      <TextField
        label="Назва книги"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />
      <TextField
        label="Том"
        name="volume"
        type="number"
        value={formik.values.volume}
        onChange={formik.handleChange}
        error={formik.touched.volume && Boolean(formik.errors.volume)}
        helperText={formik.touched.volume && formik.errors.volume}
      />
      <TextField
        label="Рік випуску"
        name="year"
        type="number"
        value={formik.values.year}
        onChange={formik.handleChange}
        error={formik.touched.year && Boolean(formik.errors.year)}
        helperText={formik.touched.year && formik.errors.year}
      />
      <TextField
        label="Кількість сторінок"
        name="pages"
        type="number"
        value={formik.values.pages}
        onChange={formik.handleChange}
        error={formik.touched.pages && Boolean(formik.errors.pages)}
        helperText={formik.touched.pages && formik.errors.pages}
      />
      <Button type="submit" variant="contained" color="primary">
        Додати книгу
      </Button>
    </Box>
  );
}