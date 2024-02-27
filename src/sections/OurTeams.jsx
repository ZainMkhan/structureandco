import React from "react";
import { Minus } from "lucide-react";

function OurTeams() {
  return (
    <>
      <div className="w-full my-[150px] flex justify-center">
        <div className="w-[70%] flex flex-col gap-5 ">
          <div className="flex">
            <div className="w-[50%] flex flex-col gap-5">
              <h1 className="text-orange-600 text-sm items-center font-medium flex">
                <span>
                  <Minus />
                </span>
                OUR PROFESSIONALS
              </h1>
              <h1 className="text-5xl font-bold">Our Team</h1>
              <p className="w-[33%] text-gray-500">
                Creative commercial & reseidential architecture professional
                design team
              </p>
            </div>
            {/* ----------- */}
            <div className="flex gap-5 justify-end">
              {/* cards */}
              <div className="flex flex-col gap-5">
                <img
                  src="/img/team1.jpg"
                  alt="Team"
                  className="w-[300px] h-[300px] object-cover"
                />
                <div className="flex flex-col items-center">
                  <h1 className="font-bold">Olivia Smith</h1>
                  <p className="text-gray-500">Senior Architect</p>
                </div>
              </div>
              {/* cards */}
              <div className="flex flex-col gap-5">
                <img
                  src="/img/team2.jpg"
                  alt="Team"
                  className="w-[300px] h-[300px] object-cover"
                />
                <div className="flex flex-col items-center">
                  <h1 className="font-bold">Sophia Davis</h1>
                  <p className="text-gray-500">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
          {/* -------------- */}
          <div className="flex gap-5 ml-6">
            {/* cards */}
            <div className="flex flex-col gap-5">
              <img
                src="/img/team3.jpeg"
                alt="Team"
                className="w-[300px] h-[300px] object-cover"
              />
              <div className="flex flex-col items-center">
                <h1 className="font-bold">Emma Brown</h1>
                <p className="text-gray-500">Junior Architectural Designer</p>
              </div>
            </div>
            {/* cards */}
            <div className="flex flex-col gap-5">
              <img
                src="/img/team4.jpg"
                alt="Team"
                className="w-[300px] h-[300px] object-cover"
              />
              <div className="flex flex-col items-center">
                <h1 className="font-bold">Ava Wilson</h1>
                <p className="text-gray-500">Design Intern</p>
              </div>
            </div>
            {/* cards */}
            <div className="flex flex-col gap-5">
              <img
                src="/img/team5.jpg"
                alt="Team"
                className="w-[300px] h-[300px] object-cover"
              />
              <div className="flex flex-col items-center">
                <h1 className="font-bold">Mia Taylor</h1>
                <p className="text-gray-500">Architectural Drafter</p>
              </div>
            </div>
            {/* cards */}
            <div className="flex flex-col gap-5">
              <img
                src="/img/team6.jpg"
                alt="Team"
                className="w-[300px] h-[300px] object-cover object-top"
              />
              <div className="flex flex-col items-center">
                <h1 className="font-bold">Isabella Martinez</h1>
                <p className="text-gray-500">Head Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeams;
