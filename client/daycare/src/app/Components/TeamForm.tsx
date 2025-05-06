/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";

export default function TeamForm({
  mode,
}: {
  mode: "Add" | "Update" | "Delete";
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [social, setSocial] = useState("");
  const [image, setImage] = useState<File | null>(null);

  return (
    <form className="space-y-4 p-6 bg-white rounded shadow mt-4">
      <h2 className="text-xl font-bold">{mode} Team Member</h2>

      {mode !== "Delete" && (
        <>
          <input
            className="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <input
            className="input"
            placeholder="Social Link"
            value={social}
            onChange={(e) => setSocial(e.target.value)}
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </>
      )}

      {mode === "Delete" && (
        <input className="input" placeholder="Enter Name to Delete" />
      )}

      <button className="btn-yellow">{mode}</button>
    </form>
  );
}
