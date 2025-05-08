import { Search, FileLock2, BriefcaseBusiness, Megaphone, BrainCog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PdfIcon from '@/assets/CoreFeatures/PdfIcon';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Helper hook to detect mobile view
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

export function CoreFeatures() {
  const [loading, setLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isInView) {
      // Faster timers for mobile
      const loadingTimerDuration = isMobile ? 300 : 500;
      const phase1TimerDuration = isMobile ? 200 : 300;
      const phase2TimerDuration = isMobile ? 400 : 600;
      const phase3TimerDuration = isMobile ? 400 : 600;
      const completeTimerDuration = isMobile ? 300 : 500;

      const loadingTimer = setTimeout(() => {
        setLoading(false);
        const phase1Timer = setTimeout(() => {
          setAnimationPhase(1);

          // Phase 2: Show first line of description
          const phase2Timer = setTimeout(() => {
            setAnimationPhase(2);

            // Phase 3: Show second line of description
            const phase3Timer = setTimeout(() => {
              setAnimationPhase(3);

              // Mark animation as complete after all phases
              setTimeout(() => {
                setAnimationComplete(true);
              }, completeTimerDuration);
            }, phase3TimerDuration);

            return () => clearTimeout(phase3Timer);
          }, phase2TimerDuration);

          return () => clearTimeout(phase2Timer);
        }, phase1TimerDuration);

        return () => clearTimeout(phase1Timer);
      }, loadingTimerDuration);

      return () => clearTimeout(loadingTimer);
    } else {
      setLoading(true);
      setAnimationPhase(0);
      setAnimationComplete(false);
    }
  }, [isInView, isMobile]);

  const cardVariants = {
    normal: {
      scale: 1,
      zIndex: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: isMobile ? 20 : 30 // Less damping on mobile for faster animations
      }
    },
    active: {
      scale: 1.05,
      zIndex: 10,
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: isMobile ? 20 : 30 // Less damping on mobile for faster animations
      }
    }
  };

  const featureCards = [
    {
      icon: <FileLock2 className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "Regulatory Briefs",
      descriptionParts: [
        <strong key="part1">Access clear, AI-powered summary alerts of regulatory changes.</strong>,
        <> Voyager AI creates accurate, summarized updates on federal and state policies, ensuring you're always informed.</>
      ]
    },
    {
      icon: <PdfIcon />,
      title: "Policy Execution Engine",
      descriptionParts: [
        <strong key="part1">Seamlessly translate compliance updates into action.</strong>,
        <> Ensure regulatory compliance through automated policy updates and integration with your institution's policy store.</>
      ]
    },
    {
      icon: <BrainCog className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "On-Premise AI Engine",
      descriptionParts: [
        <strong key="part1">Compliance data, fully protected inside your secure environment. </strong>,
        <> Ensuring a secure, on-premise storage of documents, offering real-risk analysis maintaining complete regulatory and data security.</>
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "Regulatory Insight Engine",
      descriptionParts: [
        <strong key="part1">Instantly explore and interpret the latest federal and state regulations.</strong>,
        <> Providing deep regulatory research and real-time insights, helping you stay compliant without manual effort.</>
      ]
    },
    {
      icon: <Megaphone className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "AI Compliance Advisor",
      descriptionParts: [
        <strong key="part1">Stay ahead of evolving regulations with AI-driven recommendations.</strong>,
        <> Analyze your position and suggests precise compliance actions, helping you future-proof your compliance strategy.</>
      ]
    },
    {
      icon: <BriefcaseBusiness className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "Institutional Awareness",
      descriptionParts: [
        <strong key="part1">An AI continuously refining itself from your live policies—in real time.</strong>,
        <> Continuously learning from your compliance data, refining risk models and adapting to your unique evolving regulatory environment.</>
      ]
    }
  ];

  // Simplified animation props - with mobile-specific durations
  const sectionFadeInProps = {
    initial: { opacity: 0 },
    animate: { opacity: isInView ? 1 : 0 },
    transition: { 
      duration: isMobile ? 0.4 : 0.6, 
      ease: "easeOut" 
    }
  };

  const textFadeInProps = {
    initial: { opacity: 0 },
    animate: { opacity: isInView ? 1 : 0 },
    transition: { 
      duration: isMobile ? 0.5 : 0.7, 
      delay: isInView ? (isMobile ? 0.1 : 0.2) : 0, 
      ease: "easeOut" 
    }
  }

  const showSkeletons = loading;

  return (
    <section ref={sectionRef} id="features" className="w-full py-12 md:py-24 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Badge */}
        <AnimatePresence>
          {showSkeletons ? (
            <div key="skeleton-badge" className="flex justify-center mb-4">
              <div className="h-8 w-40 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          ) : (
            <motion.div
              key="actual-badge"
              className="flex justify-center"
              {...sectionFadeInProps}
            >
              <div className="flex flex-row mb-4 gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
                <Search className='w-4 h-5' />
                Intelligent Features
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title & Subtitle */}
        <AnimatePresence>
          {showSkeletons ? (
            <div key="skeleton-header" className="flex flex-col items-center text-center mb-12">
              <div className="h-10 w-3/4 max-w-lg bg-gray-200 rounded mb-4 animate-pulse"></div>
              <div className="h-4 w-full max-w-xl bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-full max-w-lg bg-gray-200 rounded animate-pulse"></div>
            </div>
          ) : (
            <motion.div
              key="actual-header"
              className="flex flex-col items-center text-center mb-12 md:mb-16 font-[Arial_Rounded_MT_Bold]"
              {...textFadeInProps}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Voyager AI <span className="text-[#2D7DD2]">Core Product Features</span>
              </h2>
              <p className="text-gray-600 max-w-2xl px-4 font-[Arial]">
                Built for the Financial Industry, Voyager AI addresses a wide range of compliance challenges, including AML/KYC, sanctions screening, data privacy, and more...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          {...sectionFadeInProps}
        >
          {showSkeletons ? (
            [...Array(6)].map((_, i) => (
              <div key={`skeleton-${i}`} className="bg-white rounded-3xl shadow-lg p-6 h-64 border border-gray-100">
                <div className="mb-4 h-8 w-8 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                </div>
              </div>
            ))
          ) : (
            featureCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                animate={{
                  scale: activeCardIndex === index ? 1.05 : 1,
                  boxShadow: activeCardIndex === index ? "0 12px 20px rgba(0, 0, 0, 0.15)" : "0 4px 6px rgba(0, 0, 0, 0.1)",
                  opacity: isInView ? 1 : 0,
                  transition: {
                    duration: isMobile ? 0.3 : 0.5,
                    delay: isInView ? (isMobile ? 0.15 + index * 0.05 : 0.2 + index * 0.08) : 0,
                    ease: "easeOut",
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
                  transition: { duration: isMobile ? 0.15 : 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className="rounded-3xl" 
                style={{ 
                  boxShadow: activeCardIndex === index ? undefined : "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <Card className="shadow-lg h-64 rounded-3xl overflow-hidden border border-transparent hover:border-gray-200 transition-colors duration-300">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                      transition={{ duration: isMobile ? 0.3 : 0.5, ease: "easeOut" }}
                    >
                      {card.icon}
                    </motion.div>

                    <div className="flex-grow space-y-3">
                      <motion.h3
                        className="text-lg font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                        transition={{ 
                          duration: isMobile ? 0.3 : 0.5, 
                          delay: isMobile ? 0.05 : 0.1, 
                          ease: "easeOut" 
                        }}
                      >
                        {card.title}
                      </motion.h3>

                      <div className="text-gray-600 text-sm/relaxed font-[Arial]">
                        {animationComplete ? (
                          <>
                            {card.descriptionParts[0]}
                            {card.descriptionParts[1] && (
                              <>
                                <br />
                                {card.descriptionParts[1]}
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: animationPhase >= 2 ? 1 : 0 }}
                              transition={{ duration: isMobile ? 0.25 : 0.4 }}
                            >
                              {card.descriptionParts[0]}
                            </motion.span>

                            {card.descriptionParts[1] && (
                              <>
                                <br />
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: animationPhase >= 3 ? 1 : 0 }}
                                  transition={{ duration: isMobile ? 0.25 : 0.4 }}
                                >
                                  {card.descriptionParts[1]}
                                </motion.span>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeCardIndex !== null && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.3 }}
            className="fixed inset-0 bg-black/20 z-5"
            onClick={() => setActiveCardIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}