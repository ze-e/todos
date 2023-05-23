import * as React from 'react';
import {  Routes, Route } from "react-router-dom";
import { Container, Typography, Box } from '@mui/material';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm';
import Todos from './Todos';

export default function App() {

  return (
    <Container maxWidth="sm">
      <AccountMenu />
        <Routes>
          <Route exact path="/todo" element={<BasicForm />} />
        </Routes>

      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills Test
        </Typography>
      </Box>
    <Todos />
    </Container>
  );
}
