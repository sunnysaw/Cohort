import React, { useState } from "react";
import TwitterImage from "../assets/twitter-image.svg";
import DownloadImage from "../assets/download-image.svg";
import CopyImage from "../assets/copy-image.svg";
import quote from "../services/UserApi.js";

function Profile() {
  const heading = "| Quote of the Day |";
  const [quotes, setQuotes] = useState("kaisi chai bani hai janab 🤪");
  const [author, setAuthor] = useState("Sunny Gupta");
  const fetchData = async () => {
    const response = await quote("quote");
    try {
      if (response) {
        setQuotes(response.content);
        setAuthor(response.author);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const post = async () => {
    try {
      const textToPost = `${quotes} - ${author}`; // Construct the text to post
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        textToPost
      )}`;
      window.open(twitterUrl, "_blank");
    } catch (error) {
      console.error("Failed to open Twitter:", error);
    }
  };

  const download = async () => {};
  const copy = async () => {
    try {
      const textToCopy = `${quotes} - ${author}`;
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully!");
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg opacity-70 relative">
        <h1 className="text-xl font-bold text-center ">{heading}</h1>
        <p className="text-xl font-bold text-center mt-6">{quotes}</p>
        <p className="text-center text-lg font-semibold mt-2">- {author}</p>
        <div className="flex justify-between mt-10">
          <button className="  ml-6 p-2 rounded shadow-lg">
            <img
              src={TwitterImage}
              alt="Twitter"
              className=" w-6"
              onClick={post}
            />
          </button>
          <button className="  ml-6 p-2 rounded shadow-lg">
            <img
              src={DownloadImage}
              alt="Twitter"
              className=" w-6"
              onClick={download}
            />
          </button>
          <button className="  ml-6 p-2 rounded shadow-lg">
            <img
              src={CopyImage}
              alt="Twitter"
              className=" w-6"
              onClick={copy}
            />
          </button>
          <button
            className="mr-6 p-2 bg-black text-white rounded shadow-lg"
            onClick={fetchData}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
