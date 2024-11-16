"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shortener = () => {
  const [Url, Seturl] = useState("");
  const [Shorturl, Setshorturl] = useState("");
  const [Generated, SetGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: Url,
      shorturl: Shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        SetGenerated(`${process.env.NEXT_PUBLIC_HOST}/${Shorturl}`);
        Seturl("");
        Setshorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(Generated)
      .then(() => setCopied(true))
      .catch((error) => console.error("Copy failed", error));

    // Reset copied status after 2 seconds
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto max-w-lg bg-[#C1D8C3] my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl text-black text-center">
        Generate Your Short URLs
      </h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={Url}
          className="p-4 focus:outline-green-600"
          placeholder="Enter Your URL"
          onChange={(e) => Seturl(e.target.value)}
        />
        <input
          type="text"
          value={Shorturl}
          className="p-4 focus:outline-green-600"
          placeholder="Enter Your Preferred Short URL text"
          onChange={(e) => Setshorturl(e.target.value)}
        />
        <button
          onClick={generate}
          className="bg-[#54C392] rounded-lg shadow-lg p-3 py-1 font-bold text-white"
        >
          Generate URL
        </button>
      </div>

      {Generated && (
        <>
          <div className="mt-4">
          <span className='font-bold text-lg'>Your Link </span>
          <code>
            <Link target="_blank" href={Generated}>
            {Generated}
            </Link> 
          </code>
          </div>
          <div className="mt-2 flex items-center gap-4">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>

            {/* Follow Link Button */}
            <a
              href={Generated}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Follow Link
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Shortener;
