import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPatientData } from "../../api/userApi/profileApi";
const initialState = {
  status: "idle",
  user: {},
  error: "",
};

export const fetchUserData = createAsyncThunk("data/fetchUserData", () => {
  const response = getPatientData();
  return response;
});

const userData = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.status = "Success";
      state.user = action.payload.data;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    });
  },
});

export default userData.reducer;
