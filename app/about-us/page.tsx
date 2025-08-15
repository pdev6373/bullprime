'use client';
import Image from 'next/image';
import CTA from '@/components/CTA';
import AboutHero from '@/components/AboutHero';
import CoreValues from '@/components/CoreValues';
import { motion, Variants } from 'framer-motion';

const ABOUT = [
  {
    title: 'Who we are',
    body: 'Established to bridge the gap between businesses and skilled professionals, Bull Prime Services Ltd has built a reputation for delivering recruitment solutions that go beyond simply filling positions. We understand the unique demands of the construction and warehousing industries and work closely with both clients and candidates to create successful, lasting partnerships',
  },
  {
    title: 'Our Mission',
    body: 'To provide reliable, skilled, and compliant workforce solutions that empower businesses to grow and help workers achieve their full potential. While our core strength today lies in manufacturing, our vision extends far beyond the present we are actively building the foundations to expand into the technology and other sectors, bringing innovation and well-being to the heart of our offerings.',
    extra:
      'This strategic growth path will allow us to integrate cutting-edge solutions into everyday life, bridging the gap between what we make today and the transformative impact we aim to create tomorrow.',
  },
];

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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const dividerVariants: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.1,
    },
  },
};

export default function AboutUs() {
  return (
    <div>
      <AboutHero />

      <motion.section
        className="bg-[#F8F8FE] text-[#0E0E0E] grid gap-7 md:gap-12"
        style={{
          paddingInline: 'max(6.25vw, 20px)',
          paddingTop: 'clamp(30px, 9.72vw, 140px)',
          paddingBottom: 'clamp(40px, 6.597vw, 95px)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(16em, 100%), 1fr))',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {ABOUT.map((about, index) => (
          <motion.div
            className="flex gap-6"
            key={index}
            variants={cardVariants}
          >
            {!!index && (
              <motion.div
                className="w-0.5 h-[185px] bg-[#B8D0FF] -ml-6 hidden md:block"
                variants={dividerVariants}
                style={{ originY: 0 }}
              />
            )}
            <div className="flex flex-col gap-3">
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
                  {about.title}
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-6"
                style={{
                  fontSize: 'clamp(16px, 1.389vw, 20px)',
                }}
                variants={textVariants}
              >
                <motion.p
                  variants={textVariants}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  {about.body}
                </motion.p>
                {!!about.extra && (
                  <motion.p
                    variants={textVariants}
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {about.extra}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.section>
      <CoreValues />
    </div>
  );
}
