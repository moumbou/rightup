import React from "react";
import { useForm } from "react-hook-form";

export default function GetInTouch() {
  const { register, watch } = useForm();

  return (
    <div className="mb-20" id="contact">
      <h2 className="h2-style mb-5 ">Get In Touch</h2>
      <form className="grid grid-cols-2 gap-6 grid-rows-[auto] children:input-form">
        <div className="relative !p-0">
          <input
            type="text"
            {...register("name", {
              required: true,
            })}
            className="outline-none bg-transparent w-[100%] h-[100%] py-5 pl-7"
          />
          {watch("name") ? (
            <></>
          ) : (
            <label className="pointer-events-none absolute top-[50%] left-7 -translate-y-[50%]">
              Full name<span className="text-r-red">*</span>
            </label>
          )}
        </div>

        <input
          type="text"
          {...register("company")}
          placeholder="Company or organization"
        />
        <div className="relative !p-0">
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="outline-none bg-transparent w-[100%] h-[100%] py-5 pl-7"
          />
          {watch("email") ? (
            <></>
          ) : (
            <label className="pointer-events-none absolute top-[50%] left-7 -translate-y-[50%]">
              Email address<span className="text-r-red">*</span>
            </label>
          )}
        </div>
        <input type="text" {...register("phone")} placeholder="Phone number" />
        <input type="text" {...register("location")} placeholder="Location" />
        <input
          type="text"
          {...register("comment")}
          placeholder="How did you hear about us ?"
        />
        <div className="relative col-span-2 !p-0">
          <textarea
            {...register("project")}
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
