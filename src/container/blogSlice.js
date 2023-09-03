import { createSlice } from "@reduxjs/toolkit";

const initialBlog = {
  blog: [],
};

export const blogSlice = createSlice({
  name: "userSlice",
  initialState: initialBlog,
  reducers: {
    updateBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export const { updateBlog } = blogSlice.actions;
export default blogSlice.reducer;
