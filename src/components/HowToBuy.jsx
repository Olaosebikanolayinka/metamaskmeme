import { useState } from "react";
import {
  ArrowDownTrayIcon,
  CreditCardIcon,
  LinkIcon,
  ArrowsRightLeftIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function HowToBuy() {
  const [copied, setCopied] = useState(false);

  // Replace this with your actual token contract address
  const CONTRACT_ADDRESS = "CNd7RjHV8VnpuYFVoJpGfhb8LmzUV6CmjT2bHRc7RCaU";

  const steps = [
    {
      id: 1,
      title: "Download MetaMask",
      description:
        "Install the MetaMask app from the App Store or Google Play. Create a wallet and securely back up your seed phrase.",
      icon: <ArrowDownTrayIcon className="w-10 h-10 text-orange-500" />,
    },
    {
      id: 2,
      title: "Fund Your Wallet",
      description:
        "Purchase Solana (SOL) from an exchange like Coinbase or Binance. Transfer the ETH to your MetaMask wallet address.",
      icon: <CreditCardIcon className="w-10 h-10 text-green-500" />,
    },
    {
      id: 3,
      title: "Connect to Uniswap",
      description:
        "Open the browser inside MetaMask, go to Uniswap, and connect your wallet to the platform.",
      icon: <LinkIcon className="w-10 h-10 text-blue-500" />,
    },
    {
      id: 4,
      title: "Swap for Our Token",
      description:
        "Paste our token contract address, select the amount of Sol you want to swap, and confirm the transaction.",
      icon: <ArrowsRightLeftIcon className="w-10 h-10 text-purple-500" />,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      id="how-to-buy"
    >
      {/* Animated Background Blob */}
      <motion.div
        className="absolute right-[-200px] top-20 w-[500px] h-[500px] rounded-full 
                   bg-gradient-to-tr from-amber-400 to-orange-600 opacity-20 blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-amber-600 mb-14">
          How to Buy Using MetaMask
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-black rounded-2xl shadow-lg p-6 flex flex-col items-center text-center 
                         transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-white/10"
              initial={{ opacity: 0, y: 100, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-amber-500 mb-2">
                {step.title}
              </h3>
              <p className="text-white text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contract Address */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-center text-gray-700 font-semibold mb-3">
            Metamaskmeme Contract Address
          </p>
          <div className="flex flex-col sm:flex-row items-center bg-gray-100 border rounded-xl overflow-hidden">
            <input
              type="text"
              value={CONTRACT_ADDRESS}
              readOnly
              className="flex-1 bg-transparent px-4 py-3 text-sm md:text-base text-gray-800 outline-none w-full"
            />
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-1 bg-amber-600 hover:bg-amber-500 
                         text-white px-4 py-3 text-sm md:text-base font-medium w-full sm:w-auto"
            >
              <ClipboardDocumentIcon className="w-4 h-4" />
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#buy"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold 
             px-8 py-3 rounded-xl shadow-md text-sm md:text-base 
             transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            Buy Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
