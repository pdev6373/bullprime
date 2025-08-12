import Image from 'next/image';

export default function CTA() {
  return (
    <section
      className="bg-[#1462FF] py-12 sm:py-14 gap-10 flex justify-center"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <div className="flex justify-between items-center flex-col-reverse min-[920px]:flex-row gap-10 w-full max-w-[1152px]">
        <div className="grow flex flex-col gap-5 w-full min-[920px]:w-auto max-w-[700px] mx-auto min-[920px]:mx-0">
          <div className="flex flex-col gap-2">
            <h3
              className="font-bold leading-[1.1] hidden sm:block"
              style={{
                fontSize: 'clamp(40px, 3.88vw, 56px)',
              }}
            >
              Ready to get started?
            </h3>
            <h3
              className="font-bold leading-[1.1] sm:hidden"
              style={{
                fontSize: 'clamp(24px, 5.6vw, 48px)',
              }}
            >
              Ready to get started?
            </h3>
            <p className="max-w-[591px] text-sm sm:text-base">
              {`Whether you're a skilled worker looking for opportunities or a
              business needing talent, we're here to help you succeed. Let's
              start the conversation today.`}
            </p>
          </div>

          <div className="flex gap-4 items-center text-sm sm:text-base lg:text-lg font-medium flex-wrap sm:flex-nowrap">
            <button className="w-full sm:w-fit rounded-md bg-[#FAFAF7] text-[#0E0E0E] py-3 lg:py-4 px-5 lg:px-6 cursor-pointer">
              Join as a worker
            </button>
            <button className="w-full sm:w-fit rounded-md bg-transparent outline outline-[#FAFAF7] py-3 lg:py-4 px-5 lg:px-6 cursor-pointer">
              Request for workers
            </button>
          </div>
        </div>

        <Image
          alt="cta"
          width={473}
          height={473}
          src="/pngs/cta.png"
          className="w-full max-w-[700px] min-[920px]:hidden"
        />

        <div
          className="relative grow hidden min-[920px]:block"
          style={{
            width: 'clamp(380px, 32.847vw, 473px)',
            aspectRatio: 1 / 1,
          }}
        >
          <Image fill alt="cta" src="/pngs/cta.png" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
