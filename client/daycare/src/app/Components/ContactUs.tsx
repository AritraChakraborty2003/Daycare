"use client";

import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* 🧾 Left Info - Hidden on Small Screens */}
        <div className="hidden md:flex flex-col justify-center space-y-6 pr-6">
          <h2 className="text-4xl font-bold text-black">
            Get in Touch with Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Daycare, we believe strong communication builds trust. Whether
            you&#39;re exploring admission details, have a question, or simply
            want to learn more — we’re happy to assist you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            📍{" "}
            <span className="font-medium text-black">
              1234 Lane, Greater Noida, IN
            </span>
            <br />
            📞{" "}
            <a
              href="tel:+919876543210"
              className="text-yellow-500 hover:underline"
            >
              +91 98765 43210
            </a>
            <br />
            📧{" "}
            <a
              href="mailto:hello@daycare.com"
              className="text-yellow-500 hover:underline"
            >
              hello@daycare.com
            </a>
          </p>
          <p className="text-sm text-gray-500 italic">
            “Every question is a good question — we’re here to help.”
          </p>
        </div>

        {/* ✉️ Right Form */}
        <div className="block lg:hidden">
          <p className="font-bold text-4xl ">Our Contact</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-[#f9f9f9] mt-[-3vmin] lg:mt-0 p-8 rounded-xl shadow-xl w-full animate-fade-in"
        >
          <div className="grid grid-cols-1 gap-6">
            {["name", "email", "subject"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md bg-white text-sm text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
                <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all capitalize">
                  {field === "name"
                    ? "Your Name"
                    : field === "email"
                    ? "Your Email"
                    : "Subject"}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md bg-white text-sm text-black resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-500 transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
