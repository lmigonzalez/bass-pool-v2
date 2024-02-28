"use client";
import React from "react";
import Image from "next/image";
import { useFormik } from "formik";

const Page = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: "",
    onSubmit,
  });

  function onSubmit() {}
  return (
    <main className="w-[1380px] max-w-full m-auto my-36 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5">
        <Image
          className="md:w-1/2 rounded-xl shadow"
          src={"/south-florida.webp"}
          alt="south florida image"
          width={1000}
          height={1000}
        />
        <form className="flex flex-col justify-between md:w-1/2">
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="pb-8 border-b-[2px] caret-sky-900 focus:border-transparent focus:border-b-sky-900 outline-none appearance-none"
          />
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="pb-8 border-b-[2px] caret-sky-900 focus:border-transparent focus:border-b-sky-900  outline-none appearance-none"
          />
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="pb-8 border-b-[2px] caret-sky-900 focus:border-transparent focus:border-b-sky-900  outline-none appearance-none"
          />
          <textarea
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            name="message"
            className="pb-8 border-b-[2px] caret-sky-900 focus:border-transparent focus:border-b-sky-900  outline-none appearance-none"
          ></textarea>
          <div className="flex justify-end mt-10 md:mt-0">
            <button className="px-8 py-2 bg-sky-950 text-white  rounded flex items-center w-fit gap-3 hover:bg-sky-950 hover:text-white transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Page;
