import React from "react";
import Image from "next/image";
import { storage, BUCKET_ID } from "../AppWrite";



const AdminImage = () => {
  async function imageView(id: string) {
    try {
      const image = await storage.getFileView(BUCKET_ID || "", id);
      console.log(image);
      return image.href;
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      {" "}
      <Image
        src={`${imageView("as")}`}
        alt="pool work image"
        width={250}
        height={250}
      />
    </div>
  );
};

export default AdminImage;
