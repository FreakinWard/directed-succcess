import '@testing-library/jest-dom';
import 'whatwg-fetch';

jest.mock('@vercel/analytics/react', () => ({
  Analytics: jest.fn(),
}));
jest.mock('@vercel/speed-insights/next', () => ({
  SpeedInsights: jest.fn(),
}));
jest.mock('@next/third-parties/google', () => ({
  GoogleAnalytics: jest.fn(),
}));

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
