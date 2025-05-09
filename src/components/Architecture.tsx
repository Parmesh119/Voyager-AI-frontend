import { Search } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Comparison from '@/assets/Architecture/Comparison';
import Horizon from '@/assets/Architecture/Horizon';
import Analysis from '@/assets/Architecture/Analysis';
import DomainCore from '@/assets/Architecture/DomainCore';
import Knowledge from '@/assets/Architecture/Knowledge';

export function Architecture() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 150);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        if (timeoutId) clearTimeout(timeoutId);
      }
    };
  }, []);

  const isMobile = windowWidth < 768;

  const domainSectionRef = useRef(null);
  const knowledgeSectionRef = useRef(null);

  const { scrollYProgress: domainScrollProgress } = useScroll({
    target: domainSectionRef,
    offset: isMobile ? ["start end", "center center"] : ["start end", "end start"]
  });

  const domainScale = useTransform(
    domainScrollProgress,
    [0, 0.3],
    isMobile ? [0.95, 1] : [0.8, 1]
  );

  const domainOpacity = useTransform(
    domainScrollProgress,
    [0, 0.3],
    [0.5, 1]
  );

  const { scrollYProgress: knowledgeScrollProgress } = useScroll({
    target: knowledgeSectionRef,
    offset: isMobile ? ["start end", "center center"] : ["start end", "end start"]
  });

  const knowledgeScale = useTransform(
    knowledgeScrollProgress,
    [0, 0.4],
    isMobile ? [0.95, 1] : [0.8, 1]
  );

  const knowledgeOpacity = useTransform(
    knowledgeScrollProgress,
    [0, 0.4],
    [0.5, 1]
  );

  const sectionVariants = {
    hidden: { opacity: 0, y: isMobile ? 20 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        ease: "easeOut"
      }
    }
  };

  const agentContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  const agentItemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.4,
        ease: "easeOut"
      }
    }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: isMobile ? -20 : -100, y: isMobile ? 15 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const slideInRightVariants = {
    hidden: { opacity: 0, x: isMobile ? 20 : 100, y: isMobile ? 15 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={agentContainerVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <div className="flex flex-row gap-1 sm:gap-2 px-4 sm:px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-xs sm:text-sm font-medium items-center">
              <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              Knowledge Database
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-2 sm:mb-3 font-[Arial_Rounded_MT_Bold] px-2"
          >
            <span className="font-bold">Understanding <span className="text-[#2D7DD2]">the Architecture</span></span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 text-sm sm:text-base text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto font-[Arial] px-4"
          >
            Let's Go Beyond the layers of Voyager to understand how it enables the ability to explore knowledge.
          </motion.p>
        </motion.div>

        {isMobile ? (
          <div className="flex flex-col justify-between items-center mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-6 mb-6 w-full">
              <div className="flex justify-center items-center">
                <div className="transform scale-75 sm:scale-90">
                  <Comparison />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="transform scale-75 sm:scale-90">
                  <Horizon />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="transform scale-75 sm:scale-90">
                  <Analysis />
                </div>
              </div>
            </div>
            <div className="text-gray-600 text-xs sm:text-sm w-full mx-auto text-center font-[Arial] px-4 sm:px-8">
              Meet your digital compliance guardians. These<br /> intelligent agents don't just read regulations–they<br />
              breathe them. Transforming complex rules into<br /> actionable insights, they're the vigilant sentinels<br />
              protecting your financial institution's integrity.
            </div>
          </div>
        ) : (
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8 md:gap-12 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.div
              className="flex lg:flex-row flex-col gap-6 sm:gap-4 md:gap-8 mb-6 sm:mb-4 md:mb-0 w-full"
              variants={agentContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={agentItemVariants} className="flex justify-center items-center">
                <div className="transform scale-90 md:scale-100">
                  <Comparison />
                </div>
              </motion.div>

              <motion.div variants={agentItemVariants} className="flex justify-center items-center">
                <div className="transform scale-90 md:scale-100">
                  <Horizon />
                </div>
              </motion.div>

              <motion.div variants={agentItemVariants} className="flex justify-center items-center">
                <div className="transform scale-90 md:scale-100">
                  <Analysis />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-gray-600 text-sm md:text-base w-full md:w-full mx-auto text-center md:text-left font-[Arial] px-4 sm:px-8 md:px-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >Meet your digital compliance guardians. These<br /> intelligent agents don't just read regulations–they<br /> breathe them. Transforming complex rules into<br /> actionable insights, they're the vigilant sentinels<br /> protecting your financial institution's integrity.
            </motion.div>
          </motion.div>
        )}

        <div className="flex flex-col w-full lg:flex-row items-center justify-between mb-16 sm:mb-20 md:mb-24 lg:mb-32 px-2 sm:px-4" ref={domainSectionRef}>
          <motion.div
            className="shadow-lg bg-[#007ABA] rounded-2xl w-full sm:max-w-md lg:w-5/12 h-auto aspect-[4/3] sm:aspect-[5/4] md:aspect-auto md:h-[350px] lg:h-[381px] text-center p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center items-center will-change-transform"
            style={{
              scale: domainScale,
              opacity: domainOpacity,
              willChange: 'transform, opacity'
            }}
          >
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"><span>Domain Core</span></h3>
            <div className="flex justify-center items-center transform scale-75 sm:scale-90 md:scale-100">
              <DomainCore />
            </div>
          </motion.div>

          {isMobile ? (
            <div className="w-full lg:w-6/12 py-8 lg:py-0">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[Arial] text-center lg:text-left">
                Our Domain-Focused database is an infinite <span className="lg:inline hidden"> </span><span className="lg:hidden inline">library </span><span className="lg:inline hidden">library <br /> </span>of wisdom. No matter what type of <span className="lg:inline hidden"> </span><span className="lg:hidden inline"> financial </span><span className="lg:inline hidden">financial <br /> </span>institution, the knowledge has already been <span className="lg:inline hidden"> </span><span className="lg:hidden inline"> curated </span>curated<span className="lg:inline hidden"><br /> </span>and primed to support depth and accuracy <span className="lg:inline hidden"> </span><span className="lg:hidden inline"> far </span><span className="lg:inline hidden">far <br /> </span>beyond any generic AI!
              </p>
            </div>
          ) : (
            <motion.div
              className="w-full lg:w-6/12 py-8 lg:py-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[Arial] text-center lg:text-left">
                Our Domain-Focused database is an infinite <span className="lg:inline hidden"> </span><span className="lg:hidden inline">library </span><span className="lg:inline hidden">library <br /> </span>of wisdom. No matter what type of <span className="lg:inline hidden"> </span><span className="lg:hidden inline"> financial </span><span className="lg:inline hidden">financial <br /> </span>institution, the knowledge has already been <span className="lg:inline hidden"> </span><span className="lg:hidden inline"> curated </span>curated<span className="lg:inline hidden"><br /> </span>and primed to support depth and accuracy <span className="lg:inline hidden"> </span><span className="lg:hidden inline"> far </span><span className="lg:inline hidden">far <br /> </span>beyond any generic AI!
              </p>
            </motion.div>
          )}
        </div>

        <div className="flex lg:ml-44 ml-0 w-full flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-12 px-2 sm:px-4" ref={knowledgeSectionRef}>
          <motion.div
            className="shadow-lg bg-[#A8C315] rounded-2xl order-1 lg:order-2 w-full sm:max-w-md lg:w-5/12 h-auto aspect-[4/3] sm:aspect-[5/4] md:aspect-auto md:h-[350px] lg:h-[381px] text-center p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center items-center will-change-transform"
            style={{
              scale: knowledgeScale,
              opacity: knowledgeOpacity,
              willChange: 'transform, opacity'
            }}
          >
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"><span>Knowledge Core</span></h3>
            <div className="flex justify-center items-center transform scale-75 sm:scale-90 md:scale-100">
              <Knowledge />
            </div>
          </motion.div>

          {isMobile ? (
            <div className="order-2 lg:order-1 w-full lg:w-5/12 px-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[Arial] text-center lg:text-left">
                We've created a secure vault where your existing
                <span className="hidden lg:inline"><br /></span> documents are AI-empowered, compliant, and
                <span className="hidden lg:inline"><br /></span> intelligent, allowing them to work smarter, not
                <span className="hidden lg:inline"><br /></span> harder. We offer many options, from on-premises to
                <span className="hidden lg:inline"><br /></span> cloud, ensuring your FI's core knowledge remains
                <span className="hidden lg:inline"><br /></span> under your control.
              </p>
            </div>
          ) : (
            <motion.div
              className="order-2 lg:order-1 w-full lg:w-5/12 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeftVariants}
            >
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[Arial] text-center lg:text-left">
                We've created a secure vault where your existing
                <span className="hidden lg:inline"><br /></span> documents are AI-empowered, compliant, and
                <span className="hidden lg:inline"><br /></span> intelligent, allowing them to work smarter, not
                <span className="hidden lg:inline"><br /></span> harder. We offer many options, from on-premises to
                <span className="hidden lg:inline"><br /></span> cloud, ensuring your FI's core knowledge remains
                <span className="hidden lg:inline"><br /></span> under your control.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


export default Architecture;