import { renderHook } from '@testing-library/react';

import useGraphQl from '@/hooks/useGraphQl';
import useStrapiCms from '@/hooks/useStrapiCms';

import { AppWrapper as wrapper, mswMock } from '../../core/test.utils';

jest.mock('../../hooks/useGraphQl');

describe('useStrapiCms', () => {
  mswMock();

  it('should call useGraphQl with expected queryConfig', async () => {
    // arrange

    const queryConfig = {
      queryKey: ['query-key-value'],
      graphQuery: 'qraph-query-value',
    };

    const expectedQueryConfig = {
      ...queryConfig,
      staleTime: Infinity,
    };

    // act
    renderHook(() => useStrapiCms(queryConfig), { wrapper });

    // assert
    expect(useGraphQl).toHaveBeenCalledWith(expectedQueryConfig);
  });

  it('should set staleTime to infinity when attempting to pass a different staleTime ', async () => {
    // arrange

    const queryConfig = {
      queryKey: ['query-key-value'],
      graphQuery: 'qraph-query-value',
      staleTime: 1000,
    };

    const expectedQueryConfig = {
      ...queryConfig,
      staleTime: Infinity,
    };

    // act
    renderHook(() => useStrapiCms(queryConfig), { wrapper });

    // assert
    expect(useGraphQl).toHaveBeenCalledWith(expectedQueryConfig);
  });
});
