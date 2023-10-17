import axios from 'axios';

const BASE_URL = "https://users-messages-gql.herokuapp.com/graphql"

//Can still use normal fetch requests to make a request to a graphql endpoint
//ApolloClient is not explicitly needed
async function getUsers() {
    const usersQuery = "query { users { username } }"
    const resp = await fetch(BASE_URL,

        {
            method: "POST",
            body: JSON.stringify({
                query: usersQuery
            }),
            headers:{
                "Content-Type": "application/json"
            }
        }
    )

    return (await resp.json()).data.users
}

export {
    getUsers
}