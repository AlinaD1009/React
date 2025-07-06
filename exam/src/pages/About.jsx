import React from 'react';
import { Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Про додаток
      </Typography>
      <Typography>
        Цей додаток допомагає вести бібліотеку книг з можливістю додавання, пошуку та фільтрації.
      </Typography>
    </Box>
  );
}
