import React, { Cpmponent, Fragment }from 'react';
import logo from './../../logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppHeader from 'Components/AppHeader';
import AppFooter from 'Components/AppFooter';



function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Box>
      <Paper>
        <AppHeader />
        <Typography variant="h4" component="h1" gutterBottom>
         
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <AppFooter />
      </Paper>
      </Box>
    </Container>
  );
}
export default App;
