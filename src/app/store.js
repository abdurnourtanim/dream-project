import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../container/userSlice";

const store = configureStore({
  reducer: {
    userReducer: userSlice,
  },
});

export default store;
