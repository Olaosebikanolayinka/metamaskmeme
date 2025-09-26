import React, { useEffect, useRef } from "react";

export default function RoadMap() {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // 🔥 reset when out of view
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (bgRef.current) observer.observe(bgRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      title: "Phase 1: Launch awareness",
      items: [
        "Token deployment on Solana",
        "Website & whitepaper release",
        "Airdrop & community onboarding",
        "Initial meme contests to spark engagement.",
        
      ],
    },
    {
      title: "Phase 2: Growth & Integration",
      items: [
        "CEX & DEX listings (partnerships allocation utilized)",
        "Meme-to-Earn platform beta release",
        "$MASK NFT collection launch",
        "Influencer & KOL partnerships",
      ],
    },
    {
      title: "Phase 3: Ecosystem Expansion",
      items: [
        "DAO-lite governance implementation",
        "Charity fund activation with first community-voted donation",
        "Strategic partnerships with meme pages, crypto influencers, and DeFi projects",
        "Burn events to reinforce deflationary model",
      ],
    },
    {
      title: "Phase 4: Long-Term Sustainability",
      items: [
        "Full Meme-to-Earn ecosystem launch",
        `Cross-chain expansion (Ethereum & BSC bridges)`,
        "Large-scale meme competitions with sponsorships",
        "Becoming the #1 meme hub on Solana",
      ],
    },
  ];

  return (
    <section id="roadmap" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-700 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Animated Background Image */}
      <div
        ref={bgRef}
        className="
          roadmap-bg absolute opacity-0 animate-floating
          w-[110vw] h-[60vh] left-auto right-0 bottom-0 top-auto
          sm:w-[80vw] sm:h-[45vh] sm:right-0 sm:bottom-auto sm:top-[70%] sm:-translate-y-1/2
          md:w-[55vw] md:h-[55vh] md:right-0 md:top-[70%] md:bottom-auto md:-translate-y-1/2
          lg:w-[40vw] lg:h-[65vh] lg:right-0 lg:top-[70%] lg:bottom-auto lg:-translate-y-1/2
          xl:w-[35vw] xl:h-[70vh] xl:right-0 xl:top-[70%] xl:bottom-auto xl:-translate-y-1/2
        "
        style={{
          backgroundImage: "url('/metacar.png')", // put image in public/
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      ></div>

      {/* Header */}
      <h1
        ref={headerRef}
        className="roadmap-header text-4xl md:text-5xl font-extrabold text-white mb-12 text-center drop-shadow-lg relative z-10"
      >
        Roadmap
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full relative z-10">
        {phases.map((phase, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`roadmap-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20`}
          >
            <h2 className="text-2xl font-bold text-white mb-4">{phase.title}</h2>
            <ul className="space-y-2 text-white/90">
              {phase.items.map((item, j) => (
                <li key={j} className="flex items-start space-x-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 mt-2"></span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}