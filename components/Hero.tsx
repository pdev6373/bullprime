import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="bg-[#F8F8FE] py-12 sm:py-14 gap-10 flex justify-center text-[#010013]"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <div className="flex justify-between items-center flex-col-reverse min-[920px]:flex-row gap-10 w-full max-w-[1152px]">
        <div className="grow flex flex-col gap-5 w-full min-[920px]:w-auto max-w-[700px] mx-auto min-[920px]:mx-0">
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
            <button className="w-full sm:w-fit rounded-md bg-[#1462FF] text-[#FAFAF7] py-3 px-5 cursor-pointer text-sm outline-[1px] outline-[#1462FF]">
              Work With Us
            </button>
            <button className="w-full sm:w-fit rounded-md bg-transparent outline-[1px] outline-[#1462FF] py-3 px-5 cursor-pointer text-[#1462FF] text-sm">
              Hire Now
            </button>
          </div>
        </div>

        <Image
          alt="cta"
          width={666}
          height={428}
          src="/pngs/hero.png"
          className="w-full max-w-[666px] min-[920px]:hidden"
        />

        <div
          className="relative grow hidden min-[920px]:block"
          style={{
            width: 'clamp(500px, 46.25vw, 666px)',
            aspectRatio: 1.556 / 1,
          }}
        >
          <Image fill alt="cta" src="/pngs/hero.png" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
