import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';

export default async function graphQLRequest<T = unknown>(
  document: RequestDocument,
  variables?: Variables
) {
  const strapiApiGraphQL = `${process.env.STRAPI_API}/graphql`;

  const graphQLClient = new GraphQLClient(strapiApiGraphQL, {
    headers: { 'Content-Type': 'application/json' },
  });

  return graphQLClient.request<T>(document, variables);
}
