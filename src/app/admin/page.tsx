"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { account } from "../AppWrite";
import AdminGallery from "../components/AdminGallery";

const Page = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function checkIfAdmin() {
      try {
        const session = await account.getSession("current");
        if (!session || session.$id === "null") {
          router.push(`/sign`);
        }
        setIsAuth(true);
      } catch (e) {
        setIsAuth(false);
        router.push(`/sign`);
      }
    }

    checkIfAdmin();
  }, [router]);

  if (!isAuth) {
    return <p>No Admin</p>;
  }

  return (
    <main className="w-[1380px] max-w-full m-auto my-36 px-6">
      <AdminGallery />
    </main>
  );
};

export default Page;
