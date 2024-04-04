export type GraphQLResponse = object | [];

export interface SeedGraphQL<T extends GraphQLResponse, U> {
  /**
   * url of the graphql service to be mocked
   */
  url?: string;

  /**
   * data returned from the implementation, like a hook.
   */
  data: U;

  /**
   * response from the graphql service
   */
  graphqlResponse?: T;
}

export interface SeedGraphQLQuery<T extends GraphQLResponse, U> extends SeedGraphQL<T, U> {
  queryName: string;
}
