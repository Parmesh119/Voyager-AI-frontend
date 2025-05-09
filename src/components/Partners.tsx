import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
    className={`flex-shrink-0 w-auto h-12 sm:h-16 md:h-24 lg:h-32 mx-4 sm:mx-6 md:mx-8 ${className || ''}`}
    whileHover={{ scale: 1.05, opacity: 1 }}
    transition={{ duration: 0.3 }}
    style={{ opacity: 0.7 }}
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
    className={`flex-shrink-0 w-auto h-10 sm:h-14 md:h-20 lg:h-24 mx-4 sm:mx-6 md:mx-10 ${className || ''}`}
    whileHover={{ scale: 1.05, opacity: 1 }}
    transition={{ duration: 0.3 }}
    style={{ opacity: 0.7 }}
  />
);

export function Partners() {
  const sectionRef = useRef(null);
  const partnersIntroRef = useRef(null);
  const friendsIntroRef = useRef(null);
  const [isPartnersHovered, setIsPartnersHovered] = useState(false);
  const [isFriendsHovered, setIsFriendsHovered] = useState(false);

  const isPartnersIntroInView = useInView(partnersIntroRef, { once: true, amount: 0.2 });
  const isFriendsIntroInView = useInView(friendsIntroRef, { once: true, amount: 0.2 });

  const partnersList = [
    { src: AWS, alt: "AWS" },
    { src: GoogleCloud, alt: "Google Cloud" },
    { src: August_Brown, alt: "August Brown" },
    { src: MS_AZ, alt: "Microsoft Azure" },
  ];

  const friendsList = [
    { src: FOR_M, alt: "FOR-M by mke tech" },
    { src: Gener8tor, alt: "gener8tor" },
    { src: WISC, alt: "WISCONSIN ECONOMIC DEVELOPMENT" },
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

  const useSlowerAnimationForMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const marqueeVariants = {
    animate: (direction: 'rtl' | 'ltr') => ({
      x: direction === 'rtl' ? ['0%', '-100%'] : ['-100%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: useSlowerAnimationForMobile ? 60 : 40,
          ease: 'linear',
        },
      },
    }),
    paused: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    }
  };

  return (
    <section id="partnerships" className="w-full py-10 sm:py-14 md:py-20 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          ref={partnersIntroRef}
          initial="hidden"
          animate={isPartnersIntroInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-3 md:mb-4 px-4 sm:px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            variants={badgeVariants}
          >
            <span className='flex flex-row items-center gap-2'><UserRound className='h-4 w-4 md:h-5 md:w-4' /> Partners</span>
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-[Arial_Rounded_MT_Bold]"
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

        <div
          className="relative w-full overflow-hidden mb-10 md:mb-20"
          onMouseEnter={() => setIsPartnersHovered(true)}
          onMouseLeave={() => setIsPartnersHovered(false)}
          onTouchStart={() => setIsPartnersHovered(true)}
          onTouchEnd={() => setIsPartnersHovered(false)}
        >
          <motion.div
            className="flex flex-nowrap"
            variants={marqueeVariants}
            custom="rtl"
            animate={isPartnersHovered ? "paused" : "animate"}
          >
            {[...partnersList, ...partnersList].map((partner, index) => (
              <PartnerLogo key={`partner-${index}`} src={partner.src} alt={partner.alt} />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          ref={friendsIntroRef}
          initial="hidden"
          animate={isFriendsIntroInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-3 md:mb-4 px-4 sm:px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium"
            variants={badgeVariants}
          >
            <span className='flex flex-row items-center gap-2'><UserRound className='h-4 w-4 md:h-5 md:w-4' /> Friends</span>
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 font-[Arial_Rounded_MT_Bold]"
            variants={headingVariants}
          >
            <span className='font-bold'>We've got <span className="text-[#2D7DD2]">accolades from</span></span>
          </motion.h2>
        </motion.div>

        <div
          className="relative w-full overflow-hidden mb-10 md:mb-20"
          onMouseEnter={() => setIsFriendsHovered(true)}
          onMouseLeave={() => setIsFriendsHovered(false)}
          onTouchStart={() => setIsFriendsHovered(true)}
          onTouchEnd={() => setIsFriendsHovered(false)}
        >
          <motion.div
            className="flex flex-nowrap"
            variants={marqueeVariants}
            custom="ltr"
            animate={isFriendsHovered ? "paused" : "animate"}
          >
            {[...friendsList, ...friendsList].map((friend, index) => (
              <FriendLogo key={`friend-${index}`} src={friend.src} alt={friend.alt} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}