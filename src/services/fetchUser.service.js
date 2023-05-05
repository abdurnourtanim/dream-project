import axios from "axios";
import { BASE_URL } from "../helper/url";

// fetch single user by userId
const fetchUser = (userId) => {
  return axios
    .get(`${BASE_URL}/user/${userId}`)
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
