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
  className="hero-card animate-fade-in-up relative z-10 bg-gradient-to-br from-black/90 via-gray-900/90 to-gray-800/90 rounded-3xl shadow-2xl backdrop-blur-lg flex flex-col items-start ml-[5vw] border border-amber-600/20"
        style={{
          boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.18)',
          padding: '2.5rem',
          maxWidth: 600,
          width: '90vw',
        }}
      >
        <h1
          className="text-3xl md:text-4xl font-bold mb-5 text-amber-600 w-full drop-shadow-lg"
          style={{ lineHeight: 1.1 }}
        >
          MetamaskMeme Token ($MASK)
        </h1>
        <p className="text-sm md:text-base text-white font-normal leading-relaxed mt-2">
          MetaMaskMeme ($MASK) is a community-driven Solana meme token inspired by the global adoption of MetaMask and the viral power of internet culture. Designed to merge humor with utility, $MASK aims to capture the spirit of decentralization, reward early adopters, and fuel a vibrant ecosystem of memes, engagement, and innovation.

          With a fair launch approach, strong liquidity, and community-first incentives, $MASK seeks to become more than just a meme—it is a symbol of Web3 culture and a gateway to accessible, fun, and rewarding blockchain participation.
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
