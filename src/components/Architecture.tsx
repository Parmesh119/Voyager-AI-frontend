import { Search, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion

export function Architecture() {

  // Animation variants for sections/elements
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
      hidden: { opacity: 1 }, // Parent doesn't fade, just orchestrates children
      visible: {
          opacity: 1,
          transition: {
              staggerChildren: 0.2 // Stagger animation for agent cards
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
        ease: [0.25, 0.1, 0.25, 1] // Custom ease for a smoother effect
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
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] overflow-hidden"> {/* Added overflow-hidden */}
      <div className="container mx-auto max-w-6xl">
        {/* Header Section with Animation */}
        <motion.div
           initial="hidden"
           animate="visible"
           variants={agentContainerVariants} // Use container for stagger delay if needed, or just simple fade
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

        {/* Agents Section with Animation */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-20 gap-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
          variants={sectionVariants} // Apply fade-up to the whole section container first
        >
          <motion.div
            className="flex flex-col sm:flex-row gap-12 mb-8 md:mb-0 w-full"
            variants={agentContainerVariants} // Use container variants to stagger children
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Comparison Agent SVG */}
             <motion.div variants={agentItemVariants}>
                 <svg width="203" height="168" viewBox="0 0 203 168" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
                    <g filter="url(#filter0_d_171_379_comp)">
                        <rect x="5" width="193" height="153" rx="20" fill="white" />
                        <rect x="5.5" y="0.5" width="192" height="152" rx="19.5" stroke="#EAEAEA" />
                    </g>
                    <text x="101.5" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" textAnchor="middle" fill="#333333">Comparison Agent</text>
                    <g transform="translate(67.5, 42.5)">
                        <path d="M25.803 15.4358C27.4973 10.4775 34.3483 10.3273 36.3571 14.9853L36.5271 15.4387L38.8136 22.1253C39.3377 23.6588 40.1844 25.0621 41.2969 26.2405C42.4093 27.419 43.7615 28.3451 45.2623 28.9565L45.8771 29.186L52.5638 31.4697C57.5221 33.164 57.6723 40.015 53.0171 42.0238L52.5638 42.1938L45.8771 44.4803C44.3431 45.004 42.9393 45.8506 41.7604 46.9631C40.5814 48.0755 39.6549 49.4279 39.0431 50.929L38.8136 51.541L36.53 58.2305C34.8356 63.1888 27.9846 63.339 25.9786 58.6838L25.803 58.2305L23.5193 51.5438C22.9957 50.0098 22.149 48.606 21.0366 47.4271C19.9241 46.2481 18.5717 45.3215 17.0706 44.7098L16.4586 44.4803L9.77197 42.1967C4.81081 40.5023 4.66064 33.6513 9.31864 31.6453L9.77197 31.4697L16.4586 29.186C17.9921 28.662 19.3954 27.8152 20.5738 26.7028C21.7523 25.5903 22.6784 24.2381 23.2898 22.7373L23.5193 22.1253L25.803 15.4358ZM53.8331 5.6665C54.3632 5.6665 54.8826 5.81519 55.3324 6.09567C55.7822 6.37615 56.1443 6.77718 56.3775 7.25317L56.5135 7.58467L57.5051 10.4917L60.415 11.4833C60.9462 11.6638 61.4118 11.9979 61.753 12.4433C62.0941 12.8887 62.2953 13.4254 62.3311 13.9852C62.3669 14.5451 62.2357 15.103 61.9541 15.5882C61.6725 16.0735 61.2532 16.4642 60.7493 16.7108L60.415 16.8468L57.508 17.8385L56.5163 20.7483C56.3355 21.2794 56.0012 21.7448 55.5556 22.0856C55.11 22.4265 54.5733 22.6274 54.0135 22.6629C53.4536 22.6984 52.8958 22.5669 52.4108 22.2851C51.9257 22.0033 51.5352 21.5838 51.2888 21.0798L51.1528 20.7483L50.1611 17.8413L47.2513 16.8497C46.7201 16.6692 46.2544 16.3351 45.9133 15.8897C45.5722 15.4443 45.371 14.9077 45.3352 14.3478C45.2994 13.7879 45.4306 13.23 45.7122 12.7448C45.9938 12.2595 46.4131 11.8688 46.917 11.6222L47.2513 11.4862L50.1583 10.4945L51.15 7.58467C51.341 7.02488 51.7025 6.53891 52.1837 6.19492C52.6649 5.85092 53.2416 5.66615 53.8331 5.6665Z" fill="#007ABA" />
                    </g>
                    <defs>
                        <filter id="filter0_d_171_379_comp" x="0" y="0" width="203" height="168" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_171_379" />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_379" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_379" result="shape" />
                        </filter>
                    </defs>
                </svg>
             </motion.div>

            {/* Horizon Agent SVG */}
            <motion.div variants={agentItemVariants}>
                <svg width="203" height="168" viewBox="0 0 203 168" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
                    <g filter="url(#filter0_d_171_379_horiz)">
                        <rect x="5" width="193" height="153" rx="20" fill="white" />
                        <rect x="5.5" y="0.5" width="192" height="152" rx="19.5" stroke="#EAEAEA" />
                    </g>
                    <text x="101.5" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" textAnchor="middle" fill="#333333">Horizon Agent</text>
                    <g transform="translate(67.5, 42.5)">
                         <path d="M25.803 15.4358C27.4973 10.4775 34.3483 10.3273 36.3571 14.9853L36.5271 15.4387L38.8136 22.1253C39.3377 23.6588 40.1844 25.0621 41.2969 26.2405C42.4093 27.419 43.7615 28.3451 45.2623 28.9565L45.8771 29.186L52.5638 31.4697C57.5221 33.164 57.6723 40.015 53.0171 42.0238L52.5638 42.1938L45.8771 44.4803C44.3431 45.004 42.9393 45.8506 41.7604 46.9631C40.5814 48.0755 39.6549 49.4279 39.0431 50.929L38.8136 51.541L36.53 58.2305C34.8356 63.1888 27.9846 63.339 25.9786 58.6838L25.803 58.2305L23.5193 51.5438C22.9957 50.0098 22.149 48.606 21.0366 47.4271C19.9241 46.2481 18.5717 45.3215 17.0706 44.7098L16.4586 44.4803L9.77197 42.1967C4.81081 40.5023 4.66064 33.6513 9.31864 31.6453L9.77197 31.4697L16.4586 29.186C17.9921 28.662 19.3954 27.8152 20.5738 26.7028C21.7523 25.5903 22.6784 24.2381 23.2898 22.7373L23.5193 22.1253L25.803 15.4358ZM53.8331 5.6665C54.3632 5.6665 54.8826 5.81519 55.3324 6.09567C55.7822 6.37615 56.1443 6.77718 56.3775 7.25317L56.5135 7.58467L57.5051 10.4917L60.415 11.4833C60.9462 11.6638 61.4118 11.9979 61.753 12.4433C62.0941 12.8887 62.2953 13.4254 62.3311 13.9852C62.3669 14.5451 62.2357 15.103 61.9541 15.5882C61.6725 16.0735 61.2532 16.4642 60.7493 16.7108L60.415 16.8468L57.508 17.8385L56.5163 20.7483C56.3355 21.2794 56.0012 21.7448 55.5556 22.0856C55.11 22.4265 54.5733 22.6274 54.0135 22.6629C53.4536 22.6984 52.8958 22.5669 52.4108 22.2851C51.9257 22.0033 51.5352 21.5838 51.2888 21.0798L51.1528 20.7483L50.1611 17.8413L47.2513 16.8497C46.7201 16.6692 46.2544 16.3351 45.9133 15.8897C45.5722 15.4443 45.371 14.9077 45.3352 14.3478C45.2994 13.7879 45.4306 13.23 45.7122 12.7448C45.9938 12.2595 46.4131 11.8688 46.917 11.6222L47.2513 11.4862L50.1583 10.4945L51.15 7.58467C51.341 7.02488 51.7025 6.53891 52.1837 6.19492C52.6649 5.85092 53.2416 5.66615 53.8331 5.6665Z" fill="#40B4C7" />
                    </g>
                    <defs>
                        <filter id="filter0_d_171_379_horiz" x="0" y="0" width="203" height="168" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_171_379" />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_379" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_379" result="shape" />
                        </filter>
                    </defs>
                </svg>
             </motion.div>

            {/* Analysis Agent */}
            <motion.div variants={agentItemVariants}>
                <svg width="203" height="168" className='mx-auto' viewBox="0 0 203 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_171_379_anal)">
                        <rect x="5" width="193" height="153" rx="20" fill="white" />
                        <rect x="5.5" y="0.5" width="192" height="152" rx="19.5" stroke="#EAEAEA" />
                    </g>
                    <text x="101.5" y="30" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" textAnchor="middle" fill="#333333">Analysis Agent</text>
                    <g transform="translate(67.5, 42.5)">
                         <path d="M25.803 15.4358C27.4973 10.4775 34.3483 10.3273 36.3571 14.9853L36.5271 15.4387L38.8136 22.1253C39.3377 23.6588 40.1844 25.0621 41.2969 26.2405C42.4093 27.419 43.7615 28.3451 45.2623 28.9565L45.8771 29.186L52.5638 31.4697C57.5221 33.164 57.6723 40.015 53.0171 42.0238L52.5638 42.1938L45.8771 44.4803C44.3431 45.004 42.9393 45.8506 41.7604 46.9631C40.5814 48.0755 39.6549 49.4279 39.0431 50.929L38.8136 51.541L36.53 58.2305C34.8356 63.1888 27.9846 63.339 25.9786 58.6838L25.803 58.2305L23.5193 51.5438C22.9957 50.0098 22.149 48.606 21.0366 47.4271C19.9241 46.2481 18.5717 45.3215 17.0706 44.7098L16.4586 44.4803L9.77197 42.1967C4.81081 40.5023 4.66064 33.6513 9.31864 31.6453L9.77197 31.4697L16.4586 29.186C17.9921 28.662 19.3954 27.8152 20.5738 26.7028C21.7523 25.5903 22.6784 24.2381 23.2898 22.7373L23.5193 22.1253L25.803 15.4358ZM53.8331 5.6665C54.3632 5.6665 54.8826 5.81519 55.3324 6.09567C55.7822 6.37615 56.1443 6.77718 56.3775 7.25317L56.5135 7.58467L57.5051 10.4917L60.415 11.4833C60.9462 11.6638 61.4118 11.9979 61.753 12.4433C62.0941 12.8887 62.2953 13.4254 62.3311 13.9852C62.3669 14.5451 62.2357 15.103 61.9541 15.5882C61.6725 16.0735 61.2532 16.4642 60.7493 16.7108L60.415 16.8468L57.508 17.8385L56.5163 20.7483C56.3355 21.2794 56.0012 21.7448 55.5556 22.0856C55.11 22.4265 54.5733 22.6274 54.0135 22.6629C53.4536 22.6984 52.8958 22.5669 52.4108 22.2851C51.9257 22.0033 51.5352 21.5838 51.2888 21.0798L51.1528 20.7483L50.1611 17.8413L47.2513 16.8497C46.7201 16.6692 46.2544 16.3351 45.9133 15.8897C45.5722 15.4443 45.371 14.9077 45.3352 14.3478C45.2994 13.7879 45.4306 13.23 45.7122 12.7448C45.9938 12.2595 46.4131 11.8688 46.917 11.6222L47.2513 11.4862L50.1583 10.4945L51.15 7.58467C51.341 7.02488 51.7025 6.53891 52.1837 6.19492C52.6649 5.85092 53.2416 5.66615 53.8331 5.6665Z" fill="#75AA00" />
                    </g>
                    <defs>
                        <filter id="filter0_d_171_379_anal" x="0" y="0" width="203" height="168" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_171_379" />
                        <feOffset dy="10" />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_379" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_379" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </motion.div>
          </motion.div>
          {/* Agent Description with Animation */}
          <motion.div
            className="text-gray-600 text-md w-full md:w-full mx-auto md:mx-0 text-center md:text-justify font-[Arial]"
            variants={itemVariants} // Simple fade-in/slide-up for the text block
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Meet your digital compliance guardians. These intelligent agents don't just read regulations–they breathe them. Transforming complex rules into actionable insights, they're the vigilant sentinels protecting your financial institution's integrity.
          </motion.div>
        </motion.div>


        {/* Domain Core Section with Animation */}
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 items-center mb-16">
          {/* Domain Core SVG with Slide-in Animation */}
          <motion.div
             className="relative lg:w-[500px] lg:mr-0 mr-12 w-[450px] h-[350px] lg:h-[381px]"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={slideInLeftVariants}
          >
            <svg width="500" height="381" viewBox="10 0 500 381" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_171_390_dom)">
                <rect x="15" width="429" height="351" rx="20" fill="#2D7DD2" />
                <rect x="15.5" y="0.5" width="428" height="350" rx="19.5" stroke="#EAEAEA" />
              </g>
              <text x="229.5" y="75" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="middle">
                Domain Core
              </text>
              <g transform="translate(139.5, 115)">
                <g clipPath="url(#clip0_240_442_dom)" filter="url(#filter0_i_240_442_dom)">
                  <path d="M68.3656 0.000127703C67.3608 0.149548 66.4011 0.518268 65.5548 1.08013C65.5548 1.08013 56.7971 6.5909 47.3817 12.5517C37.9663 18.5055 27.4917 25.0686 25.0963 26.3978L24.6602 26.6055C15.9648 31.9709 14.1579 40.7355 13.8463 45.6509C13.8256 45.8794 13.8463 46.0663 13.8463 46.3086C13.7702 48.1501 13.8463 49.334 13.8463 49.334V139.77C13.8463 152.91 29.1671 159.231 43.7056 159.231C48.5517 159.231 53.3979 158.449 57.5517 157.064C60.321 155.679 62.3079 152.91 62.3079 150.141V77.4486C62.3079 61.5255 65.7694 54.0486 76.154 47.8178C78.9233 46.4332 107.959 26.3909 107.959 26.3909C109.343 25.0063 110.769 22.1955 110.769 20.1186V19.4678C110.769 16.6986 109.385 14.5801 107.308 13.1955C105.231 11.8109 102.462 11.8109 100.385 13.1955C99.6925 13.8878 57.4617 42.3209 48.4617 47.167C39.4617 52.7055 31.064 54.0417 28.9871 51.2724C28.3433 50.6286 27.7825 48.6555 27.6925 46.7309V46.2947C27.6994 44.4117 28.184 40.867 32.0194 38.5063C35.9102 36.3394 45.5679 30.1709 54.9556 24.2309C58.9225 21.7178 59.414 21.4478 62.5225 19.4678C62.9317 21.1591 63.9628 22.6342 65.4105 23.5996C66.8582 24.565 68.6163 24.9499 70.3349 24.6776C72.0535 24.4052 73.6066 23.4957 74.6849 22.13C75.7632 20.7644 76.2877 19.0427 76.154 17.3078V6.9232C76.1618 5.93642 75.9585 4.95939 75.5578 4.0576C75.157 3.15581 74.5682 2.35011 73.8306 1.69451C73.0931 1.0389 72.2239 0.548552 71.2813 0.256325C70.3388 -0.0359032 69.3446 -0.123254 68.3656 0.000127703ZM123.75 24.2309C122.649 24.414 121.609 24.8605 120.718 25.5324C120.718 25.5324 85.8671 48.9809 79.8302 53.0032L79.6156 53.2247C74.6033 56.984 71.6333 61.4563 70.311 65.5478C69.5742 67.857 69.2097 70.2687 69.231 72.6924V74.8594C69.221 75.0739 69.221 75.2887 69.231 75.5032V159.231C69.231 172.385 84.3787 180 98.2248 180C104.456 180 110.077 178.657 114.231 175.888C122.539 171.042 162.693 139.763 162.693 139.763C164.769 138.379 166.154 136.426 166.154 134.349V44.3494C166.154 40.8878 164.811 38.8109 162.042 37.4263C159.965 36.0417 156.552 36.6924 154.475 38.077C143.398 46.3847 113.58 69.8401 106.657 73.994C96.9648 79.5324 87.8333 80.917 84.3717 77.4555C82.9871 76.0709 83.0771 74.7694 83.0771 72.6924C83.114 71.4924 83.2594 70.4817 83.5133 69.6601C83.901 68.4555 84.6902 66.974 87.6187 64.6894C87.7571 64.5786 87.6879 64.5855 87.8333 64.4747C92.8387 61.1309 108.146 50.6978 118.129 43.9132C118.694 45.4305 119.774 46.7016 121.18 47.5053C122.585 48.309 124.228 48.5945 125.823 48.3122C127.417 48.0298 128.862 47.1975 129.907 45.9599C130.951 44.7223 131.528 43.1579 131.539 41.5386V31.154C131.546 30.1672 131.343 29.1902 130.942 28.2884C130.542 27.3866 129.953 26.5809 129.215 25.9253C128.478 25.2697 127.608 24.7793 126.666 24.4871C125.723 24.1949 124.729 24.1075 123.75 24.2309ZM152.308 74.8594V88.7055L117.692 115.526V101.679L152.308 74.8594Z" fill="white" />
                </g>
              </g>
              <defs>
                <filter id="filter0_d_171_390_dom" x="0" y="0" width="459" height="381" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_171_390" />
                  <feOffset dy="15" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_390" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_390" result="shape" />
                </filter>
                <filter id="filter0_i_240_442_dom" x="0" y="0" width="180" height="190" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="10" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_240_442" />
                </filter>
                <clipPath id="clip0_240_442_dom">
                  <rect width="180" height="180" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </motion.div>
          {/* Domain Core Text with Slide-in Animation */}
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

        {/* Knowledge Core Section with Animation */}
        <div className="flex lg:flex-row-reverse flex-col gap-20 lg:pl-48 items-center text-justify m-auto">
          {/* Knowledge Core Card with Slide-in Animation */}
          <motion.div
            className="shadow-lg bg-[#75AA00] rounded-2xl order-1 md:order-2 w-full lg:w-1/2 text-center p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants} // Slide in from right
          >
            <h3 className="text-white text-4xl font-bold mb-6"><span className='font-[Arial]'>Knowledge Core</span></h3>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }} // Slight delay after card slides in
            >
              <svg
                width="170"
                viewBox="0 0 167 193"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <g filter="url(#filter0_i_318_762_inner_know)">
                  <path
                    d="M83.5 0L0 47.7698L83.5 95.5396L167 47.7698L83.5 0ZM21.0352 68.2223L0 80.2566L83.5 128.026L167 80.2566L145.965 68.2223L83.5 103.958L21.0352 68.2223ZM21.0352 100.709L0 112.743L83.5 160.513L167 112.743L145.965 100.709L83.5 136.445L21.0352 100.709ZM21.0352 133.196L0 145.23L83.5 193L167 145.23L145.965 133.196L83.5 168.931L21.0352 133.196Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_318_762_inner_know"
                    x="0"
                    y="0"
                    width="167"
                    height="203"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_318_762" />
                  </filter>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          {/* Knowledge Core Text with Slide-in Animation */}
          <motion.div
            className="order-2 md:order-1 lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants} // Slide in from left
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


