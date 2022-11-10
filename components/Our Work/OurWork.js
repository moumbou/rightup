import Image from "next/image";
import React from "react";

export default function OurWork() {
  return (
    <div className="mb-36 relative z-10" id="work">
      <div className="flex gap-6 mb-11 relative">
        <Image src="/arrowup.svg" alt="arrow-up-avg" width={1024} height={1024} className="absolute top-[50%] -translate-x-[55%] -translate-y-[20%] left-0 h-[922px] z-0"  />
        <h2 className="h2-style whitespace-nowrap">Our Work</h2>
        <div className="relative w-[100%]">
          <div className="absolute top-[50%] -translate-y-[50%] left-0 w-[150%] flex flex-col gap-[4px] children:work-section-div">
            <div className="bg-r-blue" />
            <div className="bg-r-yellow" />
            <div className="bg-r-red" />
          </div>
        </div>
      </div>

      <ul className="flex gap-16 w-max mx-auto children:p-style children:uppercase children:relative children:hover:cursor-pointer mb-7">
        <li className="before:li-before">all</li>
        <li>branding</li>
        <li>web</li>
        <li>merch</li>
      </ul>

      <div className="justify-center grid grid-cols-[repeat(3,_minmax(0,_373px))] grid-rows-[repeat(5,_minmax(0,_373px))] gap-5 children:drop-shadow-xl">
        <Image
          src="/our_work/design-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/phone-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/card-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/allsafe-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="row-span-2 h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/menu-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="col-span-2 h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/hulios-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="row-span-2 h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/alfit-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/skikda-itech-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/le-club-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/skikda-economic-forum-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="col-span-2 h-[100%] w-[100%]"
        />
        <Image
          src="/our_work/allsafe-card-pic.png"
          alt="design-pic"
          width={1024}
          height={1024}
          className="h-[100%] w-[100%]"
        />
        <button className="col-span-3 w-max justify-self-end p-style uppercase bg-r-dark px-9 py-6 text-r-white">
          MORE PROJECTS &gt;
        </button>
      </div>
    </div>
  );
}
