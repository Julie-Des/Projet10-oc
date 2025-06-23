import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./userAPI";
import { updateUserNameAPI } from "./userAPI";
import { logout } from "../auth/authSlice";

// Get user profile
export const getUserProfile = createAsyncThunk("user/getUserProfile", async (token, thunkAPI) => {
	try {
		const response = await fetchUserProfile(token);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

// Update user name
export const updateUserName = createAsyncThunk("user/updateUserName", async ({ token, newUserName }, thunkAPI) => {
	try {
		const response = await updateUserNameAPI(token, newUserName);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const userSlice = createSlice({
	name: "user",
	initialState: {
		userInfo: null,
		status: "idle",
		error: null,
	},
	reducers: {
		clearUserInfo: (state) => {
			state.userInfo = null;
			state.status = "idle";
		},
	},
	extraReducers: (builder) => {
		builder
			// Get user profile
			.addCase(getUserProfile.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(getUserProfile.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.userInfo = action.payload;
			})
			.addCase(getUserProfile.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})

			// Update username
			.addCase(updateUserName.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(updateUserName.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.userInfo.userName = action.payload.userName;
			})
			.addCase(updateUserName.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})

			// Logout
			.addCase(logout, (state) => {
				state.userInfo = null;
				state.status = "idle";
				state.error = null;
			});
	},
});

export const { clearUserInfo } = userSlice.actions;
export default userSlice.reducer;
