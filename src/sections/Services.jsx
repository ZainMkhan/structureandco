import React from "react";
import { Box, Minus, Scale3D, Construction, Hammer } from "lucide-react";

function Services() {
  return (
    <>
      {/* Divider */}
      <div
        className="w-full h-[250px] flex justify-center items-center my-14 bg-center font-bold bg-cover"
        style={{ backgroundImage: "url('/img/landing3.jpg')" }}>
        <p className="text-6xl w-full overflow-hidden h-[65px] text-white font-outline">
          We don't just think outside the box – we redefine it. With boundless
          creativity and a passion for innovation, we craft architectural
          solutions that transcend conventions. From conceptualization to
          realization
        </p>
      </div>
      {/* What we Do */}
      <div className="w-full justify-center flex">
        <div className="flex w-[70%] border-b-4 pb-20 ">
          {/* Heading */}
          <div className="w-[40%]">
            <h2 className="flex text-orange-600 text-sm items-center mb-5 font-medium">
              <span>
                <Minus />
              </span>
              WHAT WE DO
            </h2>
            <h1 className="text-4xl font-bold w-[70%] ">
              We provide all the services that you need for your new Project
            </h1>
          </div>
          {/* Services */}
          <div className="w-[60%] flex justify-between flex-wrap gap-14 ">
            {/* 3d Modeling */}
            <div className="w-[45%]">
              <div className="flex  gap-2 items-center font-medium text-xl">
                <span className="">
                  <Box className="w-[100px] h-[100px]" />
                </span>
                <h1>3D Modeling</h1>
              </div>
              <p className="text-sm text-gray-500 w-[80%] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                culpa ratione numquam deleniti similique voluptates quasi fugit,
                facilis illum asperiores odio excepturi sapiente quo officia ex
                ipsum nam eligendi expedita?
              </p>
            </div>
            {/* Construction */}
            <div className="w-[45%]">
              <div className="flex gap-2 items-center font-medium text-xl">
                <span className="">
                  <Construction className="w-[100px] h-[100px]" />
                </span>
                <h1>Construction</h1>
              </div>
              <p className="text-sm text-gray-500 w-[80%] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                culpa ratione numquam deleniti similique voluptates quasi fugit,
                facilis illum asperiores odio excepturi sapiente quo officia ex
                ipsum nam eligendi expedita?
              </p>
            </div>
            {/* Renovation */}
            <div className="w-[45%]">
              <div className="flex gap-2 items-center font-medium text-xl">
                <span className="">
                  <Hammer className="w-[100px] h-[100px]" />
                </span>
                <h1>Renovation</h1>
              </div>
              <p className="text-sm text-gray-500 w-[80%] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                culpa ratione numquam deleniti similique voluptates quasi fugit,
                facilis illum asperiores odio excepturi sapiente quo officia ex
                ipsum nam eligendi expedita?
              </p>
            </div>
            {/* Planning */}
            <div className="w-[45%]">
              <div className="flex gap-2 items-center font-medium text-xl">
                <span className="">
                  <Scale3D className="w-[100px] h-[100px]" />
                </span>
                <h1>Planning</h1>
              </div>
              <p className="text-sm text-gray-500 w-[80%] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                culpa ratione numquam deleniti similique voluptates quasi fugit,
                facilis illum asperiores odio excepturi sapiente quo officia ex
                ipsum nam eligendi expedita?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* More about us */}
      <div className="w-full flex justify-center my-10">
        <div className="w-[70%] flex ">
          {/* About us */}
          <div className="w-[50%] flex flex-col gap-10">
            <div>
              <h1 className="text-2xl font-bold my-5">Excelling at the art</h1>
              <p className="text-sm text-gray-500 w-[90%]">
                As Development continues, Engineers may visit building
                destinations to guarantee that temporary workers persue the
                plan, keep to the timetable, utilize the predifined materials
                and meet work quality models.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold my-5">
                Designing with balance and Care
              </h1>
              <p className="text-sm text-gray-500 w-[90%]">
                As Development continues, Engineers may visit building
                destinations to guarantee that temporary workers persue the
                plan, keep to the timetable, utilize the predifined materials
                and meet work quality models. the timetable, utilize the
                predifined materials and meet work quality models.
              </p>
            </div>
            <div className="">
              <h2 className="text-gray-500 font-medium mb-5">NEED MORE INFO</h2>
              <h1 className="font-medium w-max text-3xl cursor-pointer border-b-4 pb-1 border-gray-300">
                Ask us your questions
              </h1>
            </div>
          </div>
          {/* Picture */}
          <div className="w-[50%]">
            <img src="/img/houses5.jpg" alt="" className="h-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
