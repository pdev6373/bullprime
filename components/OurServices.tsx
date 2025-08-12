import Image from 'next/image';

const BUSINESS_STEPS = [
  {
    heading: 'Tell Us What You Need',
    content: 'Fill out a quick 2 minutes form to describe your requirements.',
  },
  {
    heading: 'We find a perfect Match',
    content: 'Our Team will review your request and find a match.',
  },
  {
    heading: 'Interview and Hire',
    content: 'Meet candidates, make offers and start immediately.',
  },
  {
    heading: 'Work Starts',
    content: 'Fully trained, equipped, and ready to start working.',
  },
];

const WORKERS_STEPS = [
  {
    heading: 'Tell us about yourself',
    content: 'Fill out a quick 2 minutes form to describe your skills.',
  },
  {
    heading: 'Get Verified',
    content: 'Our Team will reach out for verification & accreditation.',
  },
  {
    heading: 'Interview and Hire',
    content: 'Get Matched to available jobs from our Job List.',
  },
];

export default function OurServices() {
  return (
    <section
      className="bg-[#131057] py-24 text-[#010013] flex justify-center"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <div className="w-full flex flex-col gap-28">
        <div className="flex gap-4">
          <Image
            width={59}
            height={27}
            alt={'icon'}
            src={'/svgs/section-icon.svg'}
          />
          <p className="text-xl font-semibold">How it Works</p>
        </div>

        <div className="w-full max-w-[815px] mx-auto flex flex-col gap-8">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-semibold tracking-[-2%] max-w-[427px]">
                <span className="text-[#1462FF]">For Workers:</span> Better
                Jobs, Higher Pay, Faster Placement
              </h3>
              <p className="max-w-[390px]">
                Stop waiting for opportunities. Get access to the best
                construction and warehouse jobs immediately.
              </p>
            </div>

            <button className="w-full sm:max-w-[207px] rounded-md bg-[#1462FF] text-[#FAFAF7] py-3 lg:py-4 px-5 lg:px-6 cursor-pointer text-sm sm:text-base lg:text-lg font-medium">
              Work With Us
            </button>
          </div>

          <div
            className="grid gap-4 grow"
            style={{
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(16em, 100%), 1fr))',
            }}
          >
            {WORKERS_STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-2xl text-[#131057] overflow-hidden"
                style={{
                  boxShadow: '0px 2px 16px 3px #0000000D',
                }}
              >
                <div className="px-4 py-7 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">
                    {index + 1} {step.heading}
                  </h3>
                  <p>{step.content}</p>
                </div>

                <div className="bg-[#131057] text-[#FAFAF7] flex justify-between items-center gap-5 py-2 px-4 font-medium">
                  <p>Step</p>
                  <p>0{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
