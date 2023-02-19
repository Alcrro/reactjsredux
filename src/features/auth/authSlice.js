import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// The initial state value for this slice of state
const initialState = {
  user: null,
  status: "idle",
  error: null,
};

//Create an action
export const login = createAsyncThunk("auth/login", async (user) => {
  if (user.email === "alex.roventa94@gmail.com" && user.password === "123456") {
    return console.log("Login successful");
  } else {
    return console.log("Login failed");
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "idle";
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "idle";
      state.error = action.error.message;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
