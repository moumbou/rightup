import Image from "next/image";
import React from "react";

export default function ButtonScrollUp({ display }) {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`button-up ${
        display ? "-translate-y-[200%]" : "translate-y-[100%]"
      } transition-transform duration-1000 ease-in-out shadow-xl`}
    >
      <Image
        src="/up.svg"
        alt="up-button-svg"
        width={255}
        height={255}
        className="w-[51px]"
      />
    </button>
  );
}
