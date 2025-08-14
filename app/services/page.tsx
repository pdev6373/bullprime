'use client';
import Image from 'next/image';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const SERVICES = [
  {
    image: '/pngs/service-one.png',
    heading: 'Construction Staffing',
    content:
      'Construction projects demand precision, safety, and skilled labour to meet tight deadlines. We supply workers who are not only qualified but also prepared to integrate seamlessly into your team. From large-scale developments to small, specialised builds, we provide the workforce to help you deliver exceptional results',
    cta: 'hire-now',
    offers: [
      'General labourers and site operatives',
      'Skilled tradespeople (electricians, plumbers, carpenters, bricklayers, etc.)',
      'Site supervisors and foremen',
      'Temporary, contract, and permanent placements',
      'Workers with up-to-date CSCS certifications',
    ],
    reasons: [
      'All candidates are pre-screened for skills and safety awareness',
      'Flexible solutions for both short-term and long-term needs',
      'Quick turnaround for urgent staffing requirements',
    ],
  },
  {
    image: '/pngs/service-two.png',
    heading: 'Warehousing Staff',
    content:
      'A well-organised warehouse is the backbone of any logistics operation. We provide reliable, trained personnel to ensure your stock handling, storage, and distribution processes operate efficiently. Our candidates are ready to step into your workflow without disruption.',
    cta: 'talk-to-us',
    offers: [
      'Pickers and packers',
      'Forklift truck operators',
      'Stock control and inventory management staff',
      'Loaders and unloaders',
      'Seasonal or shift-based teams for peak demand',
    ],
    reasons: [
      'Staff trained in warehouse safety and efficiency',
      'Flexible scheduling to match your operational needs',
      'Capability to scale teams quickly during busy periods',
    ],
  },
  {
    image: '/pngs/service-three.png',
    heading: 'Training & Compliance',
    content:
      "We believe a prepared workforce benefits everyone – businesses see improved performance, and workers feel more confident in their roles. That's why we invest in training and compliance support to make sure every candidate meets industry requirements before they start.",
    cta: 'contact-now',
    offers: [
      'Health & safety protocols for construction and warehousing',
      'CSCS card guidance and support',
      'Manual handling best practices',
      'Workplace hazard awareness',
      'Ongoing upskilling for career development',
    ],
    reasons: [
      'Reduces on-site risks and improves productivity',
      'Ensures candidates meet legal and industry standards',
      'Builds a stronger, more capable workforce',
    ],
  },
];

function useAnimateOnView() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return { ref, isInView };
}

