'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const slideInRight: Variants = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const fadeInUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const buttonVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

const BUSINESS_STEPS = [
  {
    heading: 'Tell Us What You Need',
    content: 'Fill out a quick 2 minutes form to describe your requirements.',
  },
  {
    heading: 'We find a perfect Match',
    content: 'Our Team will review your request and find a match.',
  },
  {
    heading: 'Interview and Hire',
    content: 'We make offers and candidates start immediately.',
  },
  {
    heading: 'Work Starts',
    content: 'Fully trained, equipped, and ready to start working.',
  },
];

const WORKERS_STEPS = [
  {
    heading: 'Tell us about yourself',
    content: 'Fill out a quick 2 minutes form to describe your skills.',
  },
  {
    heading: 'Get Verified',
    content: 'Our Team will reach out for verification & accreditation.',
  },
  {
    heading: 'Interview and Hire',
    content: 'Get Matched to available jobs from our Job List.',
  },
];

export default function HowItWorks() {
  return (
    <motion.section
      className="bg-[#FEFEFF] text-[#010013] flex justify-center"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
        paddingBlock: 'clamp(40px, 6.6667vw, 96px)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="w-full flex flex-col gap-12 sm:gap-16 lg:gap-24 xl:gap-28">
        {/* Business Section */}
        <motion.div
          className="flex justify-between items-center flex-col min-[1200px]:flex-row gap-8 sm:gap-10 w-full min-[1200px]:max-w-[1152px] mx-auto"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col gap-6 grow w-full min-[1200px]:w-auto"
            variants={fadeInUp}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 sm:gap-4"
            >
              <motion.div
                className="flex items-center"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  alt="icon"
                  width={59}
                  height={27}
                  src="/svgs/section-icon.svg"
                  style={{
                    width: 'clamp(24px, 3.33vw, 48px)',
                  }}
                />
              </motion.div>
              <motion.p
                variants={slideInRight}
                className="min-[400px]:text-lg xl:text-xl font-semibold"
                style={{
                  fontSize: 'clamp(16px, 1.389vw, 20px)',
                }}
              >
                How it Works
              </motion.p>
            </motion.div>

            <motion.div
              className="flex gap-6 flex-wrap justify-between items-end min-[1200px]:items-start min-[1200px]:max-w-[427px]"
              variants={itemVariants}
            >
              <div className="flex flex-col gap-2 grow">
                <motion.h3
                  className="font-semibold tracking-[-2%] max-w-[427px] leading-[1.4]"
                  style={{
                    fontSize: 'clamp(24px, 2.222vw, 32px)',
                  }}
                  variants={fadeInUp}
                >
                  <span className="text-[#1462FF]">For Businesses:</span> Get
                  Workers Faster, Cheaper, Better
                </motion.h3>
                <motion.p
                  className="text-sm sm:text-base max-w-[390px]"
                  variants={fadeInUp}
                >
                  Stop wasting time with traditional recruiting. Get skilled
                  workers placed in hours, not weeks
                </motion.p>
              </div>

              <motion.button
                className="w-full sm:w-fit rounded-md bg-[#1462FF] text-[#FAFAF7] py-3 px-10 cursor-pointer text-sm outline-[1px] outline-[#1462FF]"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#0F4FCC',
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Hire Now
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-3.5 xl:gap-4 grow-10 w-full min-[1200px]:w-auto"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(16em, 100%), 1fr))',
            }}
            variants={containerVariants}
          >
            {BUSINESS_STEPS.map((step, index, array) => (
              <motion.div
                key={index}
                className={`${
                  index && index < array.length - 1
                    ? 'bg-[#E7EFFF] sm:bg-[#D0E0FF]'
                    : 'bg-[#E7EFFF] sm:bg-[#E7EFFF]'
                }rounded-xl sm:rounded-2xl text-[#131057] flex flex-col md:gap-1.5`}
                style={{
                  padding: 'clamp(20px, 1.6667vw, 24px)',
                }}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.h3
                  className="font-semibold"
                  style={{
                    fontSize: 'clamp(16px, 1.25vw, 18px)',
                  }}
                >
                  {index + 1} {step.heading}
                </motion.h3>
                <motion.p
                  style={{
                    fontSize: 'clamp(14px, 1.111vw, 16px)',
                  }}
                >
                  {step.content}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Workers Section */}
        <motion.div
          className="w-full max-w-[815px] mx-auto flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="flex justify-between items-end flex-wrap gap-6"
            variants={fadeInUp}
          >
            <div className="flex flex-col gap-2">
              <motion.h3
                className="font-semibold tracking-[-2%] max-w-[427px] leading-[1.4]"
                style={{
                  fontSize: 'clamp(24px, 2.222vw, 32px)',
                }}
                variants={fadeInUp}
              >
                <span className="text-[#1462FF]">For Workers:</span> Better
                Jobs, Higher Pay, Faster Placement
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base max-w-[390px]"
                variants={fadeInUp}
              >
                Stop waiting for opportunities. Get access to the best
                construction and warehouse jobs immediately.
              </motion.p>
            </div>

            <motion.button
              className="w-full sm:w-fit rounded-md bg-[#1462FF] text-[#FAFAF7] py-3 px-10 cursor-pointer text-sm outline-[1px] outline-[#1462FF]"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: '#0F4FCC',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              Work With Us
            </motion.button>
          </motion.div>

          <motion.div
            className="grid gap-4 grow"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(16em, 100%), 1fr))',
            }}
            variants={containerVariants}
          >
            {WORKERS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                className="bg-[#FFFFFF] rounded-xl sm:rounded-2xl text-[#131057] overflow-hidden flex flex-col justify-between"
                style={{
                  boxShadow: '0px 2px 16px 3px #0000000D',
                }}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0px 8px 32px 6px #0000001A',
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex flex-col gap-1.5"
                  style={{
                    padding: 'clamp(20px, 1.6667vw, 24px)',
                  }}
                >
                  <motion.h3
                    className="font-semibold"
                    style={{
                      fontSize: 'clamp(16px, 1.25vw, 18px)',
                    }}
                  >
                    {index + 1} {step.heading}
                  </motion.h3>
                  <motion.p
                    style={{
                      fontSize: 'clamp(14px, 1.111vw, 16px)',
                    }}
                  >
                    {step.content}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="bg-[#131057] text-[#FAFAF7] flex justify-between items-center gap-5 py-2 px-4 font-medium"
                  style={{
                    fontSize: 'clamp(14px, 1.111vw, 16px)',
                  }}
                  whileHover={{
                    backgroundColor: '#1F1A8F',
                    transition: { duration: 0.2 },
                  }}
                >
                  <p>Step</p>
                  <p>0{index + 1}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
