import React from 'react';
import '../index.css';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
  <div className="relative w-36 h-36">
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-amber-500 border-r-transparent animate-spin"></div>

        {/* Rotating 3D image */}
        <div className="absolute inset-2 flex items-center justify-center">
          <img
            src="/metamaskmemelogo.png" // 🔥 replace with your logo
            alt="Logo"
            className="w-20 h-20 object-contain rotate-3d"
          />
        </div>
      </div>
    </div>
  );
}
