  import { Search, BookOpen } from 'lucide-react';
  import { motion, useScroll, useTransform } from 'framer-motion';
  import { useRef } from 'react';
  import Comparison from '@/assets/Architecture/Comparison';
  import Horizon from '@/assets/Architecture/Horizon';
  import Analysis from '@/assets/Architecture/Analysis';
  import DomainCore from '@/assets/Architecture/DomainCore';
  import Knowledge from '@/assets/Architecture/Knowledge';

  export function Architecture() {
    // Refs for scroll animations
    const domainSectionRef = useRef(null);
    const knowledgeSectionRef = useRef(null);
    
    // Domain Core animations
    const { scrollYProgress: domainScrollProgress } = useScroll({
      target: domainSectionRef,
      offset: ["start end", "end start"]
    });
    
    const domainScale = useTransform(domainScrollProgress, [0, 0.3, 0.6], [0.8, 1, 1]);
    const domainOpacity = useTransform(domainScrollProgress, [0, 0.3, 0.6], [0, 1, 1]);
    
    // Knowledge Core animations
    const { scrollYProgress: knowledgeScrollProgress } = useScroll({
      target: knowledgeSectionRef,
      offset: ["start end", "end start"]
    });
    
    const knowledgeScale = useTransform(knowledgeScrollProgress, [0, 0.4, 0.7], [0.8, 1, 1]);
    const knowledgeOpacity = useTransform(knowledgeScrollProgress, [0, 0.4, 0.7], [0, 1, 1]);

    const sectionVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    };

    const agentContainerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const agentItemVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut"
        }
      }
    };


    const slideInLeftVariants = {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    };

    const slideInRightVariants = {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    };


    return (
      <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden">
        <div className="container mx-auto max-w-6xl">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={agentContainerVariants}
            className="flex flex-col items-center"
          >
              <motion.div
                  variants={itemVariants}
                  className="flex justify-center mb-8"
              >
                  <div className="flex flex-row gap-2 px-6 py-1 bg-[#9DC22333] text-[#2e8318] rounded-full text-sm font-medium">
                      <Search className='h-5 w-4' />
                      Knowledge Database
                  </div>
              </motion.div>

              <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl text-center mb-4 font-[Arial_Rounded_MT_Bold]"
              >
                  <span className='font-bold'>Understanding <span className="text-[#2D7DD2]">the Architecture</span></span>
              </motion.h2>

              <motion.p
                  variants={itemVariants}
                  className="text-gray-600 text-center mb-16 max-w-2xl mx-auto font-[Arial]"
              >
                  Let's Go Beyond the layers of Voyager to understand how it enables the ability to explore knowledge.
              </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-20 gap-24"
            initial="hidden"
            whileInView="visible"
            
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <motion.div
              className="flex flex-col sm:flex-row gap-12 mb-8 md:mb-0 w-full"
              variants={agentContainerVariants}
              initial="hidden"
              
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div variants={agentItemVariants}>
                  <Comparison />
              </motion.div>

              <motion.div variants={agentItemVariants}>
                  <Horizon />
              </motion.div>

              <motion.div variants={agentItemVariants}>
                  <Analysis />
              </motion.div>
            </motion.div>

            <motion.div
              className="text-gray-600 text-md w-full md:w-full mx-auto md:mx-0 text-center md:text-justify font-[Arial]"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              Meet your digital compliance guardians. These intelligent agents don't just read regulations–they breathe them. Transforming complex rules into actionable insights, they're the vigilant sentinels protecting your financial institution's integrity.
            </motion.div>
          </motion.div>


          <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 items-center mb-16" ref={domainSectionRef}>
            <motion.div
              className="relative lg:w-[500px] lg:mr-0 mr-12 w-[450px] h-[350px] lg:h-[381px]"
              style={{ 
                scale: domainScale,
                opacity: domainOpacity
              }}
            >
              <DomainCore />
            </motion.div>

            <motion.div
              className="max-w-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRightVariants}
            >
              <p className="text-gray-600 text-lg font-[Arial]">
                Our Domain-Focused database is an infinite library<br /> of wisdom. No matter what type of financial<br /> institution, the knowledge has already been curated<br /> and primed to support depth and accuracy far<br /> beyond any generic AI!
              </p>
            </motion.div>
          </div>

          <div className="flex lg:flex-row-reverse flex-col gap-20 lg:pl-48 items-center text-justify m-auto" ref={knowledgeSectionRef}>
            <motion.div
              className="shadow-lg bg-[#75AA00] rounded-2xl order-1 md:order-2 w-full lg:w-1/2 text-center p-12"
              style={{ 
                scale: knowledgeScale,
                opacity: knowledgeOpacity
              }}
            >
              <h3 className="text-white text-4xl font-bold mb-6"><span className='font-[Arial]'>Knowledge Core</span></h3>
              <Knowledge />
            </motion.div>

            <motion.div
              className="order-2 md:order-1 lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeftVariants}
            >
              <p className="text-gray-600 text-lg font-[Arial]">
                We've created a secure vault where your existing documents are AI-empowered,
                compliant, and intelligent, allowing them to work smarter, not<br/> harder. We offer
                many options, from on-premises to cloud, ensuring your FI's core knowledge remains
                under your control.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    );
  }

  const IconExample = () => {
    return (
      <div className="bg-blue-600 flex items-center justify-center h-40 w-40 rounded">
        <BookOpen className="text-white" size={80} />
      </div>
    );
  };

  export default IconExample;