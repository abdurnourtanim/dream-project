import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginSvg from "../assets/image/login.svg";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import { updateUser } from "../container/userSlice";
import { login } from "../services/auth.service";
import fetchUser from "../services/fetchUser.service";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer.user);

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (route()) {
      navigate("/");
    }
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {
      email: form.email,
      password: form.password,
    };

    await login(user)
      .then((res) => {
        const userId = res.data.user._id;

        fetchUser(userId)
          .then((res) => {
            const user = res.data;
            const { _id, name, email } = user;
            dispatch(updateUser({ ...userState, userId: _id, name, email }));
          })
          .catch((err) => console.log(err));

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError(err.data.err);
      });
    setLoading(false);
  };

  const loginState = {
    form,
    setForm,
    error,
    submitHandler,
    loading,
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center">
        <div className="max-w-screen-xl m-0 mt-16 md:mt-20 sm:m-10 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex justify-center flex-1">
          {/* form content  */}
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            {/* form  */}
            <LoginForm loginState={loginState} />
          </div>
          {/* illustration  */}
          <div className="flex-1 bg-indigo-100 dark:bg-indigo-950 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <img src={loginSvg} alt="loginSvg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
