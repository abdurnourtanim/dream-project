import React from "react";
import { AiFillGithub, AiOutlineUserAdd } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Button from "./Button";
import InputBox from "./InputBox";
import LoginByApp from "./LoginByApp";

const LoginForm = ({ loginState }) => {
  const { form, setForm, error, submitHandler, loading } = loginState;

  return (
    <div>
      <div className="mt-5 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-extrabold dark:text-gray-100">
          Welcome back!
        </h1>
        <div className="w-full flex-1 mt-8">
          {/* login by another app  */}
          <div className="flex flex-col items-center">
            <LoginByApp icon={FcGoogle} text="Login with Google" />
            <LoginByApp
              icon={AiFillGithub}
              text="Login with GitHub"
              className="mt-3"
            />
          </div>

          <div className="my-5 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white dark:bg-gray-800 dark:text-gray-100 transform translate-y-1/2">
              Or login with e-mail
            </div>
          </div>

          <div className="mx-auto max-w-xs">
            <form onSubmit={submitHandler}>
              <InputBox
                required
                type="email"
                placeholder="admin@gmail.com"
                value={form.email}
                onChange={(e) => {
                  setForm({
                    ...form,
                    email: e.target.value,
                  });
                }}
              />
              <InputBox
                required
                type="password"
                placeholder="********"
                className="mt-5"
                value={form.password}
                onChange={(e) => {
                  setForm({
                    ...form,
                    password: e.target.value,
                  });
                }}
              />

              <div className="flex items-center mt-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div className=" ml-auto w-fit">
                  <Link
                    to="/reset"
                    className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 dark:hover:text-gray-200 cursor-pointer dark:text-gray-100"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <Button
                disabled={loading && true}
                type="submit"
                className="mt-5 py-5 w-full"
              >
                <AiOutlineUserAdd className="text-2xl" />
                <span className="ml-3  dark:text-gray-100">
                  {loading ? "Loading..." : "Login"}{" "}
                </span>
              </Button>
              {error && (
                <div className="bg-red-300 text-black py-3 mt-3 text-center rounded">
                  {error}
                </div>
              )}
            </form>
            <div className="mt-5 text-sm font-display font-semibold text-gray-700 text-center dark:text-gray-100">
              Don't have an account ?
              <Link
                className="cursor-pointer text-indigo-600 hover:text-indigo-800 dark:text-gray-100 dark:hover:text-gray-200"
                to="/signup"
              >
                {" Sign up"}
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-600 text-center dark:text-gray-100">
              I agree to abide by templatana's
              <Link
                to="/terms"
                className="border-b border-gray-500 border-dotted "
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

export default LoginForm;
