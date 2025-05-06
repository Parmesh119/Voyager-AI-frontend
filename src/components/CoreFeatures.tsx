import { Search, FileLock2, BriefcaseBusiness, Megaphone, BrainCog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PdfIcon from '@/assets/CoreFeatures/PdfIcon';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'; // Import parallax hooks

export function CoreFeatures() {
  const [loading, setLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });

  // --- Parallax Setup ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Track scroll from when bottom enters to when top leaves
  });

  // Map scroll progress to Y transform values for parallax
  // Title/Subtitle moves slightly faster upwards
  const parallaxYHeader = useTransform(scrollYProgress, [0, 1], [50, -50]);
  // Cards grid moves slightly slower upwards
  const parallaxYGrid = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  // --- End Parallax Setup ---


  useEffect(() => {
    if (isInView) {
      const loadingTimer = setTimeout(() => {
        setLoading(false);
        const phase1Timer = setTimeout(() => {
          setAnimationPhase(1);

          // Phase 2: Show first line of description (slightly longer delay for smoothness)
          const phase2Timer = setTimeout(() => {
            setAnimationPhase(2);

            // Phase 3: Show second line of description
            const phase3Timer = setTimeout(() => {
              setAnimationPhase(3);

              // Mark animation as complete after all phases
              setTimeout(() => {
                setAnimationComplete(true);
              }, 500);
            }, 600); // Increased delay

            return () => clearTimeout(phase3Timer);
          }, 600); // Increased delay

          return () => clearTimeout(phase2Timer);
        }, 300); // Short delay after skeleton disappears

        return () => clearTimeout(phase1Timer);
      }, 500); // Base loading simulation time after entering view

      return () => clearTimeout(loadingTimer);
    } else {
      // If not in view, ensure loading is true (for skeleton)
      setLoading(true);
      setAnimationPhase(0); // Reset animation phase if it goes out of view (if once: false)
      setAnimationComplete(false);
    }
  }, [isInView]); // Rerun effect when isInView changes


  const cardVariants = {
    normal: {
      scale: 1,
      zIndex: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 400, damping: 30 } // Smoother spring
    },
    active: {
      scale: 1.05,
      zIndex: 10,
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 400, damping: 30 } // Smoother spring
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
        <strong key="part1">Seamlessly translate compliance<br /> updates into action.</strong>,
        <> Ensure regulatory compliance through automated policy updates and integration<br /> with your institution's policy store.</>
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

  // Common initial/animate props for fade-in effect based on isInView
  const sectionFadeInProps = {
    initial: { opacity: 0 },
    animate: { opacity: isInView ? 1 : 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  // Updated to remove y animation, as parallax handles it
  const textFadeInProps = {
    initial: { opacity: 0 },
    animate: { opacity: isInView ? 1 : 0 },
    transition: { duration: 0.7, delay: isInView ? 0.2 : 0, ease: "easeOut" }
  }

  const showSkeletons = loading; // Show skeletons if loading is true (covers initial load and before isInView)

  return (
    <section ref={sectionRef} id="features" className="w-full py-24 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Badge - Conditionally render skeleton or actual content */}
        <AnimatePresence>
          {showSkeletons ? (
            <div key="skeleton-badge" className="flex justify-center mb-4">
              <div className="h-8 w-40 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          ) : (
            <motion.div
              key="actual-badge"
              className="flex justify-center"
              // Apply parallax style to the badge container
              style={{ y: parallaxYHeader }}
              {...sectionFadeInProps} // Apply fade-in based on isInView
            >
              <div className="flex flex-row mb-4 gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
                <Search className='w-4 h-5' />
                Intelligent Features
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title & Subtitle - Conditionally render skeleton or actual content */}
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
              className="flex flex-col items-center text-center mb-12 font-[Arial_Rounded_MT_Bold]"
              // Apply parallax style to the header container
              style={{ y: parallaxYHeader }}
              {...textFadeInProps} // Apply fade-in based on isInView (y animation removed)
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Voyager AI <span className="text-[#2D7DD2]">Core Product Features</span>
              </h2>
              <p className="text-gray-600 max-w-2xl font-[Arial]">
                Built for the Financial Industry, Voyager AI addresses a wide range of compliance<br /> challenges, including AML/KYC, sanctions screening, data privacy, and more...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cards Grid - Conditionally render skeletons or actual cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          // Apply parallax to the grid container
          style={{ y: parallaxYGrid }}
        >
          {showSkeletons ? (
            [...Array(6)].map((_, i) => (
              <div key={`skeleton-${i}`} className="bg-white rounded-3xl shadow-lg p-6 h-64 border border-gray-100">
                {/* Use white bg for consistency, add subtle border */}
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
                custom={index} // For potential stagger
                initial={{
                  // Removed y animation here, parallax grid handles vertical movement
                  opacity: 0,
                  scale: 0.95 // Keep initial scale down for pop-in effect
                }}
                animate={{
                  // Keep active state animations
                  scale: activeCardIndex === index ? 1.05 : 1,
                  boxShadow: activeCardIndex === index ? "0 12px 20px rgba(0, 0, 0, 0.15)" : "0 4px 6px rgba(0, 0, 0, 0.1)", // Ensure normal boxShadow is reapplied
                  opacity: isInView ? 1 : 0, // Fade based on view
                  transition: {
                    duration: 0.5,
                    delay: isInView ? 0.2 + index * 0.08 : 0, // Stagger delay based on view
                    ease: "easeOut",
                  },
                }}
                whileHover={!showSkeletons ? { // Prevent hover effect on skeletons (though they won't exist here)
                  scale: 1.05,
                  boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 } // Faster hover transition
                } : {}}
                whileTap={!showSkeletons ? { scale: 0.98 } : {}} // Slightly less intense tap
                className=" rounded-3xl" 
                 style={{ 
                    boxShadow: activeCardIndex === index ? undefined : "0 4px 6px rgba(0, 0, 0, 0.1)"
                 }}
              >
                <Card className="shadow-lg h-64 rounded-3xl overflow-hidden border border-transparent hover:border-gray-200 transition-colors duration-300">
                  <CardContent className="pt-6 flex flex-col h-full">
                    {/* Card Content Animations remain largely the same, triggered by animationPhase */}
                    <motion.div
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {card.icon}
                    </motion.div>

                    <div className="flex-grow space-y-3">
                      <motion.h3
                        className="text-lg font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      >
                        {card.title}
                      </motion.h3>

                      <div className="text-gray-600 text-sm/relaxed font-[Arial]">
                        {/* Phased description rendering based on animationComplete */}
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
                              transition={{ duration: 0.4 }}
                            >
                              {card.descriptionParts[0]}
                            </motion.span>

                            {card.descriptionParts[1] && (
                              <>
                                <br />
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: animationPhase >= 3 ? 1 : 0 }}
                                  transition={{ duration: 0.4 }}
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
            key="overlay" // Add key for AnimatePresence
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 z-5" // Slightly darker overlay, adjusted z-index
            onClick={() => setActiveCardIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}