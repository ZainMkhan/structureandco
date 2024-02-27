import React from "react";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center items-center bg-transparent ">
        <div className="w-[70%] text-white flex justify-between border-b py-5 border-[#c7c8cc3b] items-center">
          {/* Logo */}
          <div className="flex items-center text-2xl gap-2 font-medium">
            <img src="/img/logo2.png" alt="Logo" className="w-[50px]" />
            <h1>Structure & Co.</h1>
          </div>
          {/* Navigation Items */}
          <div className="font-medium">
            <ul className="flex justify-center cursor-pointer items-center gap-5">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>
                <Search />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
