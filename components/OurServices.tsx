'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const serviceCardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const contentVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

const headerVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1,
    },
  },
};

const SERVICES = [
  {
    image: '/pngs/service-one.png',
    heading: 'Construction Staffing',
    content:
      'Building the right team for your projects. We supply skilled and semi-skilled workers for construction sites, ranging from general labourers to qualified tradespeople. Our candidates undergo thorough vetting to ensure they have the expertise and safety awareness required for demanding construction environments.',
    cta: 'learn-more',
    link: '/services#construction-staffing',
  },
  {
    image: '/pngs/service-two.png',
    heading: 'Warehousing Staff',
    content:
      'Reliable staffing for smooth supply chain operations. Our warehousing recruitment solutions ensure your logistics operations never face staff shortages. We supply trained personnel who can seamlessly integrate into your existing processes, improving efficiency and productivity',
    cta: 'learn-more',
    link: '/services#warehousing-staff',
  },
  {
    image: '/pngs/service-three.png',
    heading: 'Training & Compliance',
    content:
      "Empowering workers with skills and certifications. We believe a prepared workforce is a successful workforce. That's why we offer training and compliance support to ensure candidates meet industry standards before stepping on site. This not only benefits businesses but also boosts workers' confidence and career growth.",
    cta: 'learn-more',
    link: '/services#training-and-compliance',
  },
];

export default function OurServices() {
  return (
    <motion.div
      className="relative bg-[#131057] py-8 pb-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-[#FAFAF7]"
      id="our-services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          alt="cta"
          width={1440}
          height={28}
          src="/svgs/line-one.svg"
          className="w-full"
        />
        <Image
          alt="cta"
          width={1440}
          height={28}
          src="/svgs/line-two.svg"
          className="w-full"
        />
      </motion.div>

      <section
        className="flex justify-center"
        style={{
          paddingInline: 'max(6.25vw, 20px)',
        }}
      >
        <motion.div
          className="w-full flex flex-col"
          style={{
            gap: 'clamp(20px, 1.6667vw, 24px)',
          }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 sm:gap-4"
          >
            <motion.div
              className="flex items-center"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
            >
              <Image
                alt="icon"
                width={59}
                height={27}
                src="/svgs/section-icon-white.svg"
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

          <div className="w-full mx-auto flex flex-col gap-12">
            <motion.div
              className="flex justify-between items-end flex-wrap gap-6"
              variants={headerVariants}
            >
              <motion.h3
                className="leading-snug font-semibold tracking-[-2%] sm:max-w-[64.44vw] md:max-w-[54.44vw] lg:max-w-[44.44vw]"
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                We Provide the Workers You Need, and When You Need Them.
              </motion.h3>

              <Link href="/contact-us">
                <motion.button
                  className="w-full sm:max-w-[150px] rounded-md bg-[#FAFAF7] text-[#010013] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Us
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      width={16}
                      height={16}
                      alt="arrow right"
                      src="/svgs/arrow-right.svg"
                    />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="grid grow"
              style={{
                gap: 'clamp(20px, 1.6667vw, 24px)',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(22em, 100%), 1fr))',
              }}
              variants={containerVariants}
            >
              {SERVICES.map((service, index) => (
                <Link href={service.link}>
                  <motion.div
                    key={index}
                    className={`${
                      index % 2
                        ? 'bg-[#1462FF] flex-col-reverse'
                        : 'bg-[#2B2868] flex-col'
                    } rounded-2xl sm:rounded-[20px] text-[#FAFAF7] overflow-hidden flex gap-4 cursor-pointer`}
                    style={{
                      paddingInline: 'clamp(16px, 1.389vw, 20px)',
                      paddingBlock: 'clamp(20px, 1.6667vw, 24px)',
                    }}
                    variants={serviceCardVariants}
                    whileHover="hover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    custom={index}
                  >
                    <motion.div
                      className="relative w-full rounded-2xl overflow-hidden"
                      style={{
                        aspectRatio: 1.61 / 1,
                      }}
                      variants={imageVariants}
                    >
                      <Image
                        fill
                        alt="image"
                        src={service.image}
                        className="w-full object-cover"
                      />
                    </motion.div>

                    <motion.div
                      className="flex flex-col justify-between gap-4 border-[1px] border-[#FAFAF7] rounded-2xl grow"
                      style={{
                        padding: 'clamp(16px, 1.389vw, 20px)',
                      }}
                      variants={contentVariants}
                    >
                      <div className="flex flex-col gap-2">
                        <motion.h3
                          className="font-semibold"
                          style={{
                            fontSize: 'clamp(16px, 1.389vw, 20px)',
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          {service.heading}
                        </motion.h3>

                        <motion.div
                          className="w-full h-[0.5px] bg-[#CCCCD0]"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />

                        <motion.p
                          className="text-sm"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          {service.content}
                        </motion.p>
                      </div>

                      <motion.button
                        className="w-full sm:max-w-fit rounded-md bg-[#FAFAF7] text-[#010013] py-3 px-4 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5 capitalize"
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        {service?.cta?.split('-').join(' ')}
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image
                            width={16}
                            height={16}
                            alt="arrow right"
                            src="/svgs/arrow-right.svg"
                          />
                        </motion.div>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
