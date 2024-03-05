"use client";
import React, { useState, useEffect } from "react";
import { storage, BUCKET_ID } from "../AppWrite";
import Image from "next/image";
interface imageProps {
  $id: string;
  href: string | undefined;
}

const Page = () => {
  const [imagesId, setImagesId] = useState<imageProps[]>([]);
  const [isGrid, setIsGrid] = useState(true);

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

  return (
    <main className="my-28 md:my-36 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Gallery</h1>

      <div className="flex justify-end gap-2 max-w-[800px] m-auto">
        <button
          onClick={() => setIsGrid(true)}
          className={`${isGrid ? "bg-gray-300" : "bg-gray-200"} rounded p-1`}
        >
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
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>
        </button>

        <button
          onClick={() => setIsGrid(false)}
          className={`${!isGrid ? "bg-gray-300" : "bg-gray-200"} rounded p-1`}
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <div
        className={`w-fit grid justify-center gap-1 mt-10 m-auto ${
          isGrid ? "grid-cols-3 " : "grid-cols-1"
        }`}
      >
        {imagesId.map((item, index) => {
          const handleClick = () => {
            const element = document.getElementById(index.toString());
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          };

          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
              id={index.toString()}
            >
              <Image
                src={`${item.href}`}
                alt="pool work image"
                width={isGrid ? 250 : 750}
                height={isGrid ? 250 : 750}
                className="aspect-square hover:shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer"
                onClick={(e) => {
                  handleClick();
                  setIsGrid(!isGrid);
                }}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
