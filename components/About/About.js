import Image from "next/image";
import React from "react";
import SpacingLetters from "./SpacingLetters";

export default function About() {
  return (
    <div className="!px-0 mb-20">
      <h2 className="h2-style px-44 mb-7">ABOUT</h2>
      <div className="w-[100%] !bg-r-dark relative z-0">
        <div className="grid grid-cols-3 mb-7">
          <div className="w-[100%] h-[17px] bg-r-blue"></div>
          <div className="w-[100%] h-[17px] bg-r-yellow"></div>
          <div className="w-[100%] h-[17px] bg-r-red"></div>
        </div>

        <div className="px-44 !text-r-white pb-36">
          <h4 className="h4-style mb-6">We are Studio Rightup!</h4>
          <p className="p-style">
            an aglerian brand building studio composed of the best, we’ve been
            defiying expectations and competition, world-class quatity work
            crafted by the best.
          </p>
        </div>
      </div>

      <div className="px-44 relative z-10 -translate-y-20">
        <div className="w-[100%] h-[600px] bg-[url('../public/groupe-pic.png')] bg-cover bg-[100%_20%] bg-no-repeat mb-9" />
        <h2 className="h4-style capitalize mb-2">Our Mission</h2>
        <p className="p-style mb-11">
          Build meaningfull experciences for our client and give them work they
          can show with pride.
        </p>

        <h2 className="h4-style capitalize mb-5">Our Values</h2>
        <SpacingLetters />
        <h4 className="h4-style capitalize mb-2">Trusted By</h4>
        <div className="h-28 border-y-[3px] children:h-[100%] border-r-dark grid grid-cols-[repeat(5,_minmax(0,_max-content))] gap-4 items-center p-2 grid-rows-1">
          <Image width={1024} height={1024} src="/trusted_by/alfit.svg" alt="alfit-logo" />
          <Image width={1024} height={1024} src="/trusted_by/allsafe.svg" alt="allsafe-logo" />
          <Image width={1024} height={1024} src="/trusted_by/retro-lenses.svg" alt="retro-lenses-logo" />
          <Image width={1024} height={1024} src="/trusted_by/aya.svg" alt="aya-logo" />
          <Image width={1024} height={1024} src="/trusted_by/skikda-itech.svg" alt="skikda-itech-logo" />
        </div>
      </div>
    </div>
  );
}
