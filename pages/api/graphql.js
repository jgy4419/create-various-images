
import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
    type Query {
        users: [User!]!
    }
    type User {
        name: String
    }
`;

const resolvers = {
    Query: {
        users(parent, args, context) {
            return [{ name: 'Nextjs' }];
        },
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false,
    },
};

// module.exports = apolloServer.start().then(() => {
//     return apolloServer.createHandler({ path: '/api/graphql' });
// })
export default apolloServer.createHandler({ path: '/api/graphql' });