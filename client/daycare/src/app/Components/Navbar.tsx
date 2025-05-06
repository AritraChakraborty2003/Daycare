"use client";

import React, { useState } from "react";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header className="bg-yellow-400 text-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">Daycare</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-white">
              About
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-[#f5f5f5] text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
              <Link
                href="/mission"
                className="block px-4 py-2 hover:bg-yellow-200"
              >
                Mission and Vision
              </Link>
              <Link
                href="/principalmessage"
                className="block px-4 py-2 hover:bg-yellow-200"
              >
                Principal&lsquo;s Message
              </Link>
            </div>
          </div>

          {/* Programs Dropdown */}
          <div className="relative group">
            <button className="flex items-center hover:text-white">
              Programs
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 bg-[#f5f5f5] text-black rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
              <Link href="#" className="block px-4 py-2 hover:bg-yellow-200">
                Lorem
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-yellow-200">
                Lorem
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-yellow-200">
                Lorem
              </Link>
            </div>
          </div>

          <Link href="/gallery" className="hover:text-white">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact Us
          </Link>

          <Link
            href="/admission"
            className="bg-black font-medium text-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black"
          >
            Admission
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        direction="left"
        className="drawer"
        size={270}
      >
        <div className="bg-yellow-400 h-full p-6 text-black font-semibold">
          <div className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>

            {/* About dropdown */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full"
              >
                About
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    Mission and Vision
                  </Link>
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    Principal&lsquo;s Message
                  </Link>
                </div>
              )}
            </div>

            {/* Programs dropdown */}
            <div>
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center justify-between w-full"
              >
                Programs
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {programsOpen && (
                <div className="ml-4 mt-2 flex flex-col space-y-2">
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    Lorem
                  </Link>
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    Lorem
                  </Link>
                  <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
                    Lorem
                  </Link>
                </div>
              )}
            </div>

            <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>

            <Link
              href="/admission"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-black text-yellow-400 px-4 py-2 rounded text-center"
            >
              Admission
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
