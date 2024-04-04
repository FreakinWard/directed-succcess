import { renderHook } from '@testing-library/react';
import { gql } from 'graphql-request';
import * as GraphQlRequest from 'graphql-request';

import useGraphQl from '@/hooks/useGraphQl';

import { AppWrapper as wrapper } from '../../core/test.utils';

describe('useGraphQl', () => {
  const mockGraphQlRequest = () => {
    const graphQLClientMock = {
      ...jest.requireActual('graphql-request'),
      request: jest.fn().mockResolvedValue(''),
    };

    jest.spyOn(GraphQlRequest, 'GraphQLClient').mockImplementation(() => graphQLClientMock);

    return { graphQLClientMock };
  };

  const queryKey = ['countries'];
  const graphQuery = gql`
    query GetCountriesQuery {
      resourceCountriesv2 {
        values {
          countryCode
          countryCode3C
          inActive
          name
        }
      }
    }
  `;

  it('should call request with expected query', () => {
    // arrange
    const { graphQLClientMock } = mockGraphQlRequest();

    const expectedVariables = undefined;
    const queryConfig = { graphQuery, queryKey };

    // act
    renderHook(() => useGraphQl(queryConfig), { wrapper });

    // assert
    expect(graphQLClientMock.request).toHaveBeenCalled();
    expect(graphQLClientMock.request).toHaveBeenCalledWith(graphQuery, expectedVariables);
  });
});
