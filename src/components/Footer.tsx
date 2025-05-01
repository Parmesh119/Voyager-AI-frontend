import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { NavItem } from './Navbar';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Footer() {
  const ctaSectionRef = useRef(null);
  const footerContentRef = useRef(null);

  const { scrollYProgress: scrollYProgressCta } = useScroll({
    target: ctaSectionRef,
    offset: ["start end", "center center"] // Trigger earlier for parallax
  });

   const { scrollYProgress: scrollYProgressFooter } = useScroll({
    target: footerContentRef,
    offset: ["start end", "end end"] // Trigger as footer content scrolls
  });


  // Parallax for CTA heading - more subtle effect
  const parallaxXHeading = useTransform(scrollYProgressCta, [0, 1], [-90, 10]);
  // Parallax for Footer columns - slight opposing movement
  const parallaxXCol1 = useTransform(scrollYProgressFooter, [0, 1], [-20, 20]);
  const parallaxXCol2 = useTransform(scrollYProgressFooter, [0, 1], [15, -15]);
  const parallaxXCol3 = useTransform(scrollYProgressFooter, [0, 1], [-10, 10]);
  const parallaxXCol4 = useTransform(scrollYProgressFooter, [0, 1], [25, -25]);


  const ctaContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
  };

  const ctaItemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Smooth ease out cubic
      },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
    }
  };

  const buttonGroupVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3, // Start after text fades in
      },
    },
     exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
  };

   const buttonItemVariant = {
     hidden: { opacity: 0, scale: 0.7 },
     visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 12 } },
     exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.2 }
    }
   };


   const footerContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.15, // Stagger columns
      },
    },
      exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
  };

   const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
     exit: {
        opacity: 0,
        y: -30,
        transition: { duration: 0.3 }
    }
  };

   const bottomBarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5, // Delay until columns are likely visible
        duration: 0.7,
        ease: 'circOut'
      }
    },
     exit: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.3 }
    }
   };


  return (
    <footer className="w-full bg-[#0A1628] text-white overflow-hidden">
      {/* CTA Section */}
      <motion.div
        ref={ctaSectionRef}
        className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#02B6EA] to-[#A4C31A]"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.3 }}
        variants={ctaContainerVariants}
      >
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2
            style={{ x: parallaxXHeading }}
            variants={ctaItemVariants}
            exit="exit"
            className="text-3xl md:text-4xl mb-4 font-[Arial_Rounded_MT_Bold]"
          >
            <span className='font-bold'>Ready to Transform Your Banking Compliance?</span>
          </motion.h2>
          <motion.p
             variants={ctaItemVariants}
             exit="exit"
             className="text-white/90 max-w-2xl mx-auto mb-8 font-[Arial]"
           >
            Voyager AI empowers compliance teams with AI-augmented tools<br /> and utilize AI for skill augmentation in a way never before possible.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={buttonGroupVariants} // Use button group variants here
            exit="exit"
           >
            <motion.div variants={buttonItemVariant} exit="exit">
                <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Become a Partner</Button>
            </motion.div>
            <motion.div variants={buttonItemVariant} exit="exit">
                <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Request a Demo</Button>
            </motion.div>
            <motion.div variants={buttonItemVariant} exit="exit">
                <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Contact Sales</Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Content */}
      <motion.div
        ref={footerContentRef}
        className="container mx-auto py-16 p-4"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }} // Trigger when just entering viewport
        variants={footerContentVariants}
      >
        <div className="flex flex-col md:flex-row mb-6 justify-between font-[Arial] gap-8 md:gap-4">
          <motion.div style={{ x: parallaxXCol1 }} variants={columnVariants} exit="exit">
            <h3 className="text-xl font-bold mb-4">Voyager AI</h3>
            <p className="text-white font-[Arial]">
              Transforming complex regulatory<br /> requirements into simplified, automated<br /> workflows—reducing compliance costs by up<br /> to 90% while eliminating human error.
            </p>
          </motion.div>

          <motion.div style={{ x: parallaxXCol2 }} variants={columnVariants} exit="exit">
            <h4 className="font-semibold mb-4">Solution Segments</h4>
            <ul className="space-y-2 text-white">
              <li>Regulatory Monitoring</li>
              <li>Risk Assessment</li>
              <li>Audit Documentation</li>
            </ul>
          </motion.div>

          <motion.div style={{ x: parallaxXCol3 }} variants={columnVariants} exit="exit">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Whitepapers</li>
              <li>Documentation</li>
            </ul>
          </motion.div>

          <motion.div style={{ x: parallaxXCol4 }} variants={columnVariants} exit="exit">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white">
              <li>Leadership</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/40 pt-8 font-[Arial] flex flex-col md:flex-row justify-between items-center gap-4"
          variants={bottomBarVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-white/80 text-sm font-[Arial]">
            © 2025 Voyager AI. All rights reserved.
          </div>
          <div className="flex gap-6 md:gap-16 lg:gap-28 lg:mr-10 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
          </div>
           <motion.div
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                <NavItem href="#top" className='text-decoration-none'>
                <button
                    className="cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="h-8 w-8 bg-white/20 hover:bg-white/30 transition-colors duration-200 rounded-full p-1" />
                </button>
                </NavItem>
           </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}