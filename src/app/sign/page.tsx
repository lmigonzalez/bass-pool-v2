"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "../AppWrite";

const Sign = () => {
  const initialData = {
    email: "",
    password: "",
  };

  const router = useRouter();

  const [userData, setUserData] = useState(initialData);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await account.createEmailPasswordSession(
      userData.email,
      userData.password
    );
    account.get().then((res) => {
      if (res.$id) router.push("admin");
    });
  }

  return (
    <div>
      <div className="w-[700px] max-w-full m-auto mt-32">
        <form onSubmit={(e) => onSubmit(e)} className="space-y-4 ">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full h-10 rounded px-2 bg-slate-100 outline-blue-200"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="w-full h-10 rounded px-2 bg-slate-100 outline-blue-200"
          />
          <div className="">
            <button className="w-full h-10 rounded bg-blue-300 text-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
