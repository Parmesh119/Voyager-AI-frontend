import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRef, useState } from "react";
import BecomePartnerModal from '@/components/BecomePartnerModal';
import { useNavigate } from 'react-router-dom';

export default function PartnerWithVoyagerAI() {
    const navigate = useNavigate()
    const [isBecomePartnerModalOpen, setIsBecomePartnerModalOpen] = useState(false)


    const handleCloseBecomePartnerModal = () => {
        setIsBecomePartnerModalOpen(false)
    }

    const ctaVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
    };

    const headingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
    };
    
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.45, 0.15, 1.0] } }
    };

    const ctaRef = useRef(null);
    const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

    const isMobileDevice = () => {
        return window.matchMedia('(max-width: 767px)').matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile|Silk|Kindle|BB10|PlayBook|MeeGo|Tizen|Palm|Nokia/i.test(navigator.userAgent);
    };


    const handleBecomePartner = () => {
        if (isMobileDevice()) {
            // For mobile, navigate to the page with replace: true
            navigate('/become-partner', { replace: true });
        } else {
            // For desktop, open modal
            setIsBecomePartnerModalOpen(true);
        }
    };

    return (
        <>
            <div className="w-full mb-24">
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
                        <Button
                            onClick={handleBecomePartner}
                            variant="secondary"
                            size="lg"
                            className="bg-white font-[Arial] text-[#2D7DD2] hover:bg-gray-100 font-bold text-base px-8 py-3"
                        >
                            Become a Partner
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
            <BecomePartnerModal isOpen={isBecomePartnerModalOpen} onClose={handleCloseBecomePartnerModal} />

        </>
    )
}
