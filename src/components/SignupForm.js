import React from "react";
import { AiFillGithub, AiOutlineUserAdd } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
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
            <LoginByApp icon={FcGoogle} text="Sign Up with Google" />
            <LoginByApp
              icon={AiFillGithub}
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
            <form>
              <InputBox required type="text" placeholder="Your name" />
              <InputBox
                required
                type="email"
                placeholder="admin@gmail.com"
                className="mt-3"
              />
              <InputBox
                required
                type="password"
                placeholder="********"
                className="mt-3"
              />

              <div className="mt-2 ml-auto w-fit">
                <Link
                  to="/reset"
                  className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 dark:hover:text-gray-200 cursor-pointer dark:text-gray-100"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="flex items-center">
                <input
                  required
                  id="link-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {"I agree with the "}
                  <Link
                    to="/terms"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </Link>
                  .
                </label>
              </div>

              <Button className="mt-5">
                <AiOutlineUserAdd className="text-2xl" />
                <span className="ml-3"> {" Sign Up"} </span>
              </Button>
            </form>
            <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center dark:text-gray-100">
              Don't have an account ?
              <Link
                className="cursor-pointer text-indigo-600 hover:text-indigo-800 dark:text-gray-100 dark:hover:text-gray-200"
                to="/login"
              >
                {" Login"}
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-600 text-center dark:text-gray-100">
              I agree to abide by templatana's
              <Link
                to="/terms"
                className="border-b border-gray-500 border-dotted"
              >
                Terms of Service
              </Link>
              and its
              <Link
                to="/privacy"
                className="border-b border-gray-500 border-dotted"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