export default function Services() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const sectionHeaderRef = useRef(null);
  const isSectionHeaderInView = useInView(sectionHeaderRef, {
    once: true,
    margin: '-50px',
  });

  return (
    <div>
      <motion.div
        ref={heroRef}
        variants={heroVariants}
        initial="hidden"
        animate={isHeroInView ? 'visible' : 'hidden'}
        className="bg-[url('/pngs/service-hero.png')] bg-cover bg-center aspect-[1.5/1] md:aspect-[1.85/1]"
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
            <motion.div
              className="flex items-center"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
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
              Our Services
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-2"
          >
            <motion.h3
              variants={slideInLeft}
              className="font-semibold tracking-[-2%]"
              style={{
                fontSize: 'clamp(20px, 3.33vw, 48px)',
              }}
            >
              Our Workforce Solutions
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="leading-[1.7] min-[405px]:hidden text-xs"
            >
              {`At Bull Prime Services Ltd, we provide tailored recruitment solutions for the construction and warehousing sectors – ensuring you get skilled, reliable, and fully compliant workers when you need them most.`}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="w-full md:max-w-[80vw] lg:max-w-[60vw] xl:max-w-[45.04vw] hidden min-[405px]:block leading-[1.7] min-[405px]:text-xs sm:text-sm lg:text-base"
            >
              {`At Bull Prime Services Ltd, we understand that the right people can make all the difference in a business's success. That's why we provide tailored recruitment solutions for the construction and warehousing sectors – ensuring you get skilled, reliable, and fully compliant workers when you need them most.`}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <section
        className="bg-[#fff] text-[#0E0E0E] flex flex-col"
        style={{
          gap: 'clamp(32px, 3.8889vw, 56px)',
          paddingInline: 'max(6.25vw, 20px)',
          paddingTop: 'clamp(30px, 3.47vw, 50px)',
          paddingBottom: 'clamp(36px, 5.556vw, 80px)',
        }}
      >
        <motion.div
          ref={sectionHeaderRef}
          variants={containerVariants}
          initial="hidden"
          animate={isSectionHeaderInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-2 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
            style={{
              fontSize: 'clamp(24px, 2.7778vw, 40px)',
            }}
          >
            Service We Provide
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="md:max-w-[51.389vw]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 18px)',
            }}
          >
            {`At Bull Prime Services Ltd, we provide tailored recruitment solutions for the construction and warehousing sectors — connecting you with skilled, reliable, and compliant workers when you need them, with plans to expand into more industries soon.`}
          </motion.p>
        </motion.div>

        <div
          className="flex flex-col w-full lg:max-w-[1185px] mx-auto"
          style={{
            gap: 'clamp(36px, 5vw, 72px)',
          }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const { ref, isInView } = useAnimateOnView();

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`${
        index % 2 ? 'bg-[#131057] text-[#E6E5E7]' : 'bg-[#F8F8FE]'
      } rounded-2xl lg:rounded-3xl flex flex-col w-full overflow-hidden`}
      style={{
        padding: 'clamp(20px, 2.222vw, 32px)',
        gap: 'clamp(20px, 1.6667vw, 24px)',
      }}
      whileHover={{
        y: -2,
        transition: { duration: 0.4, ease: 'easeOut' },
      }}
    >
      <div
        className={`flex flex-col ${
          index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } justify-between lg:items-center gap-6 lg:gap-8 w-full lg:max-w-[1152px]`}
      >
        <motion.div
          variants={imageVariants}
          className="relative grow hidden lg:block overflow-hidden rounded-lg"
          style={{
            width: 'clamp(500px, 43.47vw, 626px)',
            aspectRatio: 1.609 / 1,
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <Image fill alt="cta" src={service.image} className="object-cover" />
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="relative grow lg:hidden overflow-hidden rounded-lg"
          style={{
            width: '100%',
            aspectRatio: 1.609 / 1,
          }}
        >
          <Image fill alt="cta" src={service.image} className="object-cover" />
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="grow w-full lg:max-w-[463px] flex flex-col"
          style={{
            gap: 'clamp(20px, 1.6667vw, 24px)',
          }}
        >
          <motion.div
            variants={staggerContainer}
            className="flex flex-col gap-3"
          >
            <motion.h3
              variants={itemVariants}
              className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
              style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
              }}
            >
              {service.heading}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="max-w-[600px]"
              style={{
                fontSize: 'clamp(14px, 1.25vw, 18px)',
              }}
            >
              {service.content}
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            {index % 2 ? (
              <motion.button
                className="w-full sm:max-w-fit rounded-md bg-[#FAFAF7] text-[#010013] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5 capitalize"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {service?.cta?.split('-').join(' ')}
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    width={16}
                    height={16}
                    alt="arrow right"
                    src="/svgs/arrow-right.svg"
                  />
                </motion.div>
              </motion.button>
            ) : (
              <motion.button
                className="w-full sm:max-w-fit rounded-md bg-[#1462FF] text-[#FAFAF7] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5 capitalize"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {service?.cta?.split('-').join(' ')}
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    width={16}
                    height={16}
                    alt="arrow right"
                    src="/svgs/arrow-right-white.svg"
                  />
                </motion.div>
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col min-[890px]:flex-row justify-between gap-8 rounded-lg lg:rounded-2xl bg-[#E7EFFF] border-[1.5px] border-[#E6E5E7] overflow-hidden"
        style={{
          padding: 'clamp(20px, 1.6667vw, 24px)',
        }}
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.4 },
        }}
      >
        <motion.div
          variants={staggerContainer}
          className="flex-1 flex flex-col gap-2 min-[890px]:gap-3"
        >
          <motion.h3
            variants={itemVariants}
            className="font-semibold text-[#010013]"
            style={{
              fontSize: 'clamp(16px, 1.389vw, 20px)',
            }}
          >
            What we offer:
          </motion.h3>

          <motion.ul variants={staggerContainer}>
            {service.offers.map((offer: string, idx: number) => (
              <motion.li
                key={offer}
                variants={listItemVariants}
                className="list-disc ml-5 text-[#343342] tracking-[-2%] marker:text-[#343342] marker:text-xs"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 18px)',
                }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3 }}
              >
                {offer}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="flex-1 flex flex-col gap-2 min-[890px]:gap-3"
        >
          <motion.h3
            variants={itemVariants}
            className="font-semibold text-[#010013]"
            style={{
              fontSize: 'clamp(16px, 1.389vw, 20px)',
            }}
          >
            Why choose our construction staffing:
          </motion.h3>

          <motion.ul variants={staggerContainer}>
            {service.reasons.map((reason: string, idx: number) => (
              <motion.li
                key={reason}
                variants={listItemVariants}
                className="list-disc ml-5 text-[#343342] tracking-[-2%] marker:text-[#343342] marker:text-xs"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 18px)',
                }}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3 }}
              >
                {reason}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
