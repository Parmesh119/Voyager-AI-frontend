import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef } from "react";
import familyImage from "@/assets/BeliefsSection/FamilyImage.jpg";
 
export function BeliefsSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 });
  
  // Scroll-based animations (added from WhoWeAre)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Smoother scrollYProgress with spring physics (added from WhoWeAre)
  const smoothScroll = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30,
    restDelta: 0.001
  });
  
  const textOpacity = useTransform(smoothScroll, [0.1, 0.4], [0.6, 1]);
  const textY = useTransform(smoothScroll, [0.1, 0.4], [30, 0]);
  
  // Staggered text animation variants - using WhoWeAre's style
  const paragraphVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: [0.21, 0.45, 0.15, 1.0] // Different easing curve from WhoWeAre
      }
    }
  };
  
  // Container for text elements with staggered animation
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Updated timing from WhoWeAre
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  // Badge animation - fade and slide (from WhoWeAre)
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
  
  // Heading animation with split effect (from WhoWeAre)
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
      id="beliefs" 
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row lg:gap-48 gap-10">
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
              Community
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]"
              variants={headingVariants}
            >
              <span className="font-bold">What we <span className="text-[#2D7DD2]">Believe</span></span>
            </motion.h2>

            <div className="space-y-6 text-sm font-[Arial]">
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We believe in the community, the Community Banks, the Credit Unions and the Financial Institutions that touch our<br/> lives.
              </motion.p>
              
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                Artificial Intelligence is here, and it can make an impact<br/> by improving our work and allowing us to focus on what<br/> matters most to us.
              </motion.p>
              
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                Voyager seeks to solve the core problems FIs care about<br/> and provide a simple, intuitive, and intelligent platform.
              </motion.p>
              
              <motion.p 
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We want to reduce the stress and burden that Financial<br/> Institutions encounter.
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
              {/* Image mask effect - added from WhoWeAre */}
              <motion.div 
                className="absolute inset-0 bg-white z-10 origin-left"
                style={{ 
                  scaleX: isImageInView ? 0 : 1,
                  transformOrigin: "right"
                }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
              />
              
              <motion.img 
                src={familyImage}
                alt="Happy family enjoying outdoors" 
                className="w-full h-full object-cover rounded-2xl"
                style={{ 
                  objectPosition: "center 30%" // Keeping your original positioning
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