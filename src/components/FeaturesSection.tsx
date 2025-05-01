"use client"

import { motion, useInView, animate, motionValue, useTransform, useScroll } from "framer-motion"; // Import useScroll
import { useEffect, useRef } from "react";

// Helper component for animating the number
function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = motionValue(0);

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const rounded = useTransform(count, latest => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 1.5, // Adjust duration as needed
        ease: "easeOut"
      });
      return controls.stop; // Stop animation on unmount
    }
     // No cleanup needed if not in view
  }, [isInView, count, numericValue]); // Dependencies

  return <motion.span ref={ref}>{rounded}</motion.span>;
}


export function FeaturesSection() {
  // Refs for the main left and right sections to trigger animations on scroll
  const sectionRef = useRef(null); // Use one ref for the whole section container

  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" }); // Adjust margin as needed

  // Ref for the image to apply parallax
  const imageRef = useRef(null);

  // Set up scroll tracking for the image ref
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Use useTransform to map the scroll progress (0 to 1) to a vertical translation range
  // As the image scrolls into view (progress 0 -> 1), its y position goes from -50px to 50px
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]); // Adjust the range for more/less intense parallax

  // Define animation variants for the main columns
  const columnVariants = {
    hidden: (direction: 'left' | 'right') => ({
      opacity: 0,
      // Slide away/in from the side based on direction
      x: direction === 'left' ? -100 : 100, // Adjust slide distance
    }),
    visible: {
      opacity: 1,
      x: 0, // Slide to original position
      transition: {
        duration: 0.8, // Duration for the main column
        ease: "easeOut",
        when: "beforeChildren", // Animate parent before children
        staggerChildren: 0.15, // Delay between child animations
        delayChildren: 0.2 // Delay before first child starts
      },
    },
  };

  // Define animation variants for children elements within the left column
  const itemVariants = {
     hidden: { opacity: 0, y: 20 }, // Start slightly down and faded
     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } // Slide up and fade in
  };


  return (
    // Use the section ref on the main section container
    <section ref={sectionRef} className="w-full py-32 px-4 md:px-8 font-[Arial_Rounded_MT_Bold] bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12">

          {/* Left Column - Fade/Slide in/out on scroll */}
          <motion.div
            variants={columnVariants} // Use defined variants
            initial="hidden" // Start from hidden state
            animate={isInView ? "visible" : "hidden"} // Animate based on whether the *section* is in view
            custom="left" // Pass custom prop 'left'
            className="w-full md:w-1/2"
          >
            {/* Child elements using itemVariants and staggered by parent */}
            <motion.div
              variants={itemVariants} // Apply item variants
              className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            >
              Intelligent Features
            </motion.div>

            <motion.h2 className="text-3xl md:text-4xl font-bold mb-12">
              <motion.span
                 variants={itemVariants} // Apply item variants
              >
                Proven Performance.
              </motion.span>
              <br />
              <motion.span
                 variants={itemVariants} // Apply item variants
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
                  variants={itemVariants}
                >
                  <div className="w-28 h-12 justify-start text-sky-600 text-3xl font-black font-['Arial_Black']">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <motion.div // Title
                    variants={itemVariants} // Apply item variants
                    className="font-semibold mb-2 text-sm"
                  >
                    {stat.title}
                  </motion.div>
                  <motion.p // Description
                    variants={itemVariants} // Apply item variants
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
            variants={columnVariants} // Use defined variants
            initial="hidden"
            animate={isInView ? "visible" : "hidden"} // Animate based on whether the *section* is in view
            custom="right" // Pass custom prop 'right'
            className="w-full md:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden">
              <motion.img
                ref={imageRef} // Attach ref for parallax
                style={{ y: yImage }} // Apply the transformed y value for parallax
                src="https://i0.wp.com/spacenews.com/wp-content/uploads/2024/06/voyager-illus.jpg?resize=1200%2C1080&quality=89&ssl=1"
                alt="Space technology"
                // w-540 h-429 are fixed pixels, consider using responsive classes like w-full h-auto
                className="w-540 h-429 object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 