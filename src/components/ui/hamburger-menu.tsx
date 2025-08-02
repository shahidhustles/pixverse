"use client";

import React, { useState } from "react";
import Link from "next/link";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={`
          fixed top-6 left-6 z-50
          px-6 py-3
          bg-white text-black
          font-bold text-sm tracking-wider
          border-2 border-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          transition-all duration-150 ease-out
          hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[-2px] hover:translate-y-[-2px]
          active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          active:translate-x-[2px] active:translate-y-[2px]
          transform-gpu
          ${
            isOpen
              ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[2px] translate-y-[2px]"
              : ""
          }
        `}
      >
        {isOpen ? "CLOSE ×" : "MENU ☰"}
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={toggleMenu}
        >
          <div
            className="fixed left-0 top-0 h-full w-3/4 bg-red-500 shadow-lg transform transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-full flex flex-col">
              {/* Header Section */}
              <div className="p-8 pt-20 border-b border-white/20">
                <p className="text-white text-lg font-semibold leading-relaxed">
                  We create immersive gaming experiences
                  <br />
                  that push the boundaries of interactive
                  <br />
                  entertainment and digital worlds.
                </p>
              </div>

              {/* Navigation Section */}
              <nav className="flex-1 flex flex-col">
                <Link
                  href="#hero"
                  className="flex-1 flex items-center justify-center text-white text-6xl font-black border-b border-white/20 hover:bg-blue-400 hover:text-black transition-all duration-300 hover:scale-y-125 hover:z-10 relative"
                  onClick={toggleMenu}
                >
                  HOME
                </Link>
                <Link
                  href="#about"
                  className="flex-1 flex items-center justify-center text-white text-6xl font-black border-b border-white/20 hover:bg-pink-400 hover:text-black transition-all duration-300 hover:scale-y-125 hover:z-10 relative"
                  onClick={toggleMenu}
                >
                  ABOUT US
                </Link>
                <Link
                  href="#games"
                  className="flex-1 flex items-center justify-center text-white text-6xl font-black border-b border-white/20 hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-y-125 hover:z-10 relative"
                  onClick={toggleMenu}
                >
                  GAMES
                </Link>
                <Link
                  href="#features"
                  className="flex-1 flex items-center justify-center text-white text-6xl font-black border-b border-white/20 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-y-125 hover:z-10 relative"
                  onClick={toggleMenu}
                >
                  FEATURES
                </Link>
                <Link
                  href="#contact"
                  className="flex-1 flex items-center justify-center text-white text-6xl font-black hover:bg-purple-400 hover:text-black transition-all duration-300 hover:scale-y-125 hover:z-10 relative"
                  onClick={toggleMenu}
                >
                  CONTACT
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
