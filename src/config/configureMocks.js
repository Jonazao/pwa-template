import MockAdapter from 'axios-mock-adapter';
import authAdapter from './mocks/adapters/auth';

export const isMockEnabled = () => {
  return process.env.REACT_APP_MOCK_ENABLED === 'true';
};
export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance, { delayResponse: 550 });
  authAdapter.init(mock);
};
