import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import WhoWeAreImage from "@/assets/WhoWeAre/WhoWeAreImage.jpg";

export function WhoWeAre() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: isMobile ? 150 : 100,
    damping: isMobile ? 20 : 30,
    restDelta: 0.001
  });

  const textOpacity = useTransform(smoothScroll, [0.1, 0.4, 0.7, 0.9], [0.6, 1, 1, 0]);
  const textY = useTransform(smoothScroll, [0.1, 0.4, 0.7, 0.9], [30, 0, 0, -30]);

  const sectionOpacity = useTransform(smoothScroll, [0.1, 0.8, 0.95], [1, 1, 0]);
  const sectionScale = useTransform(smoothScroll, [0.1, 0.8, 0.95], [1, 1, 0.95]);

  const mobileDurationFactor = 0.6;

  const paragraphVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.6 * mobileDurationFactor : 0.6,
        ease: [0.21, 0.45, 0.15, 1.0]
      }
    },
    exit: {
      opacity: 0,
      x: -15,
      transition: {
        duration: isMobile ? 0.4 * mobileDurationFactor : 0.4,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.08 : 0.15,
        delayChildren: isMobile ? 0.1 : 0.2,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.08,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: isMobile ? 250 : 200,
        damping: isMobile ? 15 : 20
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: isMobile ? 0.3 * mobileDurationFactor : 0.3
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.7 * mobileDurationFactor : 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: {
        duration: isMobile ? 0.5 * mobileDurationFactor : 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0.8 * mobileDurationFactor : 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: isMobile ? 0.6 * mobileDurationFactor : 0.6
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden"
      style={{
        opacity: sectionOpacity,
        scale: sectionScale
      }}
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
                We went on to build digital banking and develop multiple<br /> successful AI programs for major firms.
              </motion.p>

              <motion.p
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We are here because we have a vision to tackle the toughest<br /> unaddressed problems.
              </motion.p>

              <motion.p
                className="text-gray-600"
                variants={paragraphVariants}
              >
                We understand financial institutions' challenges with new<br /> technology and know how to navigate those challenges to<br /> achieve results without getting lost on the journey.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
          >
            <div className="rounded-2xl overflow-hidden h-[400px] relative">
              <motion.div
                className="absolute inset-0 bg-white z-10 origin-left"
                style={{
                  scaleX: isImageInView ? 0 : 1,
                  transformOrigin: "right"
                }}
                transition={{
                  duration: isMobile ? 0.8 * mobileDurationFactor : 0.8,
                  ease: [0.65, 0, 0.35, 1]
                }}
              />

              <motion.img
                src={WhoWeAreImage}
                alt="People looking at night sky"
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  objectPosition: "center center"
                }}
                whileHover={{
                  scale: 1.03,
                  transition: {
                    duration: isMobile ? 1.2 * mobileDurationFactor : 1.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}