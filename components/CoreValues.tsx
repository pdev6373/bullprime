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
    <div
      id="our-services"
      className="relative bg-[#131057] py-8 pb-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-[#FAFAF7] flex justify-center"
      style={{
        paddingInline: 'clamp(20px, 6.25vw, 90px)',
      }}
    >
      <div className="w-full max-w-[1158px]">
        <div className="absolute top-0 left-0 right-0 z-10">
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
        </div>

        <section className="flex justify-center w-full">
          <div className="w-full flex flex-col gap-5">
            <motion.div
              variants={itemVariants}
              className="items-center gap-2.5 sm:gap-4 hidden min-[405px]:flex"
            >
              <motion.div className="flex items-center">
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
                Our Core Values
              </motion.p>
            </motion.div>

            <div
              className="flex justify-between items-end flex-wrap w-full"
              style={{
                gap: 'clamp(28px, 3.33vw, 48px)',
              }}
            >
              <h3
                className="leading-snug font-semibold tracking-[-2%] max-w-[820px]"
                style={{
                  fontSize: 'clamp(20px, 2.7778vw, 40px)',
                }}
              >
                The principles that guide everything we do and shape our
                commitment to excellence.
              </h3>

              <div className="flex flex-col md:flex-row gap-6 sm:gap-7 grow">
                <div
                  className="relative w-full rounded-2xl overflow-hidden md:max-w-[432px]"
                  style={{
                    aspectRatio: 1 / 1.12,
                  }}
                >
                  <Image
                    fill
                    alt="image"
                    src={'/pngs/principle.png'}
                    className="w-full object-cover"
                  />
                </div>

                <div className="flex flex-col gap-5 justify-between grow">
                  {PRINCIPLES.map((principle, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h3 className="text-lg sm:text-2xl font-semibold">
                        {principle.heading}
                      </h3>

                      <p
                        className="max-w-[650px]"
                        style={{
                          fontSize: 'clamp(16px, 1.389vw, 20px)',
                        }}
                      >
                        {principle.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
