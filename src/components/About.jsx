import React from 'react';
import '../hero-animations.css';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-start min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Animated background image */}
      <div
        className="absolute inset-0 w-full h-full z-0 animate-bg-move"
        style={{
          background: "url('/newhero.png') 60% center/cover no-repeat"
        }}
      ></div>
      <div
        className="hero-card animate-fade-in-up relative z-10 bg-black/90 rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-start ml-[5vw]"
        style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          padding: '2.5rem',
          maxWidth: 600,
          width: '90vw',
        }}
      >
        <h1
          className="text-3xl md:text-4xl font-bold mb-5 text-amber-600"
          style={{ lineHeight: 1.1 }}
        >
          MetamaskMeme Token ($MASK)
        </h1>
        <p className="text-base md:text-lg text-white font-medium leading-relaxed">
          MetamaskMeme Token ($MASK) is a community-driven meme token built on the Solana blockchain, designed to merge the fun culture of meme coins with the fast, low-cost, and scalable ecosystem of Solana. The project aims to foster a decentralized community while creating real-world use cases and long-term value through accessibility, speed, and inclusivity.
        </p>
      </div>
      <style>{`
        @keyframes bg-move {
          0% { background-position: 60% 40%; }
          25% { background-position: 70% 60%; }
          50% { background-position: 50% 70%; }
          75% { background-position: 80% 30%; }
          100% { background-position: 90% 80%; }
        }
        .animate-bg-move {
          animation: bg-move 8s cubic-bezier(0.4,0,0.2,1) infinite alternate;
        }
        @media (max-width: 640px) {
          .hero-card {
            padding: 1.2rem !important;
            max-width: 95vw !important;
            min-width: 0 !important;
            margin-top: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
