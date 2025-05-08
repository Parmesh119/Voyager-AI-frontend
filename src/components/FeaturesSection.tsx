"use client"

import { motion, useInView, animate, motionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Added isMobile detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if window exists (client-side)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Listen for resize events
      window.addEventListener('resize', checkMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);
  
  return isMobile;
}

// Improved AnimatedNumber component with mobile-optimized animation speed
function AnimatedNumber({ value, startAnimation }: { value: string, startAnimation: boolean }) {
  const count = motionValue(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const rounded = useTransform(count, latest => `${Math.round(latest)}${suffix}`);
  const isMobile = useIsMobile();
  
  // Track previous state to detect transitions from not visible to visible
  const wasVisible = useRef(false);

  useEffect(() => {
    if (startAnimation) {
      // If becoming visible
      if (!wasVisible.current) {
        // Animate from 0 to the target value - faster on mobile
        const controls = animate(count, numericValue, {
          duration: isMobile ? 1 : 1.5, // Faster on mobile
          ease: "easeOut"
        });
        
        // Cleanup function
        return () => controls.stop();
      } else {
        // If already visible, ensure the value is set properly without animation
        count.set(numericValue);
      }
      wasVisible.current = true;
    } else {
      // When not visible, reset the counter to 0 for next animation
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
  
  // Track when the section is in viewport with a more generous threshold
  const isInView = useInView(sectionRef, { 
    once: false, // Important: we need to detect when it enters AND leaves
    amount: isMobile ? 0.1 : 0.2,  // More sensitive triggering on mobile
  });

  // Set up scroll tracking for the image ref
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Use useTransform to map the scroll progress (0 to 1) to a vertical translation range
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Define animation variants for the main columns - with mobile-specific durations
  const columnVariants = {
    hidden: (direction: 'left' | 'right') => ({
      opacity: 0,
      x: direction === 'left' ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.8, // Faster on mobile
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: isMobile ? 0.1 : 0.15, // Faster staggering on mobile
        delayChildren: isMobile ? 0.1 : 0.2 // Less delay on mobile
      },
    },
  };

  // Define animation variants for children elements - with mobile-specific durations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: isMobile ? 0.3 : 0.5 // Faster on mobile
      } 
    }
  };

  return (
    <section ref={sectionRef} className="w-full lg:py-32 py-4 px-4 md:px-8 font-[Arial_Rounded_MT_Bold] bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Left Column - Fade/Slide in/out on scroll */}
          <motion.div
            variants={columnVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom="left"
            className="w-full md:w-1/2"
          >
            {/* Child elements using itemVariants and staggered by parent */}
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
                    {/* Pass the isInView status to trigger/reset animation */}
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

          {/* Right Column - Fade/Slide in/out on scroll + Parallax Image */}
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