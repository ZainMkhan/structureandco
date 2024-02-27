import React from "react";
import Navbar from "./Navbar";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronDown,
} from "lucide-react";

function Landing() {
  return (
    <div
      className="bg-cover h-screen w-full text-white"
      style={{ backgroundImage: "url('/img/background.png')" }}>
      <Navbar />
      <div className="w-full flex justify-center">
        <div className="flex justify-between items-center w-[80%] mt-[150px] ">
          {/* Heading */}
          <div className="text-5xl flex flex-col items-center w-[40%] font-medium">
            <div>
              <h1>Creating Reality</h1>
              <h2>Building Your Vision</h2>
              <p className="text-lg w-[80%] mt-10 font-normal">
                architect is a person who plans, designs, and oversees the
                construction of buildings. To practice architecture means to
                provide services in connection
              </p>
            </div>
            {/* Icons */}
            <div className=" absolute left-[95%] top-[65%] flex flex-col gap-5 cursor-pointer">
              <span className="bg-[#c7c8cc36] rounded-full p-1">
                <Facebook />
              </span>
              <span className="bg-[#c7c8cc36] rounded-full p-1">
                <Instagram />
              </span>
              <span className="bg-[#c7c8cc36] rounded-full p-1">
                <Youtube />
              </span>
              <span className="bg-[#c7c8cc36] rounded-full p-1">
                <Twitter />
              </span>
            </div>
          </div>
          {/* Image */}
          <div className="w-[900px]">
            <img src="/img/landing3.jpg" alt="Landing Image" className="" />
          </div>
        </div>
        <span className="absolute top-[94%] border rounded-full p-1 flex items-center justify-center">
          <ChevronDown />
        </span>
      </div>
    </div>
  );
}

export default Landing;
