"use client";
import { ID, Models } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../app/AppWrite";
import React from "react";

type contextType = {
  current: Models.User<Models.Preferences> | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
};
const UserContext = createContext<contextType | null>(null);

export function useUser() {
  return useContext(UserContext);
}
export function UserProvider(props: any) {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  async function login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    setUser(await account.get());
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email: string, password: string, name: string) {
    const id = ID.unique();
    await account.create(id, email, password, name);
    await login(email, password);
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}
