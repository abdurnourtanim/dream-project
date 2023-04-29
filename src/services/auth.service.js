import axios from "axios";
const baseURL = "http://localhost:4000/api";

// signup
const signup = (newUser) => {
  return axios
    .post(`${baseURL}/signup`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// login
const login = (newUser) => {
  return axios
    .post(`${baseURL}/login`, newUser)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export { signup, login };
