import { motion } from "framer-motion";
import { BoltIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";

export default function VisionMission() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black"
      id="vision-mission"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-amber-400 mb-10">
          Vision & Mission
        </h2>

        {/* Vision & Mission */}
        <div className="space-y-8 text-white/90">
          <motion.div
            className="bg-white/10 border border-amber-400/20 rounded-2xl p-6 shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-3">
              Vision
            </h3>
            <p className="text-sm md:text-base">
              To become the most influential meme-powered token on Solana,
              bridging humor, culture, and real utility in the Web3 space.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/10 border border-amber-400/20 rounded-2xl p-6 shadow-lg backdrop-blur-md"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-amber-400 mb-3">
              Mission
            </h3>
            <p className="text-sm md:text-base">
              To harness the viral nature of memes while empowering communities,
              rewarding creativity, and giving back through charity and impact
              initiatives.
            </p>
          </motion.div>
        </div>

        {/* Why $MASK Section */}
        <motion.div
          className="mt-14 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 
                     border border-amber-400/30 rounded-2xl p-8 shadow-xl text-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-3 mb-5 text-center">
            <BoltIcon className="w-8 h-8 text-amber-400 mx-auto" />
            <h3 className="text-2xl font-bold text-amber-400">Why $MASK?</h3>
          </div>
          <ul className="list-disc list-inside text-white/90 space-y-2 text-sm md:text-base">
            <li>
              Riding on the MetaMask hype while leveraging the speed and low
              fees of Solana.
            </li>
            <li>
              Strong tokenomics with a clear deflationary model.
            </li>
            <li>
              Meme-first, utility-backed approach ensures both fun and
              sustainability.
            </li>
            <li>
              Community-driven growth with incentives, contests, and governance.
            </li>
          </ul>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="mt-12 p-6 bg-white/5 border border-amber-400/20 rounded-2xl shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <SparklesIcon className="w-8 h-8 text-amber-400 mx-auto mb-4" />
          <p className="text-lg md:text-xl font-medium text-white">
            ✨ MetaMaskMeme ($MASK) is more than a token—it’s a movement.  <br/>
            Join us as we turn memes into value, and value into community
            impact.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://x.com/Maskmeme_Token"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://t.me/Maskmeme_token"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-400 transition text-2xl"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

