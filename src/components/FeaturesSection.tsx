"use client"

import { motion } from "framer-motion"

export function FeaturesSection() {
  return (
    <section className="w-full py-32 px-4 md:px-8 font-[Arial_Rounded_MT_Bold] bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            >
              Intelligent Features
            </motion.div>

            <motion.h2 className="text-3xl md:text-4xl font-bold mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Proven Performance.
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#2D7DD2]"
              >
                Accelerate.
              </motion.span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                {
                  value: "200X",
                  title: "Faster Audits",
                  description:
                    "Experience significantly reduced audit times with automated data analysis and reporting.",
                },
                {
                  value: "90%",
                  title: "Reduced Costs",
                  description: "Optimize your compliance budget with AI-driven automation and streamlined workflows.",
                },
                {
                  value: "99%",
                  title: "Increased Accuracy",
                  description:
                    "Benefit from highly accurate results driven by AI algorithms that minimize human error.",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.15 }}
                    className="w-28 h-12 justify-start text-sky-600 text-3xl font-black font-['Arial_Black']"
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                    className="font-semibold mb-2 text-sm"
                  >
                    {stat.title}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                    className="text-gray-600 text-sm font-[Arial]"
                    style={{ lineHeight: "19px" }}
                  >
                    {stat.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden">
              <motion.img
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7 }}
                src="https://i0.wp.com/spacenews.com/wp-content/uploads/2024/06/voyager-illus.jpg?resize=1200%2C1080&quality=89&ssl=1"
                alt="Space technology"
                className="w-540 h-429 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
