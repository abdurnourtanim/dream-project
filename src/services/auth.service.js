import axios from "axios";
const baseURL = process.env.BASE_URL;

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
        const userId = response.data.user._id;
        localStorage.setItem("x-access-token", token);
        localStorage.setItem("userId", userId);

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
  localStorage.removeItem("userId");
  return { msg: "Logout successfull." };
};

export { signup, login, logout };
