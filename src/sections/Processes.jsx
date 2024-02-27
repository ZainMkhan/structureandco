import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  Orbit,
  Component,
  Container,
  Landmark,
} from "lucide-react";

function Processes() {
  return (
    <>
      <div className="w-full my-[50px] ">
        {/* Images */}
        <div className="flex  w-full justify-between">
          <div className="absolute left-5 cursor-pointer">
            <span className="relative bg-[#c7c8ccfe] rounded-full p-1 top-[200px] flex ">
              <ArrowLeft />
            </span>
          </div>
          <img src="/img/landing4.jpg" alt="" className="w-[33%] h-[400px]" />
          <img src="/img/houses4.jpg" alt="" className="w-[33%] h-[400px]" />
          <img src="/img/house3.jpg" alt="" className="w-[33%] h-[400px]" />
          <div className="absolute right-5">
            <span className="relative bg-[#c7c8ccfe] cursor-pointer rounded-full p-1 top-[200px] flex ">
              <ArrowRight />
            </span>
          </div>
        </div>
        {/* Process Showdown */}
        <div className="w-full flex flex-col items-center my-20">
          {/* 1st Bar */}
          <div className="flex justify-between  w-[60%]">
            <div className="w-[58%] absolute z-0 flex">
              <div className="w-[100%]  ">
                <h1 className=" border-b-2 border-black text-white">.</h1>
              </div>
            </div>
            {/* -- */}
            <div className="bg-white z-10">
              <span>
                <Orbit className="w-[60px] h-[60px]" />
              </span>
              <span className="bg-black text-white text-sm px-2 py-1 rounded-full relative top-[-100%] left-[50px]">
                1
              </span>
            </div>
            {/* -- */}
            <div className="bg-white z-10">
              <span>
                <Component className="w-[60px] h-[60px]" />
              </span>
              <span className="bg-black text-white text-sm px-2 py-1 rounded-full relative top-[-100%] left-[50px]">
                2
              </span>
            </div>
            {/* -- */}
            <div className="bg-white z-10">
              <span>
                <Container className="w-[60px] h-[60px]" />
              </span>
              <span className="bg-black text-white text-sm px-2 py-1 rounded-full relative top-[-100%] left-[50px]">
                3
              </span>
            </div>
            {/* -- */}
            <div className="bg-white z-10">
              <span>
                <Landmark className="w-[60px] h-[60px]" />
              </span>
              <span className="bg-black text-white text-sm px-2 py-1 rounded-full relative top-[-100%] left-[50px]">
                4
              </span>
            </div>
          </div>
          {/* 2nd bar */}
          <div className="flex justify-evenly">
            {/*  */}
            <div className="w-[20%]">
              <h1 className="font-medium my-5">
                Consulation and Initial Meeting
              </h1>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                suscipit quas tempore, sunt nesciunt adipisci. Doloribus
                recusandae omnis alias at non, consequatur sint necessitatibus
                voluptate ex ipsum ipsa quaerat error.
              </p>
            </div>
            {/*  */}
            <div className="w-[20%]">
              <h1 className="font-medium my-5">Concept Design</h1>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                suscipit quas tempore, sunt nesciunt adipisci. Doloribus
                recusandae omnis alias at non, consequatur sint necessitatibus
                voluptate ex ipsum ipsa quaerat error.
              </p>
            </div>
            {/*  */}
            <div className="w-[20%]">
              <h1 className="font-medium my-5">Design Development</h1>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                suscipit quas tempore, sunt nesciunt adipisci. Doloribus
                recusandae omnis alias at non, consequatur sint necessitatibus
                voluptate ex ipsum ipsa quaerat error.
              </p>
            </div>
            {/*  */}
            <div className="w-[20%]">
              <h1 className="font-medium my-5">Permitting and Approvals</h1>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                suscipit quas tempore, sunt nesciunt adipisci. Doloribus
                recusandae omnis alias at non, consequatur sint necessitatibus
                voluptate ex ipsum ipsa quaerat error.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Processes;
