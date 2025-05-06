/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

export default function ProgramForm({
  mode,
}: {
  mode: "Add" | "Update" | "Delete";
}) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState<File | null>(null);

  return (
    <form className="space-y-4 p-6 bg-white rounded shadow mt-4">
      <h2 className="text-xl font-bold">{mode} Program</h2>

      {mode !== "Delete" && (
        <>
          <input
            className="input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="input"
            placeholder="Description"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </>
      )}

      {mode === "Delete" && (
        <input className="input" placeholder="Enter Program Title to Delete" />
      )}

      <button className="btn-yellow">{mode}</button>
    </form>
  );
}
