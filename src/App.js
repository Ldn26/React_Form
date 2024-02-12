import React, { useState } from "react";

function App() {
  const [action, SetAction] = useState("Sign Up");
  const [isDesabled, SetDesbled] = useState(true);

  const Signup = () => {
    SetDesbled(true);
    SetAction("Sign Up");
  };
  const Login = () => {
    SetDesbled(false);
    SetAction("Login");
  };

  return (
    <div className="container rounded-xl p-5 my-10 mx-auto w-96 flex justify-center flex-col text-white text-center bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500">
      <h1 className="font-bold text-xl"> {action} </h1>
      <div className="flex items-center  mx-10 mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>

        <input
          type="text"
          placeholder="your name please"
          className="px-2 text-black w-96 rounded-md text-xs p-2 border-0 outline-none mx-2"
        />
      </div>
      {isDesabled && (
        <div className="flex items-center   mx-10 mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="email"
            placeholder="your mail please"
            className="px-2 text-black w-96 rounded-md text-xs p-2 border-0 outline-none mx-2"
          />
        </div>
      )}
      <div className="flex items-center  mx-10 my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>

        <input
          type="password"
          placeholder="your password"
          className="px-2 text-black w-96 rounded-md text-xs p-2 border-0 outline-none mx-2"
        />
      </div>
      <div className="my-10 flex flex-row justify-center items-center ">
        <button
          onClick={Signup}
          className={` mx-2  text-black font-bold py-2 px-4 rounded-full bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ${
            !isDesabled ? "opacity-40" : ""
          } `}
        >
          Sign Up{" "}
        </button>
        <button
          onClick={Login}
          className={` mx-2 text-black font-bold py-2 px-4   rounded-full  bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 ${
            isDesabled ? "opacity-40" : ""
          } `}
        >
          Login{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
