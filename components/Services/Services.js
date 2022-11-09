import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <>
      <div className="mb-11">
        <h2 className="h2-style">Services</h2>
        <div className="grid grid-cols-[1fr_.5fr] gap-16">
          <div className="flex flex-col items-start justify-center gap-7">
            <h4 className="h4-style">We do a few thing exceptionaly well!</h4>
            <p className="p-style w-[70%]">
              Design your brand , build your platform or crate your mech,
              whatever your goals may be we can provide with the best results.
            </p>
          </div>
          <div className="w-[100%]">
            <Image
              src="/right-rounded.png"
              alt="right-rounded-color-image"
              height={1024}
              width={1024}
              className="w-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-7">
          <div className="w-[100%] h-[17px] bg-r-blue"></div>
          <div>
            <h4 className="h4-style mb-4">
              Branding &<br /> Strategy
            </h4>
            <p className="p-style w-[80%]">
              Design your brand , build your platform or crate your mech,
            </p>
          </div>
          <ul className="ul-style border-l-r-blue">
            <li>BRAND IDENTITY</li>
            <li>MARKETING & STRATEGY</li>
            <li>CREATIVE DIRECTION</li>
            <li>VERBAL INDETITY & MESSAGING</li>
            <li>BRAND AUDIT & EVALUATION</li>
          </ul>
        </div>

        <div className="flex flex-col gap-7">
          <div className="w-[100%] h-[17px] bg-r-yellow"></div>
          <div>
            <h4 className="h4-style mb-4">
              Web &<br /> Interactive
            </h4>
            <p className="p-style w-[80%]">
              Design your brand , build your platform or crate your mech,
            </p>
          </div>
          <ul className="ul-style border-l-r-yellow">
            <li>UI/UX</li>
            <li>FULL STACK DEVELOPMENT</li>
            <li>WORDPRESS</li>
            <li>REACT</li>
            <li>PWAs</li>
          </ul>
        </div>

        <div className="flex flex-col gap-7 mb-48">
          <div className="w-[100%] h-[17px] bg-r-red"></div>
          <div>
            <h4 className="h4-style mb-4">
              Print &<br /> Merch
            </h4>
            <p className="p-style w-[80%]">
              Design your brand , build your platform or crate your mech,
            </p>
          </div>
          <ul className="ul-style border-l-r-red">
            <li>EVENTS COLATERALLS</li>
            <li>PROMOTIONAL SWAG</li>
            <li>PACKAGING DESIGN</li>
            <li>CUSTOM PRINTS</li>
            <li>STATIONERY DESIGN</li>
          </ul>
        </div>
      </div>
    </>
  );
}
