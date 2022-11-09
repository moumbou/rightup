import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="py-6 px-44 bg-r-main text-r-dark overflow-hidden">
      <Head>
        <title>RightUp</title>
        <meta
          name="description"
          content="Rightup is the place where you want to be if you want to boost, optimize or create your brand  whatever it’s core business and mission is!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex content-center justify-between mb-8">
        <p>logo</p>
        <ul className="flex gap-14 font-inter text-lg leading-5 font-bold capitalize">
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

      <div className="grid grid-cols-2 gap-20 mb-12">
        <div className="flex flex-col gap-3 justify-center items-start">
          <h2 className="h2-style">We build, develop & Promote brands</h2>

          <p className="p-style">
            Rightup is the place where you want to be if you want to boost,
            optimize or create your brand whatever it’s core business and
            mission is!
          </p>
          <button className="font-inter text-2xl font-semibold bg-r-dark text-r-white px-5 py-3 capitalize">
            let’s talk
          </button>
        </div>

        <div className="w-[100%]">
          <Image
            height={1024}
            width={1024}
            className="w-[100%]"
            src="/man-sitting.png"
            alt="man-sitting-picture"
          />
        </div>
      </div>

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

      <div>
        <div className="flex gap-6 mb-11">
          <h2 className="h2-style whitespace-nowrap">Our Work</h2>
          <div className="relative w-[100%]">
            <div className="absolute top-0 left-0 w-[150%] flex flex-col gap-[4px] children:work-section-div">
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

        <div className="justify-center grid grid-cols-[repeat(3,_373px)] grid-rows-[repeat(5,_373px)] gap-5">
          <Image src="/our_work/design-pic.png" alt="design-pic" width={1024} height={1024} className="h-[100%] w-[100%]" />
          <Image src="/our_work/phone-pic.png" alt="design-pic" width={1024} height={1024} className="h-[100%] w-[100%]" />
          <Image src="/our_work/card-pic.png" alt="design-pic" width={1024} height={1024} className="h-[100%] w-[100%]" />
          <Image src="/our_work/allsafe-pic.png" alt="design-pic" width={1024} height={1024} className="row-span-2 h-[100%] w-[100%]" />
          <Image src="/our_work/menu-pic.png" alt="design-pic" width={1024} height={1024} className="col-span-2 h-[100%] w-[100%]" />
          <Image src="/our_work/hulios-pic.png" alt="design-pic" width={1024} height={1024} className="row-span-2 h-[100%] w-[100%]" />
          <Image src="/our_work/alfit-pic.png" alt="design-pic" width={1024} height={1024} className="h-[100%] w-[100%]" />
          <Image src="/our_work/skikda-itech-pic.png" alt="design-pic" width={1024} height={1024} className="h-[100%] w-[100%]" />
          <Image src="/our_work/le-club-pic.png" alt="design-pic" width={1024} height={1024} className="h-[100%] w-[100%]" />
          <Image src="/our_work/skikda-economic-forum-pic.png" alt="design-pic" width={1024} height={1024} className="col-span-2 h-[100%] w-[100%]" />
          <Image src="/our_work/allsafe-card-pic.png" alt="design-pic" width={1024} height={1024} className="h-[100%] w-[100%]" />
        </div>
      </div>
    </div>
  );
}
