import React, { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useLoginMutation, useSignUpMutation } from "../../store/api/authApi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthData,
  setAuthData,
  setIdToken,
} from "../../store/Slices/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const authData = useSelector(selectAuthData);
  const [signUp] = useSignUpMutation();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("idToken"));
    if (storedToken) {
      dispatch(setIdToken(storedToken));
      navigate("/");
    }
  }, [dispatch, navigate]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    dispatch(setAuthData({ ...authData, [name]: value }));
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      let res;
      if (!isLogin) {
        res = await signUp({
          email: authData?.email,
          password: authData?.password,
        });
      } else {
        res = await login({
          email: authData?.email,
          password: authData?.password,
        });
      }

      if (res?.data) {
        dispatch(setIdToken(res.data.idToken));
        localStorage.setItem("idToken", res.data.idToken);
        dispatch(setAuthData({ email: "", password: "" }));
        toast.success(
          isLogin
            ? "User logged in successfully!"
            : "User signed up successfully!"
        );
        navigate("/");
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      toast.error("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-8">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold text-center text-blue-400 mb-6">
          {isLogin ? "LOGIN FORM" : "SIGNUP FORM"}
        </h2>

        <form onSubmit={formSubmitHandler}>
          {!isLogin && (
            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={authData.name || ""}
                onChange={inputHandler}
                className="w-full bg-gray-700 text-gray-200 py-2 pl-10 pr-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="mb-4 relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={authData.email || ""}
              onChange={inputHandler}
              className="w-full bg-gray-700 text-gray-200 py-2 pl-10 pr-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={authData.password || ""}
              onChange={inputHandler}
              className="w-full bg-gray-700 text-gray-200 py-2 pl-10 pr-3 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          {isLogin ? (
            <>
              Forgot password? or{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-blue-400 cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
