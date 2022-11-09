import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About/About";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="pt-6 children:px-44 bg-r-main text-r-dark overflow-hidden">
      <Head>
        <title>RightUp</title>
        <meta
          name="description"
          content="Rightup is the place where you want to be if you want to boost, optimize or create your brand  whatever it’s core business and mission is!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <div className="mb-36">
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

      <About />

      <div className="mb-20">
        <h2 className="h2-style mb-5">Get In Touch</h2>
        <form className="grid grid-cols-2 gap-6 grid-rows-[auto] children:input-form">
          <input type="text" placeholder="Full name*" />
          <input type="text" placeholder="Company or organization" />
          <input type="text" placeholder="Email address*" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Location" />
          <input type="text" placeholder="How did you hear about us ?" />
          <div className="relative col-span-2 !p-0">
            <textarea
              className="outline-none w-[100%] h-[100%] py-5 pl-7 placeholder:p-style placeholder:text-r-dark p-style"
              placeholder="Tell us a bit about your project, timeline, and budget"
              cols="30"
              rows="10"
            ></textarea>
            <button className="absolute -bottom-[1px] right-0 p-style px-12 py-4 bg-r-dark text-r-white uppercase font-bold">
              submit
            </button>
          </div>
        </form>
      </div>

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
          <li>+213 770  97 66 16</li>
          <li>studio.rightup@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}
