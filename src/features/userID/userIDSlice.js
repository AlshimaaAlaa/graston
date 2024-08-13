import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: 0,
  user_email: "",
};

const userIDSlice = createSlice({
  name: "userID",
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.user_id = action.payload;
    },
    setUserEmail: (state, action) => {
      state.user_email = action.payload;
    },
  },
});

export default userIDSlice.reducer;
export const { setUserID, setUserEmail } = userIDSlice.actions;
