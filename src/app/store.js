import { configureStore } from "@reduxjs/toolkit";
import userData from "../features/user/userSlice";
import userIDSlice from "../features/userID/userIDSlice";

const store = configureStore({
  reducer: {
    userID: userIDSlice,
    user: userData,
  },
});

export default store;
