import MockAdapter from 'axios-mock-adapter';

export const isMockEnabled = () => {
  return process.env.REACT_APP_MOCK_ENABLED === 'true';
};
export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance, { delayResponse: 550 });
};
