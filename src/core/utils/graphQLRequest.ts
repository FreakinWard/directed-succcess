import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';

export default async function graphQLRequest<T = unknown>(
  document: RequestDocument,
  variables?: Variables
) {
  const strapiApi = process.env.strapiApiGraphql;

  const graphQLClient = new GraphQLClient(strapiApi, {
    headers: { 'Content-Type': 'application/json' },
  });

  return graphQLClient.request<T>(document, variables);
}
