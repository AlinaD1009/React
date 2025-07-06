import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Profile() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Профіль
      </Typography>
      <Typography>Ви не зареєстровані.</Typography>
    </Box>
  );
}
