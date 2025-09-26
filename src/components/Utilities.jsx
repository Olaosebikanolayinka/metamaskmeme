import { motion } from "framer-motion";
import {
  SparklesIcon,
  PhotoIcon,
  UserGroupIcon,
  HeartIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

export default function Utilities() {
  const utilities = [
    {
      id: 1,
      title: "Meme-to-Earn Ecosystem",
      description:
        "Users can create and share memes, earning rewards in $MASK through community voting contests. Encourages creativity, virality, and user engagement.",
      icon: <SparklesIcon className="w-10 h-10 text-amber-400" />,
    },
    {
      id: 2,
      title: "NFT Integration",
      description:
        "Exclusive $MASK-themed NFT collections tied to meme culture. NFTs grant holders access to premium meme contests, governance rights, and community events.",
      icon: <PhotoIcon className="w-10 h-10 text-pink-400" />,
    },
    {
      id: 3,
      title: "Governance (DAO-Lite Model)",
      description:
        "$MASK holders participate in community polls and proposals. Influence development priorities, partnerships, and meme campaigns.",
      icon: <UserGroupIcon className="w-10 h-10 text-blue-400" />,
    },
    {
      id: 4,
      title: "Charity & Impact Fund",
      description:
        "Blockchain transparency ensures donations from the 3% charity allocation reach global causes. Token holders vote on which causes to support.",
      icon: <HeartIcon className="w-10 h-10 text-red-500" />,
    },
    {
      id: 5,
      title: "Gamified Community Incentives",
      description:
        "Quests, staking challenges, and meme battles that drive engagement. Active participants earn rewards and increase their status in the community.",
      icon: <TrophyIcon className="w-10 h-10 text-green-400" />,
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
      id="utilities"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-14">
          Utilities
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {utilities.map((util, index) => (
            <motion.div
              key={util.id}
              className="bg-white/10 border border-amber-400/20 rounded-2xl p-6 shadow-lg
                         flex flex-col items-center text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mb-4">{util.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {util.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                {util.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
