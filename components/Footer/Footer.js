import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-r-dark text-r-white py-10 grid grid-cols-[repeat(5,_auto)] grid-rows-1 p-style text-sm font-bold gap-14">
      <div className="flex flex-col justify-between">
        <Image
          src="/logo-white.svg"
          width={1024}
          height={1024}
          alt="logo-white"
          className="h-[45px] w-max"
        />
        <span className="text-[12px]">
          ©2022 Rightup™. All rights reserved.
        </span>
      </div>

      <ul className="flex flex-col gap-2">
        <li>Services</li>
        <li>Work</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Terms & Conditions</li>
      </ul>

      <ul className="capitalize flex flex-col gap-2 justify-center">
        <li>facebook</li>
        <li>twitter</li>
        <li>instagram</li>
      </ul>

      <div className="flex flex-col justify-center">
        <p className="mb-3">Subscribe to the newsletter</p>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Email Adress"
            className="outline-none p-3 bg-r-dark border-2 border-stone-50"
          />
          <button className="px-3 bg-r-white h-[100%]">
            <Image
              src="/right-arrow.svg"
              alt="right-arrow"
              className="h-[24px] w-max"
              width={256}
              height={256}
            />
          </button>
        </div>
      </div>

      <ul className="flex flex-col justify-center gap-2">
        <li>Oued Elwahch , Skikda 21000</li>
        <li>+213 770 97 66 16</li>
        <li>studio.rightup@gmail.com</li>
      </ul>
    </div>
  );
}
