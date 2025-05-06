"use client";
import { useState } from "react";

export default function ContactForm({
  mode,
}: {
  mode: "Add" | "Update" | "Delete";
}) {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <form className="space-y-4 p-6 bg-white rounded shadow mt-4">
      <h2 className="text-xl font-bold">{mode} Contact Info</h2>

      {mode !== "Delete" && (
        <>
          <textarea
            className="input"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="input"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </>
      )}

      {mode === "Delete" && (
        <input className="input" placeholder="Enter Email or Phone to Delete" />
      )}

      <button className="btn-yellow">{mode}</button>
    </form>
  );
}
