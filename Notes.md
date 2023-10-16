# Master Guide For Getting Started With Codegen

1. You'll need to get a `schema` for your graphql.
    - Get the Schema URL: `https://users-messages-gql.herokuapp.com/graphql`
    - Install Apollo `rover` this lets you run an `introspect` command that will retrieve the schema.graphql from the supplied URL.
    - you can then run the command `npx rover graph introspect URL_HERE > schema.graphql`
        - this command reads in the schema from the server into a file called `schema.graphql`