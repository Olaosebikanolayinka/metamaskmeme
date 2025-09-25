import React from 'react';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
  return (
  <footer className="w-full bg-black py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-lg font-bold text-amber-500 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Metamaskmeme. All rights reserved.
        </div>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://x.com/Maskmeme_Token"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-amber-500 transition"
            aria-label="Twitter/X"
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me/Maskmeme_token"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-amber-500 transition"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
    </footer>
  );
}
