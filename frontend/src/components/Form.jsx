import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { change_user_role } from "../reducers/user";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      const resp = response.data;
      const role = resp.user['role'] || '';

      console.log("Role: ", role);

      // Dispatch the user data to the Redux store
      dispatch(change_user_role(role));


      // Redirect based on the user's role
      if (role === "customer") {
        navigate("/restaurants");
        console.log("Navigating");
      } else if (role === "restaurant") {
        navigate("/restaurant/dashboard");
      } else {
        setError("Invalid user role");
      }
    } catch (err) {
        console.log(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
      <h1 className="text-7xl">Hello!</h1>
      <h3 className="text-3xl font-semibold mt-9">Welcome Back</h3>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Please enter your details.
      </p>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-8">
        <div>
          <label className="text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter password"
          />
        </div>
        <div className="mt-8 justify-between items-center">
          <button className="font-medium text-base text-[#EA7C69]">
            Forgot password?
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={handleLogin}
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-[#EA7C69] text-white text-lg font-bold"
          >
            Sign In
          </button>
          <button className="flex rounded-xl py-3 border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all">
            {/* <svg width="24" height="24" viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            </svg> */}
            Sign in with Google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Don't have an account?</p>
          <button className="text-[#EA7C69] text-base font-medium ml-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
