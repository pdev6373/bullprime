'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';

const heroVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      staggerChildren: 0.15,
    },
  },
};

const slideInLeft: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
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

const fadeInUp: Variants = {
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export default function AboutHero() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <motion.div
      ref={heroRef}
      variants={heroVariants}
      initial="hidden"
      animate={isHeroInView ? 'visible' : 'hidden'}
      className="relative bg-[url('/pngs/about-hero.png')] bg-cover bg-center aspect-[1.5/1] md:aspect-[1.85/1]"
    >
      <div
        className="flex flex-col justify-end h-full gap-1.5 sm:gap-2"
        style={{
          paddingInline: 'clamp(20px, 6.25vw, 90px)',
          paddingBlock: 'clamp(24px, 9.51vw, 137px)',
        }}
      >
        <motion.div
          variants={itemVariants}
          className="items-center gap-2.5 sm:gap-4 hidden min-[405px]:flex"
        >
          <motion.div className="flex items-center">
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
            About Us
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-2 max-w-[610px]"
        >
          <motion.h3
            variants={slideInLeft}
            className="font-semibold tracking-[-2%] leading-[1.3]"
            style={{
              fontSize: 'clamp(20px, 3.33vw, 48px)',
            }}
          >
            Your Trusted Partner in Workforce Solutions
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="w-full md:max-w-[80vw] lg:max-w-[60vw] xl:max-w-[45.04vw] leading-[1.7] text-xs sm:text-sm lg:text-base hidden min-[400px]:block"
          >
            {`At Bull Prime Services Ltd, we specialise in connecting skilled workers with leading businesses in the construction and warehousing sectors.`}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="w-full md:max-w-[80vw] lg:max-w-[60vw] xl:max-w-[45.04vw] leading-[1.7] text-xs sm:text-sm lg:text-base min-[400px]:hidden"
          >
            {`We specialise in connecting skilled workers with leading businesses in the construction and warehousing sectors.`}
          </motion.p>
        </motion.div>
      </div>

      <motion.img
        width={146}
        height={146}
        alt="arrow right"
        src="/svgs/rotate.svg"
        className="absolute left-[50%] bottom-0 translate-y-[50%] translate-x-[-50%] aspect-square"
        style={{
          width: 'clamp(70px, 10.138vw, 146px)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}
