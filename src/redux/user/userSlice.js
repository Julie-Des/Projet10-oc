import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserProfile } from './userAPI'; // fonction API

// THUNK : pour aller chercher les infos utilisateur
export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (token, thunkAPI) => {
    try {
      const response = await fetchUserProfile(token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearUserInfo: (state) => {
      state.userInfo = null;
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.userInfo = action.payload.body;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { clearUserInfo } = userSlice.actions;
export default userSlice.reducer;

