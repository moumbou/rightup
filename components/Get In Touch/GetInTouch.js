import React from "react";

export default function GetInTouch() {
  return (
    <div className="mb-20">
      <h2 className="h2-style mb-5">Get In Touch</h2>
      <form className="grid grid-cols-2 gap-6 grid-rows-[auto] children:input-form">
        <input
          type="text"
          className="placeholder:first-letter:text-r-red"
          placeholder="*Full name"
        />
        <input type="text" placeholder="Company or organization" />
        <input
          type="text"
          className="placeholder:first-letter:text-r-red"
          placeholder="*Email address"
        />
        <input type="text" placeholder="Phone number" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="How did you hear about us ?" />
        <div className="relative col-span-2 !p-0">
          <textarea
            className="outline-none bg-transparent w-[100%] h-[100%] py-5 pl-7 placeholder:p-style placeholder:text-r-dark p-style"
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
  );
}
