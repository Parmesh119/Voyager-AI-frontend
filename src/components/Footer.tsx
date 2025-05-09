import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { NavItem } from './Navbar';
import { motion } from 'framer-motion';
import { useState } from 'react';
import RequestDemoModal from '@/components/RequestDemoModal';
import BecomePartnerModal from '@/components/BecomePartnerModal';
import ContactSalesModal from './ContactSalesModal';
import { NavLink, useNavigate } from 'react-router-dom'

export function Footer() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isBecomePartnerModalOpen, setIsBecomePartnerModalOpen] = useState(false);
  const [isContactSalesModalOpen, setIsContactSalesModalOpen] = useState(false);
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonHover = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const isMobileDevice = () => {
    return window.matchMedia('(max-width: 767px)').matches ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile|Silk|Kindle|BB10|PlayBook|MeeGo|Tizen|Palm|Nokia/i.test(navigator.userAgent);
  };


  const handleBecomePartner = () => {
    if (isMobileDevice()) {
      navigate('/become-partner', { replace: true });
    } else {
      setIsBecomePartnerModalOpen(true);
    }
  };

  const handleRequestDemo = () => {
    if (isMobileDevice()) {
      navigate('/request-demo', { replace: true });
    } else {
      setIsRequestModalOpen(true);
    }
  };

  const handleContactSales = () => {
    if (isMobileDevice()) {
      navigate('/contact-sales', { replace: true });
    } else {
      setIsContactSalesModalOpen(true);
    }
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
  };

  const handleCloseBecomePartnerModal = () => {
    setIsBecomePartnerModalOpen(false);
  };

  const handleCloseContactSalesModal = () => {
    setIsContactSalesModalOpen(false);
  };

  return (
    <>
      <footer className="w-full bg-[#0A1628] text-white overflow-hidden" >
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
              className="text-white/90 max-w-2xl mx-auto mb-6 md:mb-8 text-sm sm:text-base font-[Arial]"
            >
              Voyager AI empowers compliance teams with AI-augmented tools{' '}
              <span className="hidden md:inline"><br /></span>
              and utilize AI for skill augmentation in a way never before possible.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-sm md:text-md"
                  onClick={handleBecomePartner}
                >
                  Become a Partner
                </Button>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-sm md:text-md"
                  onClick={handleRequestDemo}
                >
                  Request a Demo
                </Button>
              </motion.div>
              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  onClick={handleContactSales}
                  size="lg"
                  className="w-full sm:w-auto font-[Arial] bg-white hover:bg-gray-100 text-blue-700 font-bold text-sm md:text-md"
                >
                  Contact Sales
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

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
                <NavLink to="http://learn.voyagercx.ai/" replace={true}><li>Blog</li></NavLink>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white">
                <NavLink to="/leadership"><li>Leadership</li></NavLink>
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

      <RequestDemoModal isOpen={isRequestModalOpen} onClose={handleCloseRequestModal} />
      <BecomePartnerModal isOpen={isBecomePartnerModalOpen} onClose={handleCloseBecomePartnerModal} />
      <ContactSalesModal isOpen={isContactSalesModalOpen} onClose={handleCloseContactSalesModal} />
    </>
  );
}