import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginSvg from "../assets/image/login.svg";
import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";
import { login, signup } from "../services/auth.service";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, email, password, confirmPassword } = form;

    const newUser = {
      name,
      email,
      password,
      confirmPassword,
    };

    await signup(newUser)
      .then(async (res) => {
        console.log(res);
        await login(newUser)
          .then((res) => navigate("/profile"))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setError(err.data.err);
      });
    setLoading(false);
  };

  const signupState = { form, setForm, submitHandler, error, loading };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center">
        <div className="max-w-screen-xl m-0 mt-14  sm:m-20 bg-white dark:bg-gray-800 shadow sm:rounded-lg flex justify-center flex-1">
          {/* form content  */}
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <SignupForm signupState={signupState} />
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

export default Signup;
