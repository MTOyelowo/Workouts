import { GraphQLClient } from "graphql-request";

const url = "https://puntagorda.stepzen.net/api/lanky-oyster/__graphql";

const apikey = process.env.EXPO_PUBLIC_GRAPHQL_KEY;

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `apikey ${apikey}`,
  },
});

export default client;
