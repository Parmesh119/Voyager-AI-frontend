"use client";

import React, { useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PdfIcon from "@/assets/HeroSection/PdfIcon";
import Right_Tick from "@/assets/HeroSection/Right_Tick";
import { useRef } from "react";
import { toast } from "sonner";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Adjusted for potentially smoother animation
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleGetStarted = () => {
    if (!email) {
      toast.error("Please enter your work email", {
        style: {
          background: "red",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "8px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bolder",
          textAlign: "center",
        },
      });
      return;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email address", {
        style: {
          background: "red",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "8px",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bolder",
          textAlign: "center",
        },
      });
      return;
    }
    window.location.replace("https://explorer.voyagercx.ai/register?email=" + email);
    setEmail("");
  };

  return (
    <section
      ref={containerRef}
      className="w-full py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]"
    >
      <motion.div
        className="container mx-auto max-w-5xl text-center px-2"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-3 sm:mb-4 px-2 sm:px-4 py-1 bg-[#ECFFD9] text-[#217e17] rounded-full text-xs sm:text-sm font-medium"
        >
          <span className="flex items-center justify-center sm:px-10 gap-1">
            <PdfIcon />
            <span className="ml-1">Reinventing Financial Compliance</span>
          </span>
        </motion.div>


        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 px-1"
        >
          <span className="font-bold">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-[#2D7DD2] mb-2 sm:mb-4"
            >
              Compliance-Powered AI
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-black"
            >
              for Financial Institutions.
            </motion.p>
          </span>
        </motion.div>

        <motion.p
          ref={paragraphRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg font-[Arial] px-2"
        >
          An advanced, secure AI that enhances your FI's financial knowledge
          while ensuring compliance with all regulatory requirements through streamlined, automated
          workflows—cutting compliance costs by up to 90% and minimizing human
          error.
        </motion.p>

        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 20]) }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8 gap-2 sm:gap-0"
        >
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 sm:rounded-l-md sm:rounded-r-none rounded-md sm:rounded-r-none border-gray-300 placeholder:text-gray-400 placeholder:tracking-wider placeholder:text-sm"
          />
          <div className="relative">
            <Button
              onClick={handleGetStarted}
              className="w-full sm:w-auto h-12 text-md rounded-md sm:rounded-l-none sm:rounded-r-md bg-[#2D7DD2] font-extrabold hover:bg-[#1d6abf] px-4 sm:pl-6 sm:pr-4 text-white"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
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
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 },
              }}
              viewport={{ once: true }}
              className="font-[Arial]"
            >
              <Benefit icon={benefit.icon} text={benefit.text} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

interface BenefitProps {
  icon: React.ReactNode;
  text: string;
}

function Benefit({ icon, text }: BenefitProps) {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-gray-600 text-xs sm:text-sm md:text-base">{text}</span>
    </div>
  );
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
  );
}