import { queryByAttribute, render } from '@testing-library/react';

import seedAbout from '@/core/msw/seed/seedAbout';

import { AppWrapper as wrapper, mswMock } from '../../core/test.utils';
import Home, { getStaticProps } from '../../pages';

describe('index', () => {
  mswMock();

  const tree = <Home />;

  it('should return expected context given getStaticProps is called', async () => {
    // arrange

    const queryHasExpectedData = (queryKey, expectedData) => {
      expect(
        response.props.dehydratedState.queries.find(x => x.queryKey.includes(queryKey)).state.data
      ).toEqual(expectedData);
    };

    // act
    const response = await getStaticProps();

    // assert
    queryHasExpectedData('about', seedAbout.graphqlResponse);
  });

  it('should render expected page sections', async () => {
    // arrange
    const getById = queryByAttribute.bind(null, 'id');

    // act
    const dom = render(tree, { wrapper });

    // assert
    getById(dom.container, 'about');
    getById(dom.container, 'header');
    getById(dom.container, 'services');
    getById(dom.container, 'testimonials');
    getById(dom.container, 'portfolio');
    getById(dom.container, 'team');
    getById(dom.container, 'contact');
  });
});
