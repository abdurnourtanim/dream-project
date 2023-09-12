import { createSlice } from "@reduxjs/toolkit";

const initialBlog = {
  blog: [],
};

export const blogSlice = createSlice({
  name: "blogSlice",
  initialState: initialBlog,
  reducers: {
    updateBlog: (state, action) => {
      state.blog.push(action.payload);
      // state.blog = action.payload;
    },
  },
});

export const { updateBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;
