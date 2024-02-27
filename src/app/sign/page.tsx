"use client";
import React, { useState } from "react";
import { useUser } from "../../lib/UserProvider";
import { useRouter } from "next/navigation";

const Sign = () => {
  const initialData = {
    email: "",
    password: "",
    name: "",
  };
  const user = useUser();

  const router = useRouter();

  const [userData, setUserData] = useState(initialData);
  const [showLogin, setShowLogin] = useState(true);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function login(email: string, password: string) {
    user?.login(email, password);
    router.push("/admin");
  }
  async function signUp(name: string, email: string, password: string) {
    user?.register(email, password, name);
    router.push("/admin");
  }
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showLogin
      ? login(userData.email, userData.password)
      : signUp(userData.name, userData.email, userData.password);
  }

  return (
    <div>
      <div className="w-[700px] max-w-full m-auto mt-20">
        <div className=" mb-5">
          <p className="text-center text-2xl">
            {showLogin ? "Login" : "Signup"}
          </p>
        </div>
        {showLogin ? (
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
            <div className=" flex justify-end items-center gap-1">
              <p>Don&apos;t have an account?</p>
              <button
                onClick={() => setShowLogin(false)}
                className="text-my_green text-lg font-medium"
              >
                Create Account
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 ">
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
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full h-10 rounded px-2 bg-slate-100 outline-blue-200"
            />
            <div className="">
              <button className="w-full h-10 rounded bg-blue-300 text-lg">
                Register
              </button>
            </div>
            <div className="flex justify-end items-center gap-1">
              <p>Already have an account?</p>
              <button
                onClick={() => setShowLogin(true)}
                className="text-my_green text-lg font-medium"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Sign;
