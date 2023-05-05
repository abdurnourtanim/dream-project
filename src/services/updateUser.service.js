import axios from "axios";
import { BASE_URL } from "../helper/url";

// fetch single user by userId
const userUpdate = (userId, updateUserData) => {
  console.log(userId);
  return axios
    .put(`${BASE_URL}/update/${userId}`, updateUserData)
    .then((response) => {
      if (response) {
        console.log(response);
        return Promise.resolve(response);
      }
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export default userUpdate;
