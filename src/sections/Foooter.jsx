import React from "react";

function Foooter() {
  return (
    <>
      <div className=" w-full mt-[100px] pb-10 flex justify-center gap-10">
        <div className="text-black w-[80%] items-center flex justify-between ">
          <div>
            <img src="/img/logo3.png" alt="" className="w-[200px]" />
          </div>
          {/*  */}
          <div>
            <h1 className="font-bold text-lg">Chicago Office</h1>
            <div className="">
              <h2>xxx-xxxx</h2>
              <h2>infosandco.com</h2>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
          </div>
          {/*  */}
          <div>
            <h1 className="font-bold text-lg">NewYork Office</h1>
            <div className="">
              <h2>xxx-xxxx</h2>
              <h2>infosandco.com</h2>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
          </div>
          {/*  */}
          <div>
            <h1 className="font-bold text-lg">London Office</h1>
            <div className="">
              <h2>xxx-xxxx</h2>
              <h2>infosandco.com</h2>
            </div>
            <div>Lorem ipsum dolor sit amet consectetur</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foooter;
