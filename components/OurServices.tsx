import Image from 'next/image';

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
        <div className="w-full flex flex-col gap-6">
          <div className="flex gap-2.5 sm:gap-4">
            <Image
              width={59}
              height={27}
              alt={'icon'}
              src={'/svgs/section-icon-white.svg'}
              className="w-8 min-[400px]:w-12 sm:w-[59px]"
            />
            <p className="min-[400px]:text-lg sm:text-xl font-semibold">
              Our Services
            </p>
          </div>

          <div className="w-full mx-auto flex flex-col gap-12">
            <div className="flex justify-between items-end flex-wrap gap-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-snug font-semibold tracking-[-2%] max-w-[640px]">
                We Provide the Workers You Need, and When You Need Them.
              </h3>

              <button className="w-full sm:max-w-[207px] rounded-md bg-[#FAFAF7] text-[#010013] py-3 lg:py-4 px-5 lg:px-6 cursor-pointer text-sm sm:text-base lg:text-lg font-medium flex justify-center items-center gap-2.5">
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
              className="grid gap-5 sm:gap-6 grow"
              style={{
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
                  } rounded-2xl sm:rounded-[20px] text-[#FAFAF7] overflow-hidden py-6 px-5 flex gap-4`}
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

                  <div className="p-5 flex flex-col justify-between gap-4 border-[1px] border-[#FAFAF7] rounded-2xl grow">
                    <div className="flex flex-col gap-2.5">
                      <h3 className="text-lg sm:text-2xl font-semibold">
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
