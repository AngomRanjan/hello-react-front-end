import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import Axios from 'axios';

export const fetchGreetings = createAsyncThunk('greetings', async () => {
  const response = await Axios.get('api/v1/greetings');
  const greeting = response.data.message
  return greeting;
});

 export const greetingsReducer = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.greetings[0] = action.payload;
    },
 
    [fetchGreetings.rejected]: (state,action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
  });

  export default greetingsReducer.reducer;
