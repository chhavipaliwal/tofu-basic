import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" font-museo bg-[#6f55a5] p-1">
      <div className="bg-white  border border-gray  rounded-xl m-6 bg-gradient-to-t from-[#c4bde8] to-[#f8ecd5]">
        <div className="ml-8 mr-16 mt-10 mb-8 ">
          <nav className="flex justify-between mb-16">
            <h1 className="text-7xl font-rockness text-[#043241]">Tofu</h1>
            <ul className="flex gap-8 items-center">
              <li>Dashboard</li>
              <li>Profile</li>
              <li>Settings</li>
              <li>Contact us</li>
            </ul>
            <ul className="flex gap-5 items-center">
              <Link
                to={"/login"}
                className="border rounded-xl px-5 py-1.5 border-gray-500 hover:bg-[#f6ebd7]"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="border rounded-xl px-5 py-1.5 bg-[#4f4487] text-white hover:bg-[#9087c0]"
              >
                Register
              </Link>
            </ul>
          </nav>
          {/* <div className="flex justify-center">
            <div className="bg-[#4f4487] hover:bg-[#9087c0] p-8 text-white text-2xl font-medium rounded-2xl px-8 py-4 ">
              <h2>Home</h2>
            </div>
          </div> */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h2 className="font-sans text-5xl mb-10 w-[90%]">
                Empowering payroll processors with the world's first AI platform
              </h2>
              <p className="font-rockness text-3xl mb-8 w-[60%]">
                Save time, attract more clients ,boost security with out AI
                dolution.
              </p>
              <button className="hover:bg-[#9087c0] text-white  py-3 mt-3 w-96 rounded-2xl bg-[#4f4487]">
                Get Started for Free →
              </button>
            </div>
            <div className="relative ml-32">
              <img
                src="ladki.webp"
                alt=""
                className="mt-10 h-96  mb-10 rounded-2xl object-right object-cover w-96"
              />
              <div className="absolute top-[-10px] left-[-40px] w-36 h-36 bg-gradient-to-t from-[#faf0dd] to-[#eccd92] opacity-90 "></div>

              <div className="absolute backdrop-blur-lg bottom-[-20px] right-[100px] size-32  bg-gradient-to-b from-[#c7bfe6] to-[#6f55a5] opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
