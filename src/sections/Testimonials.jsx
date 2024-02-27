import { ChevronRight, Minus, Quote } from "lucide-react";
import React from "react";

function Testimonials() {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-[#122620] h-[500px]">
        <div className="w-[70%] flex justify-between mt-[100px]">
          <div className="text-white w-[30%]">
            <h2 className="text-orange-600 text-sm font-medium flex items-center">
              <span>
                <Minus />
              </span>
              TESTIMONIALS
            </h2>
            <h1 className="text-4xl font-bold">
              What They're Talking About The Company
            </h1>
          </div>
          <div className="w-[70%]">
            <div className="flex justify-evenly">
              <div className="w-[40%] space-y-5">
                <div className="bg-white text-black p-5   rounded-xl">
                  <span>
                    <Quote className="rotate-180 text-orange-600 font-medium h-[70px] w-[50px]" />
                  </span>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit vitae eaque fuga voluptatibus sint magni, amet ipsam,
                    iste minima porro blanditiis voluptas, accusamus id
                    molestiae esse officia cum magnam qui.
                  </p>
                </div>
                <div className="flex  gap-3 items-center text-white">
                  <img
                    src="/img/client1.jpg"
                    alt=""
                    className="w-[50px] h-[50px] rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-center ">
                    <h1>Mary John</h1>
                    <h2 className="text-orange-600 text-sm"> Customer</h2>
                  </div>
                </div>
              </div>
              <div className="w-[40%] space-y-5">
                <div className="bg-white text-black p-5   rounded-xl">
                  <span>
                    <Quote className="rotate-180 text-orange-600 font-medium h-[70px] w-[50px]" />
                  </span>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit vitae eaque fuga voluptatibus sint magni, amet ipsam,
                    iste minima porro blanditiis voluptas, accusamus id
                    molestiae esse officia cum magnam qui.
                  </p>
                </div>
                <div className="flex  gap-3 items-center text-white">
                  <img
                    src="/img/client1.jpg"
                    alt=""
                    className="w-[50px] h-[50px] rounded-full object-cover object-top"
                  />
                  <div className="flex flex-col items-center ">
                    <h1>Mary John</h1>
                    <h2 className="text-orange-600 text-sm"> Customer</h2>
                  </div>
                </div>
              </div>
              <div className=" text-white absolute">
                <span className="relative left-[600px] top-[100px]">
                  <ChevronRight className="border-2 rounded-full border-[#c7c8cc36] " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
