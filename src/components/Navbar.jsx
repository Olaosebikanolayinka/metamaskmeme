import React, { useState } from 'react';
import { Link } from "react-scroll";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";




export default function Navbar() {
  const [open, setOpen] = useState(false);
  // Use ids that match the section ids in the page
  const navLinks = ["home", "vision", "how-to-buy", "tokenomics", "roadmap", "utilities", "whitepaper"];
  return (
    <>
      <nav className="fixed top-4 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto bg-black backdrop-blur-md shadow-md rounded-2xl px-6 py-3 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 w-auto">
            <img
              src="/metamaskmemelogo.png"
              alt="Metamaskmeme Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-base sm:text-lg md:text-2xl font-extrabold tracking-wide text-amber-500 drop-shadow-lg" style={{letterSpacing: '0.04em'}}>Metamaskmeme</h1>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto z-50"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-7 h-1 bg-amber-600 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 bg-amber-600 rounded my-1 transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 bg-amber-600 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Nav Links & Socials (Hamburger) */}
          <ul
            className={`md:flex items-center gap-3 md:gap-4 text-gray-300 font-medium text-xs md:text-sm transition-all duration-300 pl-4 md:pl-8 ${open ? 'flex flex-col absolute top-16 left-0 w-full bg-gray-900/95 rounded-b-2xl py-6 px-8 shadow-lg z-40' : 'hidden md:flex static'}`}
            onClick={() => setOpen(false)}
          >
            {navLinks.map((section) => (
              <li key={section} className="my-2 md:my-0">
                {section === 'whitepaper' ? (
                  <a
                    href="/whitepaper.pdf"
                    download
                    className="cursor-pointer hover:text-amber-600 transition block px-2 py-1 text-xs md:text-sm"
                  >
                    Whitepaper
                  </a>
                ) : (
                  <Link
                    to={section === 'tokenomics' ? 'tokenomics' : section}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="cursor-pointer hover:text-amber-600 transition block px-2 py-1 text-xs md:text-sm"
                  >
                    {/* Format label for display */}
                    {section === 'how-to-buy'
                      ? 'How to Buy'
                      : section === 'vision'
                      ? 'Vision'
                      : section === 'utilities'
                      ? 'Utilities'
                      : section === 'home'
                      ? 'Home'
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                )}
              </li>
            ))}
            {/* Socials inside hamburger */}
            <li className="flex gap-4 mt-4 md:hidden">
              <a
                href="https://x.com/Maskmeme_Token"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-600 transition text-xl"
              >
                <FaTwitter />
              </a>
              <a
                href="https://t.me/Maskmeme_token"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-amber-600 transition text-xl"
              >
                <FaTelegramPlane />
              </a>
            </li>
          </ul>

          {/* Socials (Desktop only) */}
          <div className="gap-4 ml-6 hidden md:flex">
            <a
              href="https://x.com/Maskmeme_Token"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-600 transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://t.me/Maskmeme_token"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-600 transition text-xl"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
