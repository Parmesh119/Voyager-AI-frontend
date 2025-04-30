import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from '@/components/ui/button';
import { UserRound } from 'lucide-react';
import AWS from '@/assets/Partners/AWS.png';
import GoogleCloud from '@/assets/Partners/GoogleCloud.png';
import August_Brown from "@/assets/Partners/August_Brown.png";
import MS_AZ from "@/assets/Partners/MS_AZ.png";
import FOR_M from "@/assets/Friends/FOR_M.png";
import Gener8tor from "@/assets/Friends/Generator.png";
import WISC from "@/assets/Friends/WISC.png";

export function Partners() {
  const sectionRef = useRef(null);
  const partnersRef = useRef(null);
  const friendsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const isPartnersInView = useInView(partnersRef, { once: true, amount: 0.2 });
  const isFriendsInView = useInView(friendsRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });
  
  
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
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.45, 0.15, 1.0]
      }
    }
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.6,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="partnerships" className="w-full py-20 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-20"
          ref={partnersRef}
          initial="hidden"
          animate={isPartnersInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            variants={badgeVariants}
          >
            <span className='flex flex-row gap-2'><UserRound className='h-5 w-4 border-dark' /> Partners</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]"
            variants={headingVariants}
          >
            <span className='font-bold'>Who we're <span className="text-[#2D7DD2]">partnered with</span></span>
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto font-[Arial]"
            variants={textVariants}
          >
            Lorem ipsum Lorem ipsum Lorem ipsum
          </motion.p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mt-12 opacity-60"
            variants={containerVariants}
          >
            <motion.img 
              src={AWS} 
              alt="AWS" 
              className="h-36 w-auto mx-auto" 
              variants={logoVariants}
              whileHover={{ scale: 1.05, opacity: 0.8, transition: { duration: 0.3 } }}
            />
            <motion.img 
              src={GoogleCloud} 
              alt="Google Cloud" 
              className="h-32 mx-auto w-full" 
              variants={logoVariants}
              whileHover={{ scale: 1.05, opacity: 0.8, transition: { duration: 0.3 } }}
            />
            <motion.img 
              src={August_Brown} 
              alt="August Brown" 
              className="h-full w-full mx-auto" 
              variants={logoVariants}
              whileHover={{ scale: 1.05, opacity: 0.8, transition: { duration: 0.3 } }}
            />
            <motion.img 
              src={MS_AZ} 
              alt="Microsoft Azure" 
              className="h-full w-full mx-auto" 
              variants={logoVariants}
              whileHover={{ scale: 1.05, opacity: 0.8, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="text-center mb-20"
          ref={friendsRef}
          initial="hidden"
          animate={isFriendsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            variants={badgeVariants}
          >
            <span className='flex flex-row gap-2'><UserRound className='h-5 w-4 border-bold' />Friends</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl mb-12 font-[Arial_Rounded_MT_Bold]"
            variants={headingVariants}
          >
            <span className='font-bold'>We've got <span className="text-[#2D7DD2]">acolades from</span></span>
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center opacity-60"
            variants={containerVariants}
          >
            <motion.img 
              src={FOR_M} 
              alt="FOR-M by mke tech" 
              className="h-28 w-64 mx-auto" 
              variants={logoVariants}
              whileHover={{ scale: 1.05, opacity: 0.8, transition: { duration: 0.3 } }}
            />
            <motion.img 
              src={Gener8tor} 
              alt="gener8tor" 
              className="h-28 w-64 mx-auto" 
              variants={logoVariants}
              whileHover={{ scale: 1.05, opacity: 0.8, transition: { duration: 0.3 } }}
            />
            <motion.img 
              src={WISC} 
              alt="WISCONSIN ECONOMIC DEVELOPMENT" 
              className="h-28 w-64 mx-auto" 
              variants={logoVariants}
              whileHover={{ scale: 1.05, opacity: 0.8, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full">
        <motion.div
          className="bg-[#007ABA] text-white w-full py-28 px-0 text-center"
          ref={ctaRef}
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={ctaVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl mb-4 font-[Arial_Rounded_MT_Bold]"
            variants={headingVariants}
          >
            <span className='font-bold'>Partner With Voyager AI</span>
          </motion.h2>
          <motion.p
            className="text-white/90 max-w-2xl mx-auto mb-8 lg:p-0 p-4 font-[Arial]"
            variants={textVariants}
          >
            Built for the Financial Industry, Voyager AI addresses a wide range of compliance challenges, including AML/KYC, sanctions screening, data privacy, and more...
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Button variant="secondary" size="lg" className="bg-white font-[Arial] text-[#2D7DD2] hover:bg-gray-100 font-bold text-base">
              Become a Partner
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}