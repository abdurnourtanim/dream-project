import React from "react";
import { Link } from "react-router-dom";
import addUserIcon from "../assets/image/add_user.png";
import githubIcon from "../assets/image/github.svg";
import googleIcon from "../assets/image/google.svg";
import Button from "./Button";
import InputBox from "./InputBox";
import LoginByApp from "./LoginByApp";

const SignupForm = () => {
  return (
    <div>
      <div className="mt-5 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-extrabold dark:text-gray-100 ">
          Sign up for templatana
        </h1>
        <div className="w-full flex-1 mt-7">
          {/* login by another app  */}
          <div className="flex flex-col items-center">
            <LoginByApp icon={googleIcon} text="Sign Up with Google" />
            <LoginByApp
              icon={githubIcon}
              text="Sign Up with GitHub"
              className="mt-3"
            />
          </div>

          <div className="my-5 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white dark:bg-gray-800  transform translate-y-1/2 dark:text-gray-100">
              Or sign up with e-mail
            </div>
          </div>

          <div className="mx-auto max-w-xs">
            <InputBox type="text" placeholder="Your name" />
            <InputBox
              type="email"
              placeholder="admin@gmail.com"
              className="mt-3"
            />
            <InputBox type="password" placeholder="********" className="mt-3" />

            <div className="mt-2 ml-auto w-fit">
              <Link
                to="/reset"
                className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer dark:text-gray-100s"
              >
                Forgot Password?
              </Link>
            </div>

            <Button className="mt-5">
              <img className="w-8" src={addUserIcon} alt="one" />
              <span className="ml-3"> Sign Up </span>
            </Button>
            <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center dark:text-gray-100">
              Don't have an account ?
              <Link
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                to="/login"
              >
                Login
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-600 text-center dark:text-gray-100">
              I agree to abide by templatana's
              <a href="/" className="border-b border-gray-500 border-dotted">
                Terms of Service
              </a>
              and its
              <a href="/" className="border-b border-gray-500 border-dotted">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
