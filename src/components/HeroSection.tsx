"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import PdfIcon from "@/assets/HeroSection/PdfIcon"
import Right_Tick from "@/assets/HeroSection/Right_Tick"

export function HeroSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-5xl text-center font-[Arial_Rounded_MT_Bold]">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block mb-4 px-4 py-1 bg-[#ECFFD9] text-[#217e17] rounded-full text-sm font-medium"
        >
          <span className="flex items-center px-6 gap-1">
            <PdfIcon />
            Reinventing Financial Compliance
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl mb-4"
        >
          <span className="font-bold">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-[#2D7DD2] mb-4"
            >
              Compliance-Powered AI
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-black"
            >
              for Financial Institutions.
            </motion.p>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 max-w-3xl mx-auto mb-8 text-base md:text-lg font-[Arial]"
        >
          An advanced, secure AI that enhances your FI's financial knowledge while ensuring
          <br />
          compliance with all regulatory requirements through streamlined, automated
          <br />
          workflows—cutting compliance costs by up to 90% and minimizing human error.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-center max-w-md mx-auto mb-8"
        >
          <Input
            type="email"
            placeholder="Enter your work email"
            className="h-12 rounded-l-md rounded-r-none border-gray-300 placeholder:text-gray-400 placeholder:tracking-wider placeholder:text-base"
          />
          <Button className="h-12 text-md rounded-l-none rounded-r-md bg-[#2D7DD2] font-extrabold hover:bg-[#1d6abf] pl-6 pr-4 text-white">
            Get Started
            <ArrowRightIcon className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8"
        >
          {[
            { icon: <Right_Tick />, text: "Free 14 Day Trial" },
            { icon: <Right_Tick />, text: "No Credit Card Required" },
            { icon: <Right_Tick />, text: "Cancel Anytime" },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <Benefit icon={benefit.icon} text={benefit.text} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface BenefitProps {
  icon: React.ReactNode
  text: string
}

function Benefit({ icon, text }: BenefitProps) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-gray-600">{text}</span>
    </div>
  )
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}
