'use client';
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

const slideInLeft: Variants = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const scaleIn: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const principleVariants: Variants = {
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

const PRINCIPLES = [
  {
    heading: 'Professionalism',
    content:
      'We handle every interaction with the highest level of respect and expertise.',
  },
  {
    heading: 'Integrity',
    content:
      'We believe in honest, transparent communication with both clients and workers.',
  },
  {
    heading: 'Quality',
    content:
      'We only provide candidates who are trained, compliant, and job-ready.',
  },
  {
    heading: 'Client Success',
    content: 'Your business growth is at the heart of what we do',
  },
];

export default function CoreValues() {
  return (
    <motion.div
      id="our-services"
      className="relative bg-[#fff] py-8 pb-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-[#010013] flex justify-center"
      style={{
        paddingInline: 'clamp(20px, 6.25vw, 90px)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full max-w-[1158px]">
        <section className="flex justify-center w-full">
          <div className="w-full flex flex-col gap-5">
            <motion.div
              variants={itemVariants}
              className="items-center gap-2.5 sm:gap-4 hidden min-[405px]:flex"
            >
              <motion.div className="flex items-center" variants={scaleIn}>
                <img
                  alt="icon"
                  width={59}
                  height={27}
                  src="/svgs/section-icon-black.svg"
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
                Our Core Values
              </motion.p>
            </motion.div>

            <div
              className="flex justify-between items-end flex-wrap w-full"
              style={{
                gap: 'clamp(28px, 3.33vw, 48px)',
              }}
            >
              <motion.h3
                className="leading-snug font-semibold tracking-[-2%] max-w-[820px]"
                style={{
                  fontSize: 'clamp(20px, 2.7778vw, 40px)',
                }}
                variants={slideInLeft}
              >
                The principles that guide everything we do and shape our
                commitment to excellence.
              </motion.h3>

              <div className="flex flex-col md:flex-row gap-6 sm:gap-7 grow">
                <motion.div
                  className="relative w-full rounded-2xl overflow-hidden flex-1 grow md:max-w-[432px]"
                  style={{
                    aspectRatio: 1 / 1.12,
                  }}
                  variants={scaleIn}
                >
                  <img
                    alt="image"
                    src={'/pngs/principle.png'}
                    className="w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col gap-5 justify-between flex-1 grow"
                  variants={staggerContainer}
                >
                  {PRINCIPLES.map((principle, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col gap-2"
                      variants={principleVariants}
                    >
                      <motion.h3
                        className="font-semibold"
                        style={{
                          fontSize: 'clamp(16px, 1.6667vw, 24px)',
                        }}
                        initial={{ opacity: 0.8 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {principle.heading}
                      </motion.h3>

                      <motion.p
                        className="lg:max-w-[45.1389vw]"
                        style={{
                          fontSize: 'clamp(16px, 1.389vw, 20px)',
                        }}
                        initial={{ opacity: 0.9 }}
                        whileInView={{ opacity: 1 }}
                      >
                        {principle.content}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
