import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import {Paper } from '@material-ui/core';
import AppHeader from 'Components/AppHeader';
import AppFooter from 'Components/AppFooter';
import Home from 'Components/Home';




function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        <AppHeader />
        <Home />
        <AppFooter />
      </Paper>
    </Container>
  );
}
export default App;
