'use client';
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

const SERVICES = [
  {
    image: '/pngs/service-one.png',
    heading: 'Construction Staffing',
    content:
      'Building the right team for your projects. We supply skilled and semi-skilled workers for construction sites, ranging from general labourers to qualified tradespeople. Our candidates undergo thorough vetting to ensure they have the expertise and safety awareness required for demanding construction environments.',
    cta: 'hire-now',
  },
  {
    image: '/pngs/service-two.png',
    heading: 'Warehousing Staff',
    content:
      'Reliable staffing for smooth supply chain operations. Our warehousing recruitment solutions ensure your logistics operations never face staff shortages. We supply trained personnel who can seamlessly integrate into your existing processes, improving efficiency and productivity',
    cta: 'learn-more',
  },
  {
    image: '/pngs/service-three.png',
    heading: 'Training & Compliance',
    content:
      'Empowering workers with skills and certifications. We believe a prepared workforce is a successful workforce. That’s why we offer training and compliance support to ensure candidates meet industry standards before stepping on site. This not only benefits businesses but also boosts workers’ confidence and career growth.',
    cta: 'call-us-now',
  },
];

export default function OurServices() {
  return (
    <div
      className="relative bg-[#131057] py-8 pb-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 text-[#FAFAF7]"
      id="our-services"
    >
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

      <section
        className="flex justify-center"
        style={{
          paddingInline: 'max(6.25vw, 20px)',
        }}
      >
        <div
          className="w-full flex flex-col"
          style={{
            gap: 'clamp(20px, 1.6667vw, 24px)',
          }}
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
            <div className="flex justify-between items-end flex-wrap gap-6">
              <h3
                className="leading-snug font-semibold tracking-[-2%] sm:max-w-[64.44vw] md:max-w-[54.44vw] lg:max-w-[44.44vw]"
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                }}
              >
                We Provide the Workers You Need, and When You Need Them.
              </h3>

              <button className="w-full sm:max-w-[150px] rounded-md bg-[#FAFAF7] text-[#010013] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5">
                Contact Us
                <Image
                  width={16}
                  height={16}
                  alt="arrow right"
                  src="/svgs/arrow-right.svg"
                />
              </button>
            </div>

            <div
              className="grid grow"
              style={{
                gap: 'clamp(20px, 1.6667vw, 24px)',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(22em, 100%), 1fr))',
              }}
            >
              {SERVICES.map((service, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2
                      ? 'bg-[#1462FF] flex-col-reverse'
                      : 'bg-[#2B2868] flex-col'
                  } rounded-2xl sm:rounded-[20px] text-[#FAFAF7] overflow-hidden flex gap-4`}
                  style={{
                    paddingInline: 'clamp(16px, 1.389vw, 20px)',
                    paddingBlock: 'clamp(20px, 1.6667vw, 24px)',
                  }}
                >
                  <div
                    className="relative w-full rounded-2xl overflow-hidden"
                    style={{
                      aspectRatio: 1.61 / 1,
                    }}
                  >
                    <Image
                      fill
                      alt="image"
                      src={service.image}
                      className="w-full object-cover"
                    />
                  </div>

                  <div
                    className="flex flex-col justify-between gap-4 border-[1px] border-[#FAFAF7] rounded-2xl grow"
                    style={{
                      padding: 'clamp(16px, 1.389vw, 20px)',
                    }}
                  >
                    <div className="flex flex-col gap-2">
                      <h3
                        className="font-semibold"
                        style={{
                          fontSize: 'clamp(16px, 1.389vw, 20px)',
                        }}
                      >
                        {service.heading}
                      </h3>

                      <div className="w-full h-[0.5px] bg-[#CCCCD0]" />

                      <p className="text-sm">{service.content}</p>
                    </div>

                    <button className="w-full sm:max-w-fit rounded-md bg-[#FAFAF7] text-[#010013] py-3 px-4 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5 capitalize">
                      {service?.cta?.split('-').join(' ')}
                      <Image
                        width={16}
                        height={16}
                        alt="arrow right"
                        src="/svgs/arrow-right.svg"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
