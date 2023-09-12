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
    },
    removeBlog: (state, action) => {
      state.blog.filter((blog, index) => {
        if (blog._id === action.payload) {
          state.blog.splice(index, 1);
        }
        return blog.state;
      });
    },
  },
});

export const { updateBlog, removeBlog } = blogSlice.actions;
export default blogSlice.reducer;
