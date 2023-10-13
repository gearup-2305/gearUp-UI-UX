// import logo from './logo.svg';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { LOAD_ARTISTS } from './graphQL/Queries';
import { LOAD_ARTISTS } from './graphQL/Queries'

const client = new ApolloClient({
  uri: 'https://c4fa458b-51b7-48f5-9cc1-ec7ad47e1e6d.mock.pstmn.io/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [artists, setArtists] = useState({})

    client
    .query({
      query: LOAD_ARTISTS
    })
    .then((result) => setArtists(result.data.artists));


  return (
    <ApolloProvider client={client}>
      <div>
        <Header/>
      </div>
    </ApolloProvider>
  );
}

export default App;

// componenets
  // Homepage
    // Login component
  // Nav
  // Community Board - acts as container
    // Filter Donation Requests
    // Donation Request Cards
  // Donation Request Form
    // Login component - conditionally render depending on if user is logged in
  // Profile



  // backend questions:
  // donation active: true / false --> backend switches to false when donation request fulfilled or amount met
  // edge case: if donation has 20 dollars needed, what if someone donates 30? do we control the form? do we allow them 
  // to donate more? 
