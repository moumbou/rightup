import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex content-center justify-between mb-8">
      <Image
        src="/logo-dark.svg"
        width={1024}
        height={1024}
        alt="logo-dark"
        className="h-[45px] w-max"
      />
      <ul className="flex gap-14 font-inter text-lg leading-5 font-bold capitalize items-center">
        <li>
          <Link href="#" legacyBehavior>
            <a>services</a>
          </Link>
        </li>
        <li>
          <Link href="#">work</Link>
        </li>
        <li>
          <Link href="#">about</Link>
        </li>
        <li>
          <Link href="#">contact</Link>
        </li>
      </ul>
    </div>
  );
}
