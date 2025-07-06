import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { fetchBooks } from '../../api/booksApi';

export const loadBooks = createAsyncThunk('books/loadBooks', async () => {
  const data = await fetchBooks();
  return data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    loading: false,
    error: null,
    filter: {
      author: '',
      title: '',
      year: '',
    },
  },
  reducers: {
    addBook: (state, action) => {
      state.items.push(action.payload);
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadBooks.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.loading = false;

        // Создаем множество id уже имеющихся книг
        const existingIds = new Set(state.items.map(book => book.id));
        // Фильтруем новые книги, чтобы не добавить дубликаты
        const newBooks = action.payload.filter(book => !existingIds.has(book.id));
        // Объединяем существующие и новые книги
        state.items = [...state.items, ...newBooks];
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const selectItems = state => state.books.items;
const selectFilter = state => state.books.filter;

export const selectBooks = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    return items.filter(book => {
      const authorMatch = filter.author
        ? book.authors.some(a => a.toLowerCase().includes(filter.author.toLowerCase()))
        : true;
      const titleMatch = filter.title
        ? book.title.toLowerCase().includes(filter.title.toLowerCase())
        : true;
      const yearMatch = filter.year ? book.year.toString().includes(filter.year) : true;
      return authorMatch && titleMatch && yearMatch;
    });
  }
);

export const { addBook, setFilter } = booksSlice.actions;

export default booksSlice.reducer;
