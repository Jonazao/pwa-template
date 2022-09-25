import axios from 'axios';
import { initializeAxiosMockAdapter, isMockEnabled } from '../config/configureMocks';

const instance = axios.create({
  baseURL: process.env.REACT_APP_GATEWAY_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

if (isMockEnabled()) {
  initializeAxiosMockAdapter(instance);
}

export default instance;
