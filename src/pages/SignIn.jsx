import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
//import { add, remove } from "../stores/guestSlice";
import { add,remove } from "../stores/slices/useLogedInSlice";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://192.168.1.104:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Registration successful, handle response or redirect
        const data = await response.json()
        console.log(data.authtoken)
        dispatch(add(data.authtoken))
        navigate("/pentamoviemania");
        alert("Login successful");
      } else {
        // Registration failed, handle error
        alert("Registration failed");
        console.error("Login failed");
      }
    } catch (error) {
      // Handle error
      alert("try again later");
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-900 mt-32 md:mt-1">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6 mt-8 sm:mt-16" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <Link
                    to={`/pentaMovieMania/register`}
                    className="font-medium text-blue-600 hover:underline dark:text-purple-500"
                  >
                    Sign up
                  </Link>
                </p>
                <div className="text-center">
                <Link
                    to={`/pentamoviemania`}>
                  <button onClick={()=>dispatch(add("guest"))}
                    type="button" 
                    className="text-blue-600 hover:underline dark:text-purple-500">
                    Continue as Guest
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
