import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "./authAPI";

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
	try {
		const response = await loginUser(credentials);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		status: "idle",
		error: null,
	},
	reducers: {
		logout: (state) => {
			state.token = null;
			state.status = "idle";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.token = action.payload.token;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
