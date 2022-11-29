import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = [];

export const fetchGreetings = createAsyncThunk('greetings', async () => {
  const response = await Axios.get('http://localhost:3000/api/v1/greetings');
  const greeting = response.data.message;
  return greeting;
});

const greetingsReducer = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => action.payload,
  },
});

export default greetingsReducer.reducer;
