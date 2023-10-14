import './App.css';
import Header from './components/Header/Header';
// import HomePage from './components/HomePage/HomePage';
import DonationRequest from './components/DonationRequest/DonationRequest';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { LOAD_ARTISTS } from './GraphQL/Queries';

const client = new ApolloClient({
  uri: 'https://c4fa458b-51b7-48f5-9cc1-ec7ad47e1e6d.mock.pstmn.io/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: LOAD_ARTISTS
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

function App() {

  return (
    <ApolloProvider client={client}>
        {" "}
        <Header/>
        {/* <HomePage/> */}
        <DonationRequest/>
    </ApolloProvider>
  );
}


export default App;
