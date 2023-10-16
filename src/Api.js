import axios from 'axios';

const BASE_URL = "https://users-messages-gql.herokuapp.com/graphql"

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