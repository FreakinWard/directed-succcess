import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Variables } from 'graphql-request';

import graphQLRequest from '@/core/utils/graphQLRequest';

export interface UseGraphQlProps extends UseQueryOptions {
  queryKey: QueryKey;
  url?: string;
  graphQuery: string;
  enabled?: boolean;
  variables?: Variables;
  select?: (data: unknown) => unknown;
}

export default function useGraphQl<T>({
  queryKey,
  graphQuery,
  enabled = true,
  select,
  variables,
  ...rest
}: UseGraphQlProps) {
  const queryObject = {
    queryKey,
    enabled,
    select,
    queryFn: () => graphQLRequest(graphQuery, variables),
    ...rest,
  } as UseQueryOptions;

  const query = useQuery(queryObject);

  return { ...query, data: query.data as T };
}
