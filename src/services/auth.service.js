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
        const token = response.data.token;
        localStorage.setItem("x-access-token", token);

        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

// logout user
const logout = () => {
  localStorage.removeItem("x-access-token");
  return { msg: "Logout successfull." };
};

export { signup, login, logout };
