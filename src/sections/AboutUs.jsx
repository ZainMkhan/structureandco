import React from "react";
import { ArrowUpRight, PlusIcon } from "lucide-react";

function AboutUs() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-[60%] mt-5 ">
          {/* Heading Main */}
          <div className="text-6xl font-bold w-[40%]">
            <h1>We Specialize in these Fields.</h1>
          </div>
          {/* Heading Secondary */}
          <div className="font-medium flex justify-between items-center my-[5%]">
            <h2 className="w-[60%] border-t-2 pt-4">
              The homepage of an architecture website serves as the first
              impression for visitors and should provide a compelling overview
              of the architecture firm and its offerings
            </h2>
            <div className="flex cursor-pointer w-[40%] gap-2 justify-end items-center">
              <h2 className=" border-b-2 border-black">All Services </h2>
              <span>
                <ArrowUpRight />
              </span>
            </div>
          </div>
          {/* Entities */}
          <div className="flex  justify-evenly text-sm items-center">
            {/* 1st */}
            <div className="flex flex-col gap-3 ">
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Architectural Sketches
              </h1>
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Design Concepts
              </h1>
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Site Analysis
              </h1>
            </div>
            {/* 2nd */}
            <div className="flex flex-col gap-3 ">
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Structural Drawings
              </h1>
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Interior Design Plans
              </h1>
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Landscape Concepts
              </h1>
            </div>
            {/* 3rd */}
            <div className="flex flex-col gap-3 ">
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Building Models
              </h1>
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Sustainable Design Strategies
              </h1>
              <h1 className="flex items-center gap-2">
                <span>
                  <PlusIcon className="font-bold w-[15px]" />
                </span>
                Construction Documents
              </h1>
            </div>
          </div>
          {/* Stats */}
          <div className="flex mt-[100px] justify-between items-center">
            {/* 1st */}
            <div className="w-[30%]">
              <h1 className="text-6xl font-medium">266K</h1>
              <h2 className="border-t-2">Square feet</h2>
            </div>
            {/* 2nd */}
            <div className="w-[30%]">
              <h1 className="text-6xl font-medium">102</h1>
              <h2 className="border-t-2">Clients Around the World</h2>
            </div>
            {/* 3rd */}
            <div className="w-[30%]">
              <h1 className="text-6xl font-medium">500+</h1>
              <h2 className="border-t-2">Projects Completed</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
