import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from '@/components/ui/button';
import { UserRound } from 'lucide-react';
import AWS from '@/assets/Partners/AWS.png';
import GoogleCloud from '@/assets/Partners/GoogleCloud.png';
import August_Brown from "@/assets/Partners/August_Brown.png";
import MS_AZ from "@/assets/Partners/MS_AZ.png";
import FOR_M from "@/assets/Friends/FOR_M.png";
import Gener8tor from "@/assets/Friends/Generator.png";
import WISC from "@/assets/Friends/WISC.png";

type PartnerLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

const PartnerLogo = ({ src, alt, className }: PartnerLogoProps) => (
  <motion.img
    src={src}
    alt={alt}
    className={`flex-shrink-0 w-auto h-24 md:h-44 mx-8 ${className || ''}`} // Added padding mx-8
    whileHover={{ scale: 1.05, opacity: 1 }}
    transition={{ duration: 0.3 }}
    style={{ opacity: 0.7 }} // Start with slightly lower opacity
  />
);

type FriendLogoProps = {
  src: string;
  alt: string;
  className?: string;
};

const FriendLogo = ({ src, alt, className }: FriendLogoProps) => (
  <motion.img
    src={src}
    alt={alt}
    className={`flex-shrink-0 w-auto h-20 md:h-32 mx-10 ${className || ''}`} // Added padding mx-8
    whileHover={{ scale: 1.05, opacity: 1 }}
    transition={{ duration: 0.3 }}
    style={{ opacity: 0.7 }} // Start with slightly lower opacity
  />
);

export function Partners() {
  const sectionRef = useRef(null);
  const partnersIntroRef = useRef(null);
  const friendsIntroRef = useRef(null);
  const ctaRef = useRef(null);
  const [isPartnersHovered, setIsPartnersHovered] = useState(false);
  const [isFriendsHovered, setIsFriendsHovered] = useState(false);

  const isPartnersIntroInView = useInView(partnersIntroRef, { once: true, amount: 0.2 });
  const isFriendsIntroInView = useInView(friendsIntroRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const partnersList = [
    { src: AWS, alt: "AWS" },
    { src: GoogleCloud, alt: "Google Cloud"}, // Slightly adjust height if needed
    { src: August_Brown, alt: "August Brown"},
    { src: MS_AZ, alt: "Microsoft Azure" },
  ];

  const friendsList = [
    { src: FOR_M, alt: "FOR-M by mke tech" }, // Adjust width
    { src: Gener8tor, alt: "gener8tor"},
    { src: WISC, alt: "WISCONSIN ECONOMIC DEVELOPMENT", },
  ];

  const badgeVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.45, 0.15, 1.0] } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  };

  // Define animation variants for the sliding containers
  const marqueeVariants = {
    animate: (direction: 'rtl' | 'ltr') => ({
      x: direction === 'rtl' ? ['0%', '-100%'] : ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40,
          ease: 'linear',
        },
      },
    }),
  };
  

  return (
    <section id="partnerships" className="w-full py-20 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-x-hidden" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-16"
          ref={partnersIntroRef}
          initial="hidden"
          animate={isPartnersIntroInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            variants={badgeVariants}
          >
            <span className='flex flex-row items-center gap-2'><UserRound className='h-5 w-4' /> Partners</span>
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
            
          </motion.p>
        </motion.div>

        {/* Partners Logos - Right to Left */}
        <div
          className="relative w-full overflow-hidden mb-20"
          onMouseEnter={() => setIsPartnersHovered(true)}
          onMouseLeave={() => setIsPartnersHovered(false)}
        >
          <motion.div
            className="flex flex-nowrap w-100"
            variants={marqueeVariants}
            custom="rtl" // Pass direction
            animate={isPartnersHovered ? "paused" : "animate"}
          >
            {/* Render logos twice for seamless loop */}
            {[...partnersList, ...partnersList].map((partner, index) => (
              <PartnerLogo key={`partner-${index}`} src={partner.src} alt={partner.alt} />
            ))}
          </motion.div>
        </div>


        <motion.div
          className="text-center mb-16"
          ref={friendsIntroRef}
          initial="hidden"
          animate={isFriendsIntroInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            variants={badgeVariants}
          >
            <span className='flex flex-row items-center gap-2'><UserRound className='h-5 w-4' /> Friends</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl mb-6 font-[Arial_Rounded_MT_Bold]"
            variants={headingVariants}
          >
            <span className='font-bold'>We've got <span className="text-[#2D7DD2]">accolades from</span></span>
          </motion.h2>
           
        </motion.div>

        {/* Friends Logos - Left to Right */}
        <div
          className="relative w-full overflow-hidden mb-20 px-40"
          onMouseEnter={() => setIsFriendsHovered(true)}
          onMouseLeave={() => setIsFriendsHovered(false)}
        >
          <motion.div
            className="flex flex-nowrap px-40"
            variants={marqueeVariants}
            custom="ltr" // Pass direction
            animate={isFriendsHovered ? "paused" : "animate"}
          >
            {/* Render logos twice for seamless loop */}
            {[...friendsList, ...friendsList].map((friend, index) => (
              <FriendLogo key={`friend-${index}`} src={friend.src} alt={friend.alt}/>
            ))}
          </motion.div>
        </div>

      </div>

      <div className="w-full mt-10">
        <motion.div
          className="bg-[#007ABA] text-white w-full py-20 md:py-28 px-4 text-center"
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
            className="text-white/90 max-w-2xl mx-auto mb-8 font-[Arial]"
            variants={textVariants}
          >
            Built for the Financial Industry, Voyager AI addresses a wide range of compliance challenges, including AML/KYC, sanctions screening, data privacy, and more...
          </motion.p>
          <motion.div variants={buttonVariants}>
            <Button variant="secondary" size="lg" className="bg-white font-[Arial] text-[#2D7DD2] hover:bg-gray-100 font-bold text-base px-8 py-3">
              Become a Partner
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}