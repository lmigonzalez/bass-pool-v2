"use client";
import React from "react";
import { FC } from "react";
import { useUser } from "../../lib/UserProvider";
import { useRouter } from "next/navigation";

const Profile: FC = () => {
  const user = useUser();
  const { push } = useRouter();
  return (
    <div className="flex items-center gap-1 relative w-28">
      {!user?.current ? (
        <button onClick={() => push("/sign")}>login</button>
      ) : (
        <div className="absolute flex gap-1">
          <div className="rounded-full w-12 h-12 bg-slate-400"></div>
          <div>
            <p>{user.current?.name}</p>
            <button onClick={() => user.logout()}>logout</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
