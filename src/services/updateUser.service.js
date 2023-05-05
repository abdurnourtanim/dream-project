import axios from "axios";
const baseURL = "http://localhost:4000/api";

// fetch single user by userId
const userUpdate = (userId, updateUserData) => {
  console.log(userId);
  return axios
    .put(`${baseURL}/update/${userId}`, updateUserData)
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
