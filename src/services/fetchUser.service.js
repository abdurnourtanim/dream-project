import axios from "axios";
const baseURL = "http://localhost:4000/api";

// fetch single user by userId
const fetchUser = (userId) => {
  return axios
    .get(`${baseURL}/user/${userId}`)
    .then((response) => {
      if (response) {
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export default fetchUser;
