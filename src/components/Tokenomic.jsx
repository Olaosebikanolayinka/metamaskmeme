import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function Tokenomics() {
  const data = [
    { name: "Liquidity", value: 60, color: "#3B82F6" }, // blue
    { name: "Burn ", value: 15, color: "#EF4444" }, // red
    { name: "Development", value: 10, color: "#22C55E" }, // green
    { name: "Team", value: 6, color: "#8B5CF6" }, // purple
    { name: "Airdrop", value: 3, color: "#EC4899" }, // pink
    { name: "Charity", value: 3, color: "#EAB308" }, // yellow
    { name: "Community Incentives", value: 3, color: "#F97316" }, // orange
  ];

  return (
    <section
      id="tokenomics"
      className="relative w-full py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      <div className="w-full px-0 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-14 w-full">
          Tokenomics
        </h2>
        {/* Chart - 3D effect */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-10 w-full gap-6">
          <motion.div
            className="w-full max-w-2xl h-[420px] flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={170}
                  innerRadius={110}
                  stroke="#222"
                  strokeWidth={3}
                  label={({ value }) => `${value}%`}
                  labelLine={false}
                  style={{ filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.45))' }}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
          {/* Total Supply */}
          <div className="bg-black/80 border border-amber-400 rounded-xl px-6 py-3 text-lg md:text-xl font-bold text-amber-300 shadow-lg mt-6 md:mt-0 md:ml-6 min-w-[220px] text-center">
            Total Supply: 1.05 Billion $MASK
          </div>
        </div>
        

  {/* Cards */}
  <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-6 mt-10 text-center w-full">Allocation Breakdown:</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl shadow-lg p-6 flex flex-col items-start text-left bg-white/5 backdrop-blur-md border border-white/10"
              initial={{ opacity: 0, y: 100, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-white font-bold`}
                style={{ backgroundColor: item.color }}
              >
                {item.value}%
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-amber-300 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {item.description ||
                  (item.name === "Liquidity" &&
                    "Ensuring deep liquidity for smooth trading and minimizing volatility.") ||
                  (item.name === "Burn " &&
                    "Permanently removed from circulation to drive scarcity and long-term value.") ||
                  (item.name === "Development" &&
                    "Strategic allocation to support ecosystem growth, collaborations, and listings.") ||
                  (item.name === "Team" &&
                    "Reserved for the core team, vested to ensure commitment and sustainable growth.") ||
                  (item.name === "Airdrop" &&
                    "Rewarding early supporters and fostering widespread token distribution.") ||
                  (item.name === "Charity" &&
                    "Dedicated to social impact initiatives, giving back to communities worldwide.") ||
                  (item.name === "Community Incentives" &&
                    "Fueling engagement, growth campaigns, and rewarding active contributors.")}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-10 max-w-3xl mx-auto bg-black/70 border border-amber-400/30 rounded-2xl px-6 py-6 shadow-lg">
          <h4 className="text-lg md:text-xl font-bold text-amber-400 mb-3">Highlights</h4>
          <ul className="list-disc list-inside text-white/90 space-y-2 text-sm md:text-base">
            <li>Majority allocation to liquidity ensures stability.</li>
            <li>Burn mechanism builds scarcity over time.</li>
            <li>Clear focus on partnerships, exchange listings, and growth.</li>
            <li>Community & charity allocations reflect real impact and inclusivity.</li>
          </ul>
        </div>
      </div>

      {/* Floating Background Glow */}
      <motion.div
        className="absolute -right-20 top-40 w-[500px] h-[500px] rounded-full 
                   bg-gradient-to-tr from-amber-500 to-orange-600 opacity-20 blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
