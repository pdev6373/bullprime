'use client';
import { motion, Variants } from 'framer-motion';

const itemVariants: Variants = {
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const formVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const privacyVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.6,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2 * index,
    },
  }),
};

const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const NEXT = [
  'Our team will review your staffing requirements',
  "We'll identify and screen suitable candidates",
  "You'll receive candidate profiles within 24-48 hours",
  "We'll coordinate interviews and facilitate placement",
];

export default function WorkWithUsSubmitted() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#F8F8FE] text-[#010013] flex flex-col items-center relative overflow-hidden"
      style={{
        gap: 'clamp(24px, 2.7778vw, 40px)',
        paddingInline: 'max(6.25vw, 20px)',
        paddingBlock: 'clamp(36px, 5.556vw, 80px)',
      }}
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2.5 sm:gap-4 relative z-10"
      >
        <motion.div
          variants={pulseVariants}
          animate="pulse"
          className="flex items-center"
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            alt="icon"
            width={59}
            height={27}
            src="/svgs/section-icon.svg"
            style={{
              width: 'clamp(30px, 3.33vw, 48px)',
            }}
          />
        </motion.div>
        <motion.p
          className="min-[400px]:text-lg xl:text-xl font-semibold"
          style={{
            fontSize: 'clamp(16px, 1.389vw, 20px)',
          }}
        >
          Contact Us
        </motion.p>
      </motion.div>

      <motion.div
        variants={formVariants}
        className="bg-white rounded-lg sm:rounded-xl flex flex-col w-full max-w-[916px] gap-2.5 relative z-10"
        style={{
          padding: 'clamp(20px, 2.222vw, 32px)',
        }}
        whileHover={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
          y: -1.5,
          transition: { duration: 0.25 },
        }}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <motion.h3
            variants={titleVariants}
            className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 36px)',
            }}
          >
            Request Submitted Successfully!
          </motion.h3>

          <motion.p
            className="md:max-w-[48.11vw]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 18px)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {`Thank you for choosing Bull Prime for your staffing needs. Our team will review your requirements and contact you within 24 hours with suitable candidates.`}
          </motion.p>
        </motion.div>

        <motion.div
          variants={privacyVariants}
          className="bg-[#F2F6FF] rounded-xl md:rounded-2xl p-4 flex flex-col items-center gap-4 text-[#1462FF] relative overflow-hidden"
        >
          <p
            className="font-medium"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 18px)',
            }}
          >
            What is Next?
          </p>

          <motion.ul
            className="flex flex-col gap-1 relative z-10"
            variants={containerVariants}
          >
            {NEXT.map((next, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={listItemVariants}
                className="tracking-[-2%] list-disc ml-5 text-[#1462FF] marker:text-[#1462FF] marker:text-xs relative"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 18px)',
                }}
              >
                <motion.span
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  {next}
                </motion.span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
