"use client"

import { motion, useInView, animate, motionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();

      window.addEventListener('resize', checkMobile);

      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  return isMobile;
}

function AnimatedNumber({ value, startAnimation }: { value: string, startAnimation: boolean }) {
  const count = motionValue(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const rounded = useTransform(count, latest => `${Math.round(latest)}${suffix}`);
  const isMobile = useIsMobile();

  const wasVisible = useRef(false);

  useEffect(() => {
    if (startAnimation) {
      if (!wasVisible.current) {
        const controls = animate(count, numericValue, {
          duration: isMobile ? 0.6 : 1.5,
          ease: isMobile ? "circOut" : "easeOut"
        });

        return () => controls.stop();
      } else {
        count.set(numericValue);
      }
      wasVisible.current = true;
    } else {

      count.set(0);
      wasVisible.current = false;
    }
  }, [startAnimation, count, numericValue, isMobile]);

  return <motion.span>{rounded}</motion.span>;
}

export function FeaturesSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isMobile = useIsMobile();

  const isInView = useInView(sectionRef, {
    once: false,
    amount: isMobile ? 0.05 : 0.2,
  });


  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: isMobile ? ["start end", "end start"] : ["start end", "end start"],
  });


  const yImage = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [-30, 30] : [-50, 50]
  );


  const columnVariants = {
    hidden: (direction: 'left' | 'right') => ({
      opacity: 0,
      x: direction === 'left' ? (isMobile ? -50 : -100) : (isMobile ? 50 : 100),
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.8,
        ease: isMobile ? "circOut" : "easeOut",
        when: "beforeChildren",
        staggerChildren: isMobile ? 0.05 : 0.15,
        delayChildren: isMobile ? 0.05 : 0.2
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 10 : 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.2 : 0.5,
        ease: isMobile ? "circOut" : "easeOut"
      }
    }
  };

  return (
    <section id="features" ref={sectionRef} className="w-full lg:py-32 py-4 px-4 md:px-8 font-[Arial_Rounded_MT_Bold] bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">

          <motion.div
            variants={columnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom="left"
            className="w-full md:w-1/2"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            >
              Intelligent Features
            </motion.div>

            <motion.h2 className="text-3xl md:text-4xl font-bold mb-12">
              <motion.span
                variants={itemVariants}
              >
                Proven Performance.
              </motion.span>
              <br />
              <motion.span
                variants={itemVariants}
                className="text-[#2D7DD2]"
              >
                Accelerate.
              </motion.span>
            </motion.h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {[
                {
                  value: "200X",
                  title: "Faster Workflows",
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
                  variants={itemVariants}
                >
                  <div className="w-28 h-12 justify-start text-sky-600 text-3xl font-black font-['Arial_Black']">
                    <AnimatedNumber value={stat.value} startAnimation={isInView} />
                  </div>
                  <motion.div
                    variants={itemVariants}
                    className="font-semibold mb-2 text-sm"
                  >
                    {stat.title}
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
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
            variants={columnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom="right"
            className="w-full md:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden">
              <motion.img
                ref={imageRef}
                style={{ y: yImage }}
                src="https://i0.wp.com/spacenews.com/wp-content/uploads/2024/06/voyager-illus.jpg?resize=1200%2C1080&quality=89&ssl=1"
                alt="Space technology"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}