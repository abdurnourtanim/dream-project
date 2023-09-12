import axios from "axios";
import { BASE_URL } from "../helper/url";

// fetch all blogs
const getBlogs = () => {
  return axios
    .get(`${BASE_URL}/blogs`)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// fetch single blog
const fetchSingleBlog = (blogId) => {
  return axios
    .get(`${BASE_URL}/blog/${blogId}`)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

// Create a single blog
const createBlog = (newBlog) => {
  return axios
    .post(`${BASE_URL}/createBlog`, newBlog)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

// Delete single blog - only for blog author
const deleteBlog = (blogId) => {
  return axios
    .delete(`${BASE_URL}/blog/${blogId}`)
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { createBlog, deleteBlog, fetchSingleBlog, getBlogs };
