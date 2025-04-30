import { Card, CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function StrategicTools() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Staggered appearance animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Text headings animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  // Badge animation
  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Card animation with subtle parallax
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="flex justify-center mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={badgeVariants}
        >
          <div className="flex items-center gap-2 px-6 py-2 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
            <BriefcaseBusiness className="w-4 h-4" /> Strategic Tools
          </div>
        </motion.div>

        <div className="flex flex-col items-center mb-16 max-w-3xl mx-auto">
          <motion.div 
            className="grid lg:grid-cols-3 grid-col-1 gap-8 w-full max-w-3xl"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div 
              className="text-center"
              variants={headingVariants}
              custom={0}
            >
              <motion.h3 
                className="text-4xl font-bold bg-gradient-to-r from-[#6CC644] to-[#3EC6E0] text-transparent bg-clip-text"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Summarize
              </motion.h3>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={headingVariants}
              custom={1}
            >
              <motion.h3 
                className="text-4xl font-bold text-[#2D7DD2]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Analyze
              </motion.h3>
            </motion.div>
            <motion.div 
              className="text-center"
              variants={headingVariants}
              custom={2}
            >
              <motion.h3 
                className="text-4xl font-bold text-[#2D7DD2]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Recommend
              </motion.h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full mt-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <motion.div 
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="bg-white shadow-md rounded-3xl overflow-hidden w-full">
                <CardContent className="p-12 text-center">
                  <motion.p 
                    className="text-gray-500 text-lg font-bold tracking-normal leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    Our AI platform transforms complex regulatory requirements into<br/> simplified, automated workflows—reducing compliance costs by<br/> up to 90% while eliminating human error.
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}