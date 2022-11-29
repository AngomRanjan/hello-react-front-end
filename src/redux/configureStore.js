import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings/greetings';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
