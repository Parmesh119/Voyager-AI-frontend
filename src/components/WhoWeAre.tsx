import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef } from "react";
import WhoWeAreImage from "@/assets/WhoWeAre/WhoWeAreImage.jpg";

export function WhoWeAre() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 });
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Smoother scrollYProgress with spring physics
  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.001
  });
  
  const textOpacity = useTransform(smoothScroll, [0.1, 0.4], [0.6, 1]);
  const textY = useTransform(smoothScroll, [0.1, 0.4], [30, 0]);
  
  // Staggered text animation variants - different from BeliefsSection
  const paragraphVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.21, 0.45, 0.15, 1.0] // Different easing curve
      }
    }
  };
  
  // Container for text elements with staggered animation
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Different timing from BeliefsSection
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  // Badge animation - fade and slide
  const badgeVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };
  
  // Heading animation with split effect
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row-reverse lg:gap-48 gap-10">
          <motion.div 
            className="w-full md:w-1/3"
            ref={textRef}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            variants={textContainerVariants}
            style={{
              opacity: isInView ? textOpacity : 1,
              y: isInView ? textY : 0
            }}
          >
            <motion.div 
              className="inline-block mb-4 px-14 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
              variants={badgeVariants}
            >
              Pioneers
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]"
              variants={headingVariants}
            >
              <span className="font-bold">Who we <span className="text-[#2D7DD2]">Are</span></span>
            </motion.h2>

            <div className="space-y-6 text-sm font-[Arial]">
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We are a group of pioneers, born in the mobile banking age.
              </motion.p>
              
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We went on to build digital banking and develop multiple<br/> successful AI programs for major firms.
              </motion.p>
              
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We are here because we have a vision to tackle the toughest<br/> unaddressed problems.
              </motion.p>
              
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We understand financial institutions' challenges with new<br/> technology and know how to navigate those challenges to<br/> achieve results without getting lost on the journey.
              </motion.p>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="rounded-2xl overflow-hidden h-[400px] relative">
              {/* Image mask effect - different from BeliefsSection */}
              <motion.div 
                className="absolute inset-0 bg-white z-10 origin-left"
                style={{ 
                  scaleX: isImageInView ? 0 : 1,
                  transformOrigin: "right"
                }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              />
              
              <motion.img 
                src={WhoWeAreImage}
                alt="People looking at night sky" 
                className="w-full h-full object-cover rounded-2xl"
                style={{ 
                  objectPosition: "center center" // Fixes the whitespace issue
                }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}