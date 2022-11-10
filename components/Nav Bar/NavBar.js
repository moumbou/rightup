import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar({ display }) {

  return (
    <div
      className={`flex content-center justify-between mb-8 fixed top-0 left-0 w-[100%] py-5 bg-r-white ${
        display ? "shadow-xl" : "shadow-none"
      } z-50 transition-shadow duration-500`}
    >
      <Image
        src="/logo-dark.svg"
        width={1024}
        height={1024}
        alt="logo-dark"
        className="h-[45px] w-max"
      />
      <ul className="flex gap-14 font-inter text-lg leading-5 font-bold capitalize items-center children:hover:cursor-pointer">
        <li>
          <Link href="#services" scroll={false}>
            Services
          </Link>
        </li>
        <li>
          <Link href="#work" scroll={false}>
            work
          </Link>
        </li>
        <li>
          <Link href="#about" scroll={false}>
            about
          </Link>
        </li>
        <li>
          <Link href="#contact" scroll={false}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
