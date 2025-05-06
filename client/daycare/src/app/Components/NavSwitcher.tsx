"use client";
import { useState } from "react";
import clsx from "clsx";

const options = ["Add", "Update", "Delete"];

export default function NavSwitcher() {
  const [selected, setSelected] = useState("Add");

  return (
    <div className="flex space-x-8  mb-6 transition-all duration-300  px-24">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setSelected(option)}
          className={clsx(
            "px-4 py-2 rounded border transition-all duration-300",
            selected === option
              ? "bg-black text-yellow-400 "
              : "bg-white text-black border-gray-300"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
