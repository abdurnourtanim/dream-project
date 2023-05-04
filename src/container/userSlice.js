import { createSlice } from "@reduxjs/toolkit";

const initailUser = {
  user: {
    name: null,
    username: null,
    email: null,
    userId: null,
    profilePhoto: null,
    coverPhoto: null,
    about: null,
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: initailUser,
  reducers: {
    getUser: (state) => state,
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
