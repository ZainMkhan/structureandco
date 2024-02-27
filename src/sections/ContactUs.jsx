import { ArrowUpRight } from "lucide-react";
import React from "react";

function ContactUs() {
  return (
    <>
      <div
        className="h-[500px] flex flex-col items-center pt-[10%] bg-cover bg-center my-5"
        style={{ backgroundImage: "url('/img/structuralart1.jpg')" }}>
        <div className="text-black flex flex-col items-center gap-5">
          <h1 className="text-5xl font-bold">Have a Project in Mind?</h1>
          <h2 className="text-2xl font-medium">Do not hesitate to say Hi!</h2>
          <h3 className="border w-max px-10 rounded-xl font-medium flex items-center gap-3 py-3 border-black">
            Lets Talk{" "}
            <span>
              <ArrowUpRight />
            </span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
