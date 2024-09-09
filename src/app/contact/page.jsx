"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const [successMessage, setSuccessMessage] = useState(""); // State to handle success message

  const { values, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: "", // Add validation schema if needed
    onSubmit,
  });

  async function onSubmit(values, actions) {
    try {
      await axios.post("/api/contact", values);
      setSuccessMessage("Your message has been sent successfully!"); // Set success message
      actions.resetForm(); // Reset form after submission
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  }

  return (
    <main className="my-28 md:my-36 px-6 w-[1380px] max-w-full m-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Us</h1>

      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-5">
        <Image
          className="md:w-1/2 rounded-xl shadow"
          src={"/south-florida.webp"}
          alt="south florida image"
          width={1000}
          height={1000}
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between md:w-1/2 gap-5"
        >
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
            className="pb-8 border-b-[2px] caret-sky-900 focus:border-transparent focus:border-b-sky-900 outline-none appearance-none"
          />
          <input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="pb-8 border-b-[2px] caret-sky-900 focus:border-transparent focus:border-b-sky-900 outline-none appearance-none"
          />
          <textarea
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            name="message"
            className="pb-8 border-b-[2px] caret-sky-900 focus:border-transparent focus:border-b-sky-900 outline-none appearance-none"
          ></textarea>
          <div className="flex justify-end mt-10 md:mt-0">
            <button
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-gray-500" : "bg-sky-950"
              } px-8 py-2 text-white rounded flex items-center w-fit gap-3`}
            >
              Submit
            </button>
          </div>
          {successMessage && (
            <div className="text-green-600 text-center mb-5">
              {successMessage}
            </div> // Display success message
          )}
        </form>
      </div>
    </main>
  );
};

export default Page;
