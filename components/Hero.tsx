'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

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

const STATS = [
  {
    text: '4.9/5 Rating',
    icon: '/svgs/star.svg',
  },
  {
    text: '50+ Workers Ready',
    icon: '/svgs/profile.svg',
  },
  {
    text: '98% Success Rate',
    icon: '/svgs/trend.svg',
  },
];

export default function Hero() {
  return (
    <section
      className="bg-[#F8F8FE] flex flex-col justify-center text-[#010013]"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
        paddingBlock: 'clamp(40px, 9.444vw, 136px)',
        gap: 'clamp(60px, 11.94vw, 172px)',
      }}
    >
      <div className="flex justify-between items-center flex-col min-[920px]:flex-row w-full gap-7 min-[920px]:gap-0">
        <div className="grow-[2] flex flex-col gap-5 w-full min-[920px]:w-auto flex-1">
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

          <div className="flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-snug font-semibold tracking-[-2%] max-w-[640px]">
              Connecting Skilled Workers with Businesses in Construction &
              Warehousing
            </h3>

            <p className="max-w-[591px] text-sm sm:text-base">
              {`We provide reliable workforce solutions tailored to meet your needs – helping businesses grow and workers succeed.`}
            </p>
          </div>

          <div className="flex gap-4 items-center text-sm sm:text-base lg:text-lg font-medium flex-wrap sm:flex-nowrap">
            <Link href={'/request-workers-form'} className="w-full sm:w-fit">
              <button className="w-full sm:w-fit rounded-md bg-[#1462FF] text-[#FAFAF7] py-3 px-5 cursor-pointer text-sm outline-[1px] outline-[#1462FF]">
                Work With Us
              </button>
            </Link>
            <Link href={'/skilled-workers-form'} className="w-full sm:w-fit">
              <button className="w-full sm:w-fit rounded-md bg-transparent outline-[1px] outline-[#1462FF] py-3 px-5 cursor-pointer text-[#1462FF] text-sm">
                Hire Now
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:mt-1">
            {STATS.map((stat) => (
              <div className="flex items-center gap-1">
                <Image alt="stat" width={16} height={16} src={stat.icon} />
                <p className="text-xs font-medium text-[#676671]">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative grow flex-1 w-full">
          <Image
            alt="cta"
            width={626}
            height={389}
            src="/pngs/hero.png"
            className="w-full rounded-[24px] min-[920px]:hidden aspect-[1.609/1] z-10"
          />

          <motion.img
            width={146}
            height={146}
            alt="arrow right"
            src="/svgs/rotate.svg"
            className="absolute z-30 aspect-square shrink-0 left-[20px] bottom-[-40px]"
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

          <div
            style={{
              paddingLeft: 'clamp(35px, 5.69vw, 73px)',
            }}
          >
            <div
              className="relative grow hidden min-[920px]:block aspect-[1.609/1]"
              style={{
                width: 'clamp(450px, 46.25vw, 626px)',
              }}
            >
              <Image
                fill
                alt="cta"
                src="/pngs/hero.png"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-start w-full max-w-[1010px] mx-auto"
        style={{
          gap: 'clamp(20px, 1.6667vw, 24px)',
        }}
      >
        <motion.div
          className="flex gap-6 flex-wrap justify-between items-end min-[1200px]:items-start min-[1200px]:max-w-[500px] flex-1 grow"
          variants={itemVariants}
        >
          <div
            className="flex flex-col"
            style={{
              gap: 'clamp(20px, 2.222vw, 32px)',
            }}
          >
            <motion.h3
              className="font-semibold tracking-[-2%] leading-[1.3]"
              style={{
                fontSize: 'clamp(24px, 2.7778vw, 40px)',
              }}
              variants={fadeInUp}
            >
              It's Results that Matter,{' '}
              <span className="text-[#1462FF]">Not just Promises</span>.
            </motion.h3>

            <Link href={'/about-us'} className="w-full sm:w-fit">
              <motion.button
                className="w-full sm:w-fit rounded-md bg-transparent outline-[1px] outline-[#1462FF] text-[#1462FF] py-3 px-6 cursor-pointer text-sm"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#0F4FCC',
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <div
          className="relative hidden md:block aspect-[1/2.09] shrink-0"
          style={{
            width: 'clamp(80px, 3.025vw, 43.56px)',
          }}
        >
          <Image
            fill
            alt="hero"
            src="/svgs/hero-icon.svg"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 grow flex-1">
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
              About Us
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            style={{
              fontSize: 'clamp(16px, 1.25vw, 18px)',
            }}
            variants={textVariants}
          >
            <motion.p variants={textVariants}>
              At Bull Prime Services Ltd, we specialise in matching skilled
              professionals with businesses in the construction and warehousing
              industries. With a focus on training, compliance, and relationship
              building, we ensure every placement is a success.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
