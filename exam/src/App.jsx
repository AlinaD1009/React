import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import About from './pages/About';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Моя бібліотека
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Головна
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Додати книгу
          </Button>
          <Button color="inherit" component={Link} to="/about">
            Про додаток
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Профіль
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
