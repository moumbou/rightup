import Image from "next/image";
import React from "react";

export default function Heading() {
  return (
    <div className="grid grid-cols-2 gap-20 mb-12">
      <div className="flex flex-col gap-3 justify-center items-start">
        <h2 className="h2-style">We build, develop & Promote brands</h2>

        <p className="p-style w-[80%]">
          Rightup is the place where you want to be if you want to boost,
          optimize or create your brand whatever it’s core business and mission
          is!
        </p>
        <button className="font-inter text-2xl font-semibold bg-r-dark text-r-white px-5 py-3 capitalize">
          let’s talk
        </button>
      </div>

      <div className="w-[100%]">
        <Image
          height={1400}
          width={1400}
          className="w-[100%]"
          src="/man-sitting.png"
          alt="man-sitting-picture"
        />
      </div>
    </div>
  );
}
