import axios from "axios";

// fetch all blogs
const getBlogs = () => {
  return axios
    .get(`http://localhost:4000/api/blogs`)
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
    .get(`http://localhost:4000/api/blog/${blogId}`)
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
    .post("http://localhost:4000/api/createBlog", newBlog)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { createBlog, fetchSingleBlog, getBlogs };
