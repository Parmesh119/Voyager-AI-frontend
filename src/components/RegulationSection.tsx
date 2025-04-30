import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function RegulationSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Set to true after component mounts to trigger animations
    setIsInView(true);
  }, []);

  // Main title with typewriter effect
  const title = "Regulation: A Top Priority for Financial Institutions";
  const titleChars = title.split("");
  
  // Text content for the paragraphs
  const paragraph1 = "Recent Community State Banking Survey (CSBS) data reveals that regulatory compliance has become the top concern for financial institutions. The importance of this issue continues to grow, with concern levels rising from 77% in 2022 to 81% in 2023 in the CSBS Annual Survey.";
  const paragraph2 = "As regulations become increasingly complex and scrutiny intensifies, traditional compliance approaches are no longer sustainable.";
  const paragraph3 = "Financial institutions now require innovative solutions that can both scale with expanding regulatory demands and maintain consistent accuracy and efficiency.";

  // Split paragraphs into words
  const words1 = paragraph1.split(" ");
  const words2 = paragraph2.split(" ");
  const words3 = paragraph3.split(" ");

  // Typewriter animation for title
  const titleContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1
      }
    }
  };

  const titleCharVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut"
      }
    }
  };

  // Animation configuration for paragraphs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.018,
        delayChildren: 1.8 // Start after title animation completes
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#007ABA] text-white">
      <div className="container mx-auto max-w-6xl">
        <span className="font-bold">
          <motion.h2 
            className="text-3xl md:text-4xl text-center mb-12 font-[Arial_Rounded_MT_Bold]"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleContainerVariants}
          >
            {titleChars.map((char, index) => (
              <motion.span key={index} variants={titleCharVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        </span>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">CSBS Survey Reveals Growing Focus</h3>
            <motion.p 
              className="text-white/90 font-[Arial]"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {words1.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
                  {word === "Community" ? <u>{word}</u> : 
                   word === "State" ? <u>{word}</u> :
                   word === "Banking" ? <u>{word}</u> :
                   word === "Survey" ? <u>{word}</u> :
                   word === "(CSBS)" ? <u>{word}</u> : word}
                  {index === words1.indexOf("reveals") || 
                   index === words1.indexOf("for") || 
                   index === words1.indexOf("to") || 
                   index === words1.indexOf("2023") ? <br /> : " "}
                </motion.span>
              ))}
            </motion.p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Time for a New Approach</h3>
            <motion.p 
              className="text-white/90 font-[Arial]"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {words2.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
                  {word}
                  {index === words2.indexOf("scrutiny") ? <br /> : " "}
                </motion.span>
              ))}
            </motion.p>
            <motion.p 
              className="text-white/90 mt-4 font-[Arial]"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {words3.map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
                  {word}
                  {index === words3.indexOf("both") || 
                   index === words3.indexOf("consistent") ? <br /> : " "}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}