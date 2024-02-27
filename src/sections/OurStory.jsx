import { ArrowUpRight } from "lucide-react";
import React from "react";

function OurStory() {
  return (
    <>
      {/* Background */}
      <div
        className="bg-red-500 text-[100px] flex justify-center items-center font-bold text-black font-outline h-[300px] bg-center bg-cover"
        style={{ backgroundImage: "url('/img/landing2.jpg')" }}>
        Carpe Diem
      </div>
      {/* Headings and Details */}
      <div className="w-full flex justify-center my-10">
        <div className="w-[70%] ">
          {/* 1st */}
          <div className="w-full cursor-pointer flex justify-end">
            <h1 className="border-b-2 font-medium border-gray-400">About Us</h1>
            <span>
              <ArrowUpRight className="w-[20px] h-[20px]" />
            </span>
          </div>
          {/* Main Heading */}
          <div className="flex justify-center gap-10">
            <div className="border-b-2 pb-5 border-gray-100">
              <h1 className="font-bold text-6xl">"Discover Our Story"</h1>
            </div>
          </div>
          {/* Secondary Heading */}
          <div className="flex w-full justify-center text-lg ">
            <div className="w-[40%]">
              <h1>Designing the future. today - welcome to our architecture</h1>
            </div>
          </div>
          {/*  */}
          <div className=" my-10">
            {/* Images */}
            <div className="flex flex-col ">
              {/* ------ */}
              <div>
                {/*  */}
                <div className="absolute">
                  <img
                    src="/img/art1.jpg"
                    alt="Art"
                    className="w-[400px]  h-[600px]"
                  />
                </div>
                {/*  */}
                <div className="absolute">
                  <img
                    src="/img/art3.jpg"
                    alt="Art"
                    className="w-[400px] relative top-[30px] left-[50px] h-[600px]"
                  />
                </div>
                {/*  */}
                <div className="absolute">
                  <img
                    src="/img/art2.jpg"
                    alt="Art"
                    className="w-[400px] relative top-[60px] left-[100px] h-[600px]"
                  />
                </div>
              </div>
            </div>
            {/* Stats */}
            <div className="ml-[600px]">
              <div className="flex justify-between mb-10">
                <ul className="flex flex-col gap-2">
                  <li className="border-b-2 w-max">History</li>
                  <li className="w-max text-gray-500">Description</li>
                  <li className="w-max text-gray-500">Reviews</li>
                </ul>
                <div className="w-[80%] space-y-10">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error autem sed tempora blanditiis rerum, laboriosam
                    doloribus! Quibusdam totam a omnis illum molestiae veniam ex
                    aliquam labore quos provident! At, itaque. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. A est quam odit iste
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores nesciunt vitae dolore dolores facilis neque,
                    excepturi cum quod mollitia odio consequuntur quae, fugiat
                    fuga vel dignissimos quia magni iure deleniti! Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Provident
                    repellat quod saepe incidunt repudiandae ipsa atque corporis
                    vitae nisi exercitationem officia at quia sed laudantium
                    earum, illum nostrum fugit non.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Minima quasi saepe quaerat quia amet rem odio fugiat
                    corporis. Numquam odio recusandae vel veniam ut delectus
                    officia et, aliquid neque! Dolor.
                  </p>
                </div>
              </div>
              <div className="space-y-5 font-medium">
                {/*  */}
                <div className="flex items-center pb-2 justify-between border-b-[3px] rounded border-slate-500">
                  <h1>Architecture</h1>
                  <p>100%</p>
                </div>
                {/*  */}
                <div className="flex items-center justify-between ">
                  <h1 className="border-b-[3px] rounded border-slate-500 w-[60%] pb-2">
                    Functional Spaces
                  </h1>
                  <p>60%</p>
                </div>
                {/*  */}
                <div className="flex items-center justify-between ">
                  <h1 className="border-b-[3px] rounded border-slate-500 w-[78%] pb-2">
                    Renovation
                  </h1>
                  <p>78%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
