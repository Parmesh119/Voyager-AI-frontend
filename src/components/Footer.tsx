import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { NavItem } from './Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import RequestDemoModal from '@/components/RequestDemo';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simple fade in variants for all elements
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5 
      } 
    }
  };
  
  // Button hover animation
  const buttonHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="w-full bg-[#0A1628] text-white overflow-hidden">
        {/* CTA Section */}
        <motion.div
          className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#02B6EA] to-[#A4C31A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="container mx-auto max-w-6xl text-center">
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl mb-4 font-[Arial_Rounded_MT_Bold]"
            >
              <span className='font-bold'>Ready to Transform Your Banking Compliance?</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-white/90 max-w-2xl mx-auto mb-8 font-[Arial]"
            >
              Voyager AI empowers compliance teams with AI-augmented tools<br /> and utilize AI for skill augmentation in a way never before possible.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
                <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Become a Partner</Button>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md"
                  onClick={handleOpenModal}
                >
                  Request a Demo
                </Button>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
                <Button variant="secondary" size="lg" className="font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-md">Contact Sales</Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          className="container mx-auto py-16 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row mb-6 justify-between font-[Arial] gap-8 md:gap-4">
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold mb-4">Voyager AI</h3>
              <p className="text-white font-[Arial]">
                Transforming complex regulatory<br /> requirements into simplified, automated<br /> workflows—reducing compliance costs by up<br /> to 90% while eliminating human error.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="font-semibold mb-4">Solution Segments</h4>
              <ul className="space-y-2 text-white">
                <li>Regulatory Monitoring</li>
                <li>Risk Assessment</li>
                <li>Audit Documentation</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-white">
                <li>Blog</li>
                <li>Case Studies</li>
                <li>Whitepapers</li>
                <li>Documentation</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
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
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
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
              whileHover={{ scale: 1.1 }}
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

      {/* Request Demo Modal */}
      <RequestDemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}