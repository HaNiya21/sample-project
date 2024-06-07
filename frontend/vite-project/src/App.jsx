import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import ListingPage from './pages/Listing';
import DetailPage from './pages/Detail';

// Create an Apollo Client
const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_ENDPOINT', // Replace this with your GraphQL endpoint
  cache: new InMemoryCache()
});

// Define the GraphQL query to fetch client data
const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      name
      age
    }
  }
`;

// App component
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/detail/:clientId" element={<DetailPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
