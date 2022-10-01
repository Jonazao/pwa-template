import { configureStore } from '@reduxjs/toolkit';
import { useAuthServer } from '../config/configureTemplate';

import authReducer from '../features/auth/authSlice';

const auth = useAuthServer ? authReducer : null;

// This will throw a runtime error if no other reducer is present
export const store = configureStore({
  reducer: { auth },
});
