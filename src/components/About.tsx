import { CardContent } from '@/components/ui/card';
import { BriefcaseBusiness } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const aboutSectionRef = useRef(null);
  const leadershipSectionRef = useRef(null);

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
        ease: [0.25, 1, 0.5, 1], // Faster start, smooth end
        delay: 0.2
      }
    }
  };

  const gridContainerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const leadershipCardVariant = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Custom spring-like ease
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
        {/* About Voyager AI Section */}
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

        {/* Leadership Section */}
        <motion.div
          ref={leadershipSectionRef}
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionEntryVariant}
        >
          <motion.div variants={itemFadeUp} className="flex justify-center mb-8">
            <div className="flex flex-row gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
              <BriefcaseBusiness className='h-5 w-4' /> The Company
            </div>
          </motion.div>

          <motion.h2
            variants={itemFadeUp}
            className="text-3xl md:text-4xl font-[Arial_Rounded_MT_Bold] text-center mb-4"
          >
            <span className='font-bold'>About Us: <span className="text-[#2D7DD2]">Leadership</span></span>
          </motion.h2>

          <motion.p
            variants={itemFadeUp}
            className="text-gray-600 text-center mb-12 font-[Arial] max-w-2xl mx-auto"
          >
            Meet our leadership team – industry veterans combining expertise in fintech, compliance, and AI to revolutionize regulatory solutions for financial institutions.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
            variants={gridContainerVariant}
          >
            {[
              'Aaron Colcord',
              'Joel Flores',
              'Palash Kapoor',
              'Jeff Hunter',
              'JD Gimzek'
            ].map((name) => (
              <motion.div
                className='flex flex-col gap-4 font-[Arial]'
                key={name}
                variants={leadershipCardVariant}
                whileHover={{ y: -6, scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 15 } }}
              >
                <span className='bg-gray-300 font-bold text-2xl py-28 text-center rounded-xl'>
                  Person
                </span>
                <div className='flex flex-col gap-2'>
                  <span className='font-bold text-black font-[Arial]'>
                    {name}
                  </span>
                  <span className="text-gray-600 text-sm">
                    Combining deep industry expertise with innovative thinking to transform financial compliance through AI-powered solutions.
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}