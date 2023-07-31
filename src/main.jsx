import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App.jsx'
import './index.css'
import { theme } from './mui/theme.jsx';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: "https://api-eu-west-2.hygraph.com/v2/clkigy2v00abv01uhgtng4r8n/master",
  cache : new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
)
