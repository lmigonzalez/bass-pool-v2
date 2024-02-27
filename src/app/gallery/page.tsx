import React from "react";

export async function getImages() {
  const accessToken = "d66dc43be9042bae9573979bee1d7363";

  const url = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`;

  try {
    const response = await fetch(url, {
      method: "GET", // This is a GET request
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the data for further processing
  } catch (error) {
    console.error("Error fetching data from Instagram Graph API: ", error);
    throw error; // Rethrow or handle the error as needed
  }
}

const page = async () => {
  const data = getImages();
  console.log(data);
  return (
    <main className="my-36 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">Gallery</h1>
      <div className="grid grid-cols-4 gap-5"></div>
    </main>
  );
};

export default page;
