import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAvatar from "../assets/image/user_avatar.webp";
import { updateBlog } from "../container/blogSlice";
import { updateUser } from "../container/userSlice";
import convertToBase64 from "../helper/convert";
import { getBlogs } from "../services/blog.service";
import userUpdate from "../services/updateUser.service";
import Button from "./Button";
import InputBox from "./InputBox";

const ProfileUpdateForm = () => {
  const [loading, setLoading] = useState(false);
  const userState = useSelector((state) => state.userReducer.user);
  const { userId, email, name, username, about, profilePhoto, coverPhoto } =
    userState;

  const [file, setFile] = useState();
  const [userDetails, setUserDetails] = useState({
    username: username,
    name: name,
    profilePhoto: profilePhoto,
    about: about,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    setLoading(true);
    const { username, profilePhoto, about, name } = userDetails;

    // for redux-toolkit
    dispatch(updateUser({ ...userState, username, name, profilePhoto, about }));
    // for backend
    userUpdate(userId, {
      username,
      name,
      profilePhoto,
      userAbout: about,
    })
      .then(() => {
        setLoading(false);
        getBlogs().then((res) => {
          dispatch(updateBlog(res.data));
        });
        navigate(`/profile/${userState.userId}`);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

    navigate(`/profile/${username || userId}`);
  };

  const cover =
    coverPhoto ||
    "https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg";
  const avatar = profilePhoto || userAvatar;

  const coverChange = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  const profileChange = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setUserDetails({ ...userDetails, profilePhoto: base64 });
  };

  return (
    <form>
      <div className="bg-white px-0 lg:px-16 mt-10 pt-10 dark:bg-gray-800">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src={file || cover}
                  alt="avatar"
                  className="w-full h-full object-cover rounded absolute shadow"
                />

                {/* 
                 if code not working 
                 <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                  this line added after cover img
                */}

                <label htmlFor="coverImg">
                  <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                    <p className="text-xs text-gray-100">Change Cover Photo</p>
                    <div className="ml-2 text-gray-100">
                      <FaRegEdit />
                    </div>
                  </div>
                  <input
                    hidden
                    onChange={coverChange}
                    type="file"
                    id="coverImg"
                    name="coverImg"
                  />
                </label>
                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center cursor-pointer">
                  <img
                    src={userDetails.profilePhoto || avatar}
                    alt="avatar"
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />

                  {/* 
                    if code not working 
                    <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0">
                    
                    this line added after cover img/
                   */}

                  <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                    <label
                      className="flex flex-col items-center"
                      htmlFor="profileImg"
                    >
                      <FaRegEdit className="text-gray-900" />
                      <p className="text-xs text-gray-900">Edit Picture</p>

                      <input
                        hidden
                        onChange={profileChange}
                        type="file"
                        id="profileImg"
                        name="profileImg"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Username
                </label>
                <InputBox
                  className="dark:text-white"
                  value={userDetails.username || username}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                  placeholder="@example"
                />
              </div>
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="about"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  required
                  className=" h-36 px-8 py-4 rounded-lg font-medium text-black dark:text-white bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-600 placeholder-gray-500  text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-200 focus:bg-white dark:focus:bg-black"
                  placeholder="Let the world know who you are"
                  rows={5}
                  defaultValue={userDetails.about || about}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, about: e.target.value })
                  }
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                  Character Limit: 200
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container  mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4 md:px-10 lg:px-0">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Personal Information
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <IoIosInformationCircleOutline />
              </div>
            </div>
          </div>
          <div className="mx-auto pt-4">
            <div className="container mx-auto">
              <div className="block md:flex items-center">
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-0 md:pr-2">
                  <label
                    htmlFor="FirstName"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    First Name
                  </label>
                  {/* <input
                  type="text"
                  id="FirstName"
                  name="firstName"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder
                /> */}
                  <InputBox
                    className="dark:text-white"
                    value={userDetails.name}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, name: e.target.value })
                    }
                  />
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-0 md:pl-2">
                  <label
                    htmlFor="LastName"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Email
                  </label>
                  <InputBox
                    className="dark:text-white bg-indigo-100 dark:bg-indigo-900"
                    value={email}
                    onChange={(e) => e.target.value}
                    readOnly
                  />
                </div>
              </div>
              <div className="block md:flex items-center">
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-0 md:pr-2">
                  <label
                    htmlFor="Email"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Email
                  </label>
                  <div className="shadow-sm rounded flex">
                    <InputBox className="dark:text-white" />
                  </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-0 md:pl-2">
                  <label
                    htmlFor="StreetAddress"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Street Address
                  </label>
                  <InputBox className="dark:text-white" />
                </div>
              </div>
              <div className="block md:flex items">
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-0 md:pr-2">
                  <label
                    htmlFor="Email"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    City
                  </label>
                  <div className="shadow-sm rounded flex">
                    <InputBox className="dark:text-white" />
                  </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pl-0 md:pl-2">
                  <label
                    htmlFor="State/Province"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    State/Province
                  </label>
                  <InputBox className="dark:text-white" />
                </div>
              </div>
              <div className="block md:flex items-center">
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 pr-0 md:pr-2">
                  <label
                    htmlFor="Country"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    Country
                  </label>
                  <InputBox className="dark:text-white" />
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 ml-0 md:ml-2">
                  <div className="flex items-center pb-2">
                    <label
                      htmlFor="ZIP"
                      className="text-sm font-bold text-gray-800 dark:text-gray-100"
                    >
                      ZIP/Postal Code
                    </label>
                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                      <IoIosInformationCircleOutline />
                    </div>
                  </div>
                  <InputBox className="dark:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto w-11/12 xl:w-full">
          <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
            <Button className="text-indigo-700 px-5 py-2 bg-white border  border-indigo-700 dark:border-indigo-100 dark:bg-gray-800 dark:text-white dark:hover:bg-indigo-700 dark:hover:border-gray-900 hover:text-white ">
              Cancle
            </Button>
            <Button onClick={submitHandler} className="px-5 py-2 ml-2">
              {loading ? "Saving.." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
