import { CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const aboutSectionRef = useRef(null);

  const sectionEntryVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const cardRevealVariant = {
    hidden: { clipPath: 'inset(10% 50% 90% 50% round 16px)', opacity: 0.5, scale: 0.95 },
    visible: {
      clipPath: 'inset(0% 0% 0% 0% round 16px)',
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.2
      }
    }
  };



  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-x-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionEntryVariant}
        >
          <motion.div variants={itemFadeUp} className="flex justify-center mb-8">
            <div className="flex flex-row gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              <BriefcaseBusiness className='w-4 h-5' />The Company
            </div>
          </motion.div>

          <motion.h2
            variants={itemFadeUp}
            className="text-3xl md:text-4xl text-center mb-12 font-[Arial_Rounded_MT_Bold]"
          >
            <span className='font-bold'>About <span className="text-[#2D7DD2]">Voyager AI</span></span>
          </motion.h2>

          <motion.div
            className="gap-8"
            variants={cardRevealVariant}
          >
            <div
              className="bg-white overflow-hidden transition-all duration-300"
              style={{ borderRadius: "16px" }}
            >
              <CardContent className="p-8 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Mission</h3>
                  <p className="text-gray-600 font-[Arial] leading-relaxed">
                    At Voyager AI, We are driven to empower financial institutions<br /> with the tools they need to navigate the ever-evolving<br /> regulatory landscape. Our mission is to be the trust partner in<br /> transforming compliance through innovative AI-Powered<br /> solutions.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">Expertise</h3>
                  <p className="text-gray-600 font-[Arial] leading-relaxed">
                    Our Team comprises of seasoned financial experts, data<br /> scientists, and regulatory specialists who bring a wealth of<br /> industry knowledge and technical expertise to your doorstep.<br /> Together, We are redefining the future of compliance, risk<br /> management, and innovate AI.
                  </p>
                </div>
              </CardContent>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}