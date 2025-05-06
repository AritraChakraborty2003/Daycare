"use client";

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // Show after 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleReject = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <div className="bg-white shadow-lg rounded-md px-6 py-4 max-w-3xl w-full mx-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Text */}
        <div className="text-sm text-gray-700 text-center md:text-left">
          We use cookies to enhance your experience, analyze site traffic, and
          serve personalized content.{" "}
          <span className="underline cursor-pointer hover:text-yellow-500">
            Learn more
          </span>
          .
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleReject}
            className="px-4 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
