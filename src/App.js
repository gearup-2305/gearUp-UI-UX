import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import DonationRequest from './components/DonationRequest/DonationRequest';
import Login from './components/Login/Login';
import CommunityBoard from './components/CommunityBoard/CommunityBoard';

import { Routes, Route,  } from 'react-router-dom';


import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import { LOAD_ARTISTS } from './GraphQL/Queries';
import { useState } from 'react';

const client = new ApolloClient({
  uri: 'https://c4fa458b-51b7-48f5-9cc1-ec7ad47e1e6d.mock.pstmn.io/graphql',
  cache: new InMemoryCache(),
});


function App() {
  const [loginAccess, setLoginAccess] = useState(false)
  
  return (
    <ApolloProvider client={client}>
        <Header/>
        {loginAccess && <Login setLoginAccess={setLoginAccess} loginAccess={loginAccess}/>}
        <Routes>
          <Route path="/" element={<HomePage setLoginAccess={setLoginAccess} />}/>
          <Route path="donation-request" element={<DonationRequest/>}/>
          <Route path='community-board' element={<CommunityBoard/>}/>
          {/* <Route path="login-form" element={<Login/>}/> */}
      </Routes>
    </ApolloProvider>
  );
}


export default App;
