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

      <div className="max-w-[700px] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="grid gap-5 border p-5 rounded-md bg-white shadow-lg"
        >
          <label className="flex flex-col">
            Full Name:
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="h-10 px-2 rounded border"
            />
          </label>
          <label className="flex flex-col">
            Email:
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              className="h-10 px-2 rounded border"
            />
          </label>
          <label className="flex flex-col">
            Phone:
            <input
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="h-10 px-2 rounded border"
            />
          </label>
          <label className="flex flex-col">
            Message:
            <textarea
              placeholder="Message"
              value={values.message}
              onChange={handleChange}
              name="message"
              className="h-10 px-2 rounded border"
            ></textarea>
          </label>

          <div className=" mt-10 md:mt-0">
            <button
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-gray-500" : "bg-sky-600"
              } px-8 py-2 text-white rounded flex items-center justify-center w-full gap-3 hover:bg-black transition-all`}
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
