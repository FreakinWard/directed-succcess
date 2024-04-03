import '@testing-library/jest-dom';
import 'whatwg-fetch';

const originalStrapiApi = process.env.STRAPI_API;

beforeAll(() => {
  jest.resetModules();
  process.env.STRAPI_API = 'https://fakeapi.com';
});

afterAll(() => {
  process.env.STRAPI_API = originalStrapiApi;
});

global.console.log = message => {
  throw message;
};

global.console.warn = message => {
  throw message;
};

global.console.error = message => {
  throw message;
};
