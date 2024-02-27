"use client";
import React, { useState, useEffect } from "react";
import { storage, BUCKET_ID } from "../AppWrite";
import { ID } from "appwrite";
import Image from "next/image";
import { useUser } from "@/lib/UserProvider";
import { useRouter } from "next/navigation";

interface imageProps {
  $id: string;
  href: string | undefined;
}
const Page = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const user = useUser();
  const [imagesId, setImagesId] = useState<imageProps[]>([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    try {
      const images = await storage.listFiles(BUCKET_ID || "");

      const ids = images.files.map((item) => {
        const id = item.$id; // Assuming item has $id property
        const href = imageView(id);
        return { $id: id, href: href };
      });

      setImagesId(ids);
    } catch (error) {
      console.log(error);
    }
  }

  function imageView(id: string) {
    try {
      const image = storage.getFileView(BUCKET_ID || "", id);
      console.log(image);
      return image.href;
    } catch (e) {
      console.log(e);
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  async function submitImage() {
    try {
      if (selectedFile) {
        await storage.createFile(BUCKET_ID || "", ID.unique(), selectedFile);
        getImages();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteImage(id: string) {
    try {
      const deleted = await storage.deleteFile(BUCKET_ID || "", id);
      console.log(deleted);
      getImages();
    } catch (e) {
      console.log(e);
    }
  }

  const { push } = useRouter();
  if (user) console.log("first");
  if (!(user && user.current)) {
    push("/sign");
    return (
      <div className="fixed w-full h-full flex justify-center items-center bg-black opacity-20">
        ...loading
      </div>
    );
  }

  return (
    <main className="my-36 px-6">
      <h1 className="text-3xl font-bold mb-10">Gallery Admin</h1>

      <div className="flex justify-end gap-5">
        <div className="relative w-1/2">
          <input
            onChange={handleFileChange}
            className="rounded-sm px-4 h-10 w-full mb-4 opacity-0 absolute"
            type="file"
            placeholder="product name ..."
          />
          <div className="bg-white rounded-sm px-4 h-10 w-full flex items-center justify-between border border-gray-300">
            <span className="text-gray-500">Choose file</span>
            {selectedFile !== null ? selectedFile.name : "No file chosen"}
            <button className="bg-gray-300 text-gray-700 rounded-sm px-2 py-1">
              Browse
            </button>
          </div>
        </div>
        <div
          onClick={submitImage}
          className="h-10 px-6 flex justify-center items-center text-white bg-sky-600 hover:bg-sky-800 transition-all rounded cursor-pointer"
        >
          Submit
        </div>
      </div>

      <div className="max-w-[800px] grid grid-cols-3 justify-center gap-1 mt-16 m-auto">
        {imagesId.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center h-[300px] gap-1"
            >
              <Image
                src={`${item.href}`}
                alt="pool work image"
                width={250}
                height={250}
                className="aspect-square"
              />
              <div className="p-1 rounded-full bg-red-500 text-white mt-auto flex justify-end items-center">
                <button onClick={() => deleteImage(item.$id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
