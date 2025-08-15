'use client';
import Image from 'next/image';
import { useState } from 'react';
import Input from '@/components/Form/Input';
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

const inputRowVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
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

const buttonVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function SkilledWorkersForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [fullName, setFullName] = useState('');
  const [experience, setExperience] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#F8F8FE] text-[#010013] flex flex-col items-center"
      style={{
        gap: 'clamp(24px, 2.7778vw, 40px)',
        paddingInline: 'max(6.25vw, 20px)',
        paddingBlock: 'clamp(36px, 5.556vw, 80px)',
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2.5 sm:gap-4"
        >
          <motion.div
            className="flex items-center"
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
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
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-center"
        >
          <motion.h3
            className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 36px)',
            }}
          >
            Staffing Request Form
          </motion.h3>
          <motion.p
            className="md:max-w-[41.11vw]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 18px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {`Tell us about your staffing needs and we'll connect you with the right skilled professionals.`}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={formVariants}
        className="bg-white rounded-lg flex flex-col w-full max-w-[932px]"
        style={{
          gap: 'clamp(28px, 3.33vw, 48px)',
          padding: 'clamp(20px, 2.222vw, 32px)',
        }}
      >
        <motion.div variants={inputRowVariants} className="flex flex-col gap-1">
          <h3
            className="font-medium tracking-[-2%]"
            style={{
              fontSize: 'clamp(16px, 1.25vw, 18px)',
            }}
          >
            Staffing Request Form
          </h3>
          <p className="text-sm">
            {`Please provide details about your company and staffing requirements.
            We'll match you with qualified candidates.`}
          </p>
        </motion.div>

        <form
          action=""
          className="flex flex-col"
          style={{
            gap: 'clamp(20px, 2.222vw, 32px)',
          }}
        >
          <div
            className="flex flex-col"
            style={{
              gap: 'clamp(20px, 1.6667vw, 24px)',
            }}
          >
            <motion.div
              variants={inputRowVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.div
                className="grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  value={fullName}
                  className="grow"
                  label="Your Full Name*"
                  placeholder="Ex. Bull Prime"
                  onChange={(value) => setFullName(value)}
                />
              </motion.div>
              <motion.div
                className="grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  value={email}
                  className="grow"
                  label="Contact Person Full Name*"
                  placeholder="Ex John Doe"
                  onChange={(value) => setEmail(value)}
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={inputRowVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.div
                className="grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className="grow"
                  value={phone}
                  label="Phone Number*"
                  placeholder="+1233456789"
                  onChange={(value) => setPhone(value)}
                />
              </motion.div>
              <motion.div
                className="grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  className="grow"
                  value={industry}
                  label="Primary Industry*"
                  placeholder="Select Industry"
                  onChange={(value) => setIndustry(value)}
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={inputRowVariants}
              whileFocus={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                type="textarea"
                value={experience}
                label="Specific Skills & Experience"
                onChange={(value) => setExperience(value)}
                placeholder="Describe your skills, certifications and experience"
              />
            </motion.div>

            <motion.div
              variants={inputRowVariants}
              whileFocus={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                type="textarea"
                value={additionalInfo}
                label="Additional Information (Optional)"
                onChange={(value) => setAdditionalInfo(value)}
                placeholder="Any other information you would love to share"
              />
            </motion.div>
          </div>

          <motion.div
            variants={privacyVariants}
            className="bg-[#F2F6FF] rounded-xl md:rounded-2xl p-4 flex items-start gap-2 text-[#1462FF]"
          >
            <motion.div transition={{ duration: 0.6 }} className="shrink-0">
              <Image
                src="/svgs/info.svg"
                alt="info"
                width={24}
                height={24}
                className="aspect-square pt-0.5"
                style={{
                  width: 'clamp(20px, 1.6667vw, 24px)',
                }}
              />
            </motion.div>
            <div className="flex flex-col gap-1">
              <p
                className="font-bold"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 18px)',
                }}
              >
                Our Commitment
              </p>
              <p
                className="tracking-[-2%]"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 18px)',
                }}
              >
                We guarantee thorough screening of all candidates and provide
                ongoing support throughout the placement process. Your
                satisfaction is our priority.
              </p>
            </div>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <motion.button
              className="w-full sm:max-w-[282px] rounded-md bg-[#1462FF] py-4 cursor-pointer text-[#FAFAF7] text-sm font-medium"
              whileHover={{
                scale: 1.02,
                backgroundColor: '#0F52E6',
                boxShadow: '0 8px 25px rgba(20, 98, 255, 0.3)',
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
            >
              Submit Request
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.section>
  );
}
