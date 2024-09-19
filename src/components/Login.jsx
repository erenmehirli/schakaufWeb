import React from "react";

const Userlogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <div className="w-full max-w-md p-10">
        <h2 className="text-4xl font-thin font-serif text-center mb-8">
          Login
        </h2>

        <div className="flex flex-col gap-6 py-3">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-400 p-4 rounded focus:outline-none focus:border-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-400 p-4 rounded focus:outline-none focus:border-gray-600"
          />
        </div>

        <div className="mt-8 flex justify-between items-center gap-4">
          <button className="bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition duration-300 ease-in-out">
            Sign Up
          </button>

          <div className="flex flex-col items-center text-sm">
            <a href="#" className="text-gray-500 hover:underline">
              New Customer? Create Account
            </a>
            <a href="#" className="text-gray-500 hover:underline mt-2">
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
