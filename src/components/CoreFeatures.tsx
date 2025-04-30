import { Search, FileLock2, BriefcaseBusiness, Megaphone, BrainCog } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PdfIcon from '@/assets/CoreFeatures/PdfIcon';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CoreFeatures() {
  const [loading, setLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  // Simulate loading time and control animation phases
  useEffect(() => {
    // Phase 0: Skeleton loading
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      
      // Phase 1: Show icons and titles
      setTimeout(() => {
        setAnimationPhase(1);
        
        // Phase 2: Show first line of description in all cards simultaneously
        setTimeout(() => {
          setAnimationPhase(2);
          
          // Phase 3: Show second line of description in all cards simultaneously
          setTimeout(() => {
            setAnimationPhase(3);
          }, 500);
        }, 500);
      }, 300);
    }, 2000);
    
    return () => clearTimeout(loadingTimer);
  }, []);

  const handleCardClick = (index: number) => {
    if (activeCardIndex === index) {
      setActiveCardIndex(null); // Collapse card if already active
    } else {
      setActiveCardIndex(index); // Expand clicked card
    }
  };

  const cardVariants = {
    normal: { 
      scale: 1,
      zIndex: 1,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    },
    active: { 
      scale: 1.05, 
      zIndex: 10,
      boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)"
    }
  };

  // Card data for mapping
  const featureCards = [
    {
      icon: <FileLock2 className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "Regulatory Briefs",
      descriptionParts: [
        <strong key="part1">Access clear, AI-powered summary alerts of regulatory changes.</strong>,
        <> Voyager AI (VAI) creates accurate, summarized updates on federal and state policies, ensuring you're always informed.</>
      ]
    },
    {
      icon: <PdfIcon />,
      title: "Policy Execution Engine",
      descriptionParts: [
        <strong key="part1">Seamlessly translate compliance<br /> updates into action.</strong>,
        <> VAI automates policy updates and integrates with your institution's policy store, ensuring regulatory compliance.</>
      ]
    },
    {
      icon: <BriefcaseBusiness className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "Institutional Awareness",
      descriptionParts: [
        <strong key="part1">An AI continuously refining itself from your live policies—in real time.</strong>,
        <> VAI continuously learns from your compliance data, refining risk models and adapting to your unique evolving regulatory environment.</>
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "Regulatory Insight Engine",
      descriptionParts: [
        <strong key="part1">Instantly explore and interpret the latest federal and state regulations.</strong>,
        <> VAI provides deep regulatory research and real-time insights, helping you stay compliant without manual effort.</>
      ]
    },
    {
      icon: <Megaphone className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "AI Compliance Advisor",
      descriptionParts: [
        <strong key="part1">Stay ahead of evolving regulations with AI-driven recommendations.</strong>,
        <> VAI analyzes your position and suggests precise compliance actions, helping you future-proof your compliance strategy.</>
      ]
    },
    {
      icon: <BrainCog className="h-8 w-8 text-[#1d801a] p-1.5 bg-[#e4f4be] rounded-lg" />,
      title: "On-Premise AI Engine",
      descriptionParts: [
        <strong key="part1">Compliance data, fully protected inside your secure environment. </strong>,
        <> VAI ensures secure, on-premise storage of policies, offering real-risk analysis maintaining complete regulatory and data security.</>
      ]
    }
  ];

  // Fade in animation for text elements
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="features" className="w-full py-24 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0]">
      <div className="container mx-auto max-w-6xl">
        <AnimatePresence>
          {!loading && (
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-row mb-4 gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
                <Search className='w-4 h-5' />
                Intelligent Features
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!loading && (
            <motion.div 
              className="flex flex-col items-center text-center mb-12 font-[Arial_Rounded_MT_Bold]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton loading cards - maintain consistent size with actual cards
            [...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-3xl shadow-lg p-6 h-64 animate-pulse">
                <div className="mb-4 h-8 w-8 bg-gray-300 rounded-lg"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-300 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                </div>
              </div>
            ))
          ) : (
            // Actual cards with animation
            featureCards.map((card, index) => (
              <motion.div
                key={index}
                onClick={() => handleCardClick(index)}
                variants={cardVariants}
                initial="normal"
                animate={activeCardIndex === index ? "active" : "normal"}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="cursor-pointer"
                whileHover={{ scale: activeCardIndex === null ? 1.02 : 1.05 }}
              >
                <Card className=" shadow-lg h-64"> {/* Fixed height to match skeleton */}
                  <CardContent className="pt-6">
                    {/* Icon - Always visible after loading */}
                    <motion.div 
                      className="mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {card.icon}
                    </motion.div>
                    
                    <span className='space-y-4'>
                      {/* Title - Appears first after loading */}
                      <motion.h3 
                        className="text-lg font-semibold mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: animationPhase >= 1 ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {card.title}
                      </motion.h3>
                      
                      {/* Description - Parts appear sequentially across all cards */}
                      <div className="text-gray-600 text-sm/6">
                        {/* First part of description */}
                        <motion.span
                          variants={fadeInVariants}
                          initial="hidden"
                          animate={animationPhase >= 2 ? "visible" : "hidden"}
                          transition={{ duration: 0.4 }}
                          className="inline-block"
                        >
                          {card.descriptionParts[0]}<br />
                        </motion.span>
                        
                        {/* Second part of description */}
                        <motion.span
                          variants={fadeInVariants}
                          initial="hidden"
                          animate={animationPhase >= 3 ? "visible" : "hidden"}
                          transition={{ duration: 0.4 }}
                          className="inline-block"
                        >
                          {card.descriptionParts[1]}
                        </motion.span>
                      </div>
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
      
      {/* Overlay to close active card when clicking outside */}
      {activeCardIndex !== null && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-10 z-0"
          onClick={() => setActiveCardIndex(null)}
        />
      )}
    </section>
  );
}