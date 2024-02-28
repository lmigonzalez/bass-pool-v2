"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { account } from "../AppWrite";
import AdminGallery from "../components/AdminGallery";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    async function checkIfAdmin() {
      try {
        const session = await account.getSession("current");
        if (!session || session.$id === "null") {
          router.push(`/sign`);
        }
      } catch (e) {
        router.push(`/sign`);
      }
    }

    checkIfAdmin();
  }, [router]);

  return (
    <main className="px-6">
      <AdminGallery />
    </main>
  );
};

export default Page;
