"use client";
import { useState } from "react";

export default function PrincipalMessageForm({
  mode,
}: {
  mode: "Add" | "Update" | "Delete";
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [slogan, setSlogan] = useState("");

  return (
    <form className="space-y-4 p-6 bg-white rounded shadow mt-4">
      <h2 className="text-xl font-bold">Update Principal Message</h2>

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
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            className="input"
            placeholder="Slogan"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
          />
        </>
      )}

      {mode === "Delete" && (
        <input className="input" placeholder="Enter Name or Role to Delete" />
      )}

      <button className="btn-yellow">{mode}</button>
    </form>
  );
}
