"use client";
import { useState } from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Header />
      <div className="w-[96vw] h-[80vh] flex items-center justify-center bg-gray-100">
        <form className="bg-white p-8 rounded shadow-md w-[95vw] lg:w-[30vw]">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