// MirroredBlobPlusIcon and IconExample components remain unchanged as they are separate exports
// and the request was specifically for the Architecture component.

export function MirroredBlobPlusIcon({ size = 24, color = "#2174B9", className = "" }) {
  return (
    <span>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ transform: "scaleX(-1)" }}  // This flips the icon horizontally
      >
        {/* Main blob shape */}
        <path
          d="M32 12C36.5 12 39.5 16 39.5 20C39.5 24 42 26.5 46 26.5C50 26.5 54 29.5 54 34C54 38.5 50 41.5 46 41.5C42 41.5 39.5 44 39.5 48C39.5 52 36.5 56 32 56C27.5 56 24.5 52 24.5 48C24.5 44 22 41.5 18 41.5C14 41.5 10 38.5 10 34C10 29.5 14 26.5 18 26.5C22 26.5 24.5 24 24.5 20C24.5 16 27.5 12 32 12Z"
          fill={color}
        />
        {/* Small circle in top right (will appear on left after mirroring) */}
        <svg
          width={size / 6}
          height={size / 6}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          x="48" // Example positioning (adjust x, y based on visual need)
          y="12"
        >
          {/* Re-using the blob path for the small element as per original code structure, though a circle might be simpler */}
          <path
            d="M32 12C36.5 12 39.5 16 39.5 20C39.5 24 42 26.5 46 26.5C50 26.5 54 29.5 54 34C54 38.5 50 41.5 46 41.5C42 41.5 39.5 44 39.5 48C39.5 52 36.5 56 32 56C27.5 56 24.5 52 24.5 48C24.5 44 22 41.5 18 41.5C14 41.5 10 38.5 10 34C10 29.5 14 26.5 18 26.5C22 26.5 24.5 24 24.5 20C24.5 16 27.5 12 32 12Z"
            fill={color}
            transform="scale(0.15)" // Scale down the nested path
          />
        </svg>
      </svg>
    </span>
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