import { Box, FormControl, Paper, Typography } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { ThemeProvider } from 'styled-components';
import { StyledFormTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'));



const CustomBoxTypo = styled('div')(({ theme }) => ({
  color: theme.palette.primary,
  backgroundColor: theme.palette.secondary,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border:"2px solid #AC7088"
}));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={StyledFormTheme}>
      <Box sx={{justifyContent:"center", display:"flex",marginTop:"50px", height:"80vh"}}>
      <Paper elevation={9} sx={{ padding:"20px",marginTop:"10px", maxWidth: 300, backgroundColor: '#EAE3D2', textAlign:"center" }}>
        <FormControl >
          <CustomBoxTypo><Typography variant="h4" color="#AC7088">To Do List</Typography></CustomBoxTypo>
          <App  />
        
        </FormControl>
      </Paper>
      </Box>
     
    </ThemeProvider>
  </React.StrictMode>
);


