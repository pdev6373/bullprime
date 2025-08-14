'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

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
      'We believe a prepared workforce benefits everyone – businesses see improved performance, and workers feel more confident in their roles. That’s why we invest in training and compliance support to make sure every candidate meets industry requirements before they start.',
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

export default function Services() {
  return (
    <div>
      <div
        className="bg-[url('/pngs/service-hero.png')] bg-cover bg-center aspect-[1.83/1]"
        style={
          {
            // aspectRatio: 1.83 / 1,
          }
        }
      >
        <div className="flex items-end h-full">
          <h1 className="text-white text-5xl font-bold">
            Welcome to Our Website
          </h1>
        </div>
      </div>

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
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h3
            className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
            style={{
              fontSize: 'clamp(24px, 2.7778vw, 40px)',
            }}
          >
            Service We Provide
          </h3>
          <p
            className="md:max-w-[51.389vw]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 18px)',
            }}
          >
            {`At Bull Prime Services Ltd, we provide tailored recruitment solutions for the construction and warehousing sectors — connecting you with skilled, reliable, and compliant workers when you need them, with plans to expand into more industries soon.`}
          </p>
        </motion.div>

        <div
          className="flex flex-col w-full lg:max-w-[1185px] mx-auto"
          style={{
            gap: 'clamp(36px, 5vw, 72px)',
          }}
        >
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`${
                index % 2 ? 'bg-[#131057] text-[#E6E5E7]' : 'bg-[#F8F8FE]'
              } rounded-2xl lg:rounded-3xl flex flex-col w-full`}
              style={{
                padding: 'clamp(20px, 2.222vw, 32px)',
                gap: 'clamp(20px, 1.6667vw, 24px)',
              }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } justify-between lg:items-center gap-6 lg:gap-8 w-full lg:max-w-[1152px]`}
              >
                <div
                  className="relative grow hidden lg:block"
                  style={{
                    width: 'clamp(500px, 43.47vw, 626px)',
                    aspectRatio: 1.609 / 1,
                  }}
                >
                  <Image
                    fill
                    alt="cta"
                    src={service.image}
                    className="object-cover"
                  />
                </div>

                <div
                  className="relative grow lg:hidden"
                  style={{
                    width: '100%',
                    aspectRatio: 1.609 / 1,
                  }}
                >
                  <Image
                    fill
                    alt="cta"
                    src={service.image}
                    className="object-cover"
                  />
                </div>

                <div
                  className="grow w-full lg:max-w-[463px] flex flex-col"
                  style={{
                    gap: 'clamp(20px, 1.6667vw, 24px)',
                  }}
                >
                  <div className="flex flex-col gap-3">
                    <h3
                      className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
                      style={{
                        fontSize: 'clamp(24px, 2.5vw, 36px)',
                      }}
                    >
                      {service.heading}
                    </h3>
                    <p
                      className="max-w-[600px]"
                      style={{
                        fontSize: 'clamp(14px, 1.25vw, 18px)',
                      }}
                    >
                      {service.content}
                    </p>
                  </div>

                  <div>
                    {index % 2 ? (
                      <button className="w-full sm:max-w-fit rounded-md bg-[#FAFAF7] text-[#010013] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5 capitalize">
                        {service?.cta?.split('-').join(' ')}
                        <Image
                          width={16}
                          height={16}
                          alt="arrow right"
                          src="/svgs/arrow-right.svg"
                        />
                      </button>
                    ) : (
                      <button className="w-full sm:max-w-fit rounded-md bg-[#1462FF] text-[#FAFAF7] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5 capitalize">
                        {service?.cta?.split('-').join(' ')}
                        <Image
                          width={16}
                          height={16}
                          alt="arrow right"
                          src="/svgs/arrow-right-white.svg"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="flex flex-col min-[890px]:flex-row justify-between gap-8 rounded-lg lg:rounded-2xl bg-[#E7EFFF] border-[1.5px] border-[#E6E5E7]"
                style={{
                  padding: 'clamp(20px, 1.6667vw, 24px)',
                }}
              >
                <div className="flex-1 flex flex-col gap-2 min-[890px]:gap-3">
                  <h3
                    className="font-semibold text-[#010013]"
                    style={{
                      fontSize: 'clamp(16px, 1.389vw, 20px)',
                    }}
                  >
                    What we offer:
                  </h3>

                  <ul>
                    {service.offers.map((offer) => (
                      <li
                        key={offer}
                        className="list-disc ml-5 text-[#343342] tracking-[-2%] marker:text-[#343342] marker:text-xs"
                        style={{
                          fontSize: 'clamp(14px, 1.25vw, 18px)',
                        }}
                      >
                        {offer}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 flex flex-col gap-2 min-[890px]:gap-3">
                  <h3
                    className="font-semibold text-[#010013]"
                    style={{
                      fontSize: 'clamp(16px, 1.389vw, 20px)',
                    }}
                  >
                    Why choose our construction staffing:
                  </h3>

                  <ul>
                    {service.reasons.map((reason) => (
                      <li
                        key={reason}
                        className="list-disc ml-5 text-[#343342] tracking-[-2%] marker:text-[#343342] marker:text-xs"
                        style={{
                          fontSize: 'clamp(14px, 1.25vw, 18px)',
                        }}
                      >
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
