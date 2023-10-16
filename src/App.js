import './App.css';
import { useEffect, useState } from 'react';
import { getUsers } from './Api.js';
import Users from "./Users"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const client = new ApolloClient({
    uri: 'https://users-messages-gql.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  });

  client
  .query({
    query: gql`
      query getUsers {
        users {
          username
        }
      }
    `,
  })
  .then((result) => console.log("APOLLO RESULT", result));

  useEffect(() => {
    async function fetchUsers() {
      console.log("fetchUsers");
      const users = await getUsers();

      setLoading(false);
      setUsers(users);
    }

    fetchUsers();
  }, [])

  if(isLoading){
    return(
      <p>LOADING...</p>
    )
  }

  return (
    <div className="App">
      <Users users={users} />
    </div>
  );
}

export default App;
