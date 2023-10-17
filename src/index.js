import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://c4fa458b-51b7-48f5-9cc1-ec7ad47e1e6d.mock.pstmn.io/graphql',
    cache: new InMemoryCache(),
  });
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ApolloProvider client={client}>
    <BrowserRouter> 
        <React.StrictMode>
         <App />
        </React.StrictMode>
    </BrowserRouter> 
   </ApolloProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
