import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../container/blogSlice";
import userSlice from "../container/userSlice";

const store = configureStore({
  reducer: {
    userReducer: userSlice,
    blogReducer: blogSlice,
  },
});

export default store;
