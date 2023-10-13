// import logo from './logo.svg';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ApolloClient, ApolloProvider, HttpLink, from, useQuery} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import Header from './components/Header/Header'
import { LOAD_ARTISTS } from './GraphQL/Queries';
import { useEffect, useState } from 'react';
// import {} from ''

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
      graphqlErrors.map(({message, location, path}) => {
      console.log(`Graphql Error ${message} ${location} ${path}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({uri: "https://c4fa458b-51b7-48f5-9cc1-ec7ad47e1e6d.mock.pstmn.io/graphql"})
])

const client = new ApolloClient({
  link: link, 
  // cache: new InMemoryCache(),
})

function App() {
  // const [artists, setArtists] = useState({})
  const { error, loading, data } = useQuery(LOAD_ARTISTS)

  useEffect(() => {
    console.log(data)
    // if(data) {
    //   setArtists(data.artists)
    // }
  }, [data])

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
