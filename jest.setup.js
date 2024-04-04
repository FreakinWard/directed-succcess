import '@testing-library/jest-dom';
import 'whatwg-fetch';

const originalEnvVariables = process.env;

beforeAll(() => {
  jest.resetModules();
  process.env = {
    ...originalEnvVariables,
    appName: 'name-value',
    appVersion: 'appVersion-value',
    ciBuildNumber: 'ciBuildNumber-value',
    ciBuildJobUrl: 'ciBuildJobUrl-value',
    STRAPI_API: 'https://fakeapi.com',
  };
});

afterAll(() => {
  process.env = originalEnvVariables;
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
