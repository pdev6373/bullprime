'use client';
import Image from 'next/image';
import { useState } from 'react';
import Input from '@/components/Form/Input';

export default function RequestSkilledWorkers() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [experience, setExperience] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  return (
    <section className="bg-[#F8F8FE] py-20 text-[#010013] flex flex-col gap-10 items-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-2.5 sm:gap-4">
          <Image
            width={59}
            height={27}
            alt={'icon'}
            src={'/svgs/section-icon.svg'}
            className="w-8 min-[400px]:w-12 sm:w-[59px]"
          />
          <p className="min-[400px]:text-lg sm:text-xl font-semibold">
            Contact Us
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-snug font-semibold tracking-[-2%] max-w-[640px]">
            Join Our Skilled Worker Network
          </h3>
          <p className="max-w-[591px] text-sm sm:text-base lg:text-lg">
            Take the next step in your career. Connect with top employers in
            construction and warehousing.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg flex flex-col gap-12 w-full max-w-[932px]">
        <div className="flex flex-col gap-1.5">
          <h3 className="lg:text-lg font-medium tracking-[-2%]">
            Workers Registration Form
          </h3>
          <p className="text-sm">
            Please fill out all required fields. Our team will review your
            application and contact you soon.
          </p>
        </div>

        <form action="" className="flex flex-col gap-7 lg:gap-8">
          <div className="flex flex-col gap-5 lg:gap-6">
            <div className="flex gap-4">
              <Input
                value={fullName}
                className="grow"
                label="Your Full Name*"
                placeholder="Ex. John Doe"
                onChange={(value) => setFullName(value)}
              />
              <Input
                value={email}
                className="grow"
                label="Your Email Address*"
                placeholder="example@gmail.com"
                onChange={(value) => setEmail(value)}
              />
            </div>
            <div className="flex gap-4">
              <Input
                className="grow"
                value={experience}
                label="Phone Number*"
                placeholder="+1233456789"
                onChange={(value) => setExperience(value)}
              />
              <Input
                className="grow"
                value={additionalInfo}
                label="Primary Industry*"
                placeholder="Select Industry"
                onChange={(value) => setAdditionalInfo(value)}
              />
            </div>
            <Input
              type="textarea"
              value={experience}
              label="Specific Skills & Experience"
              onChange={(value) => setExperience(value)}
              placeholder="Describe your skills, certifications and experience"
            />
            <Input
              type="textarea"
              value={additionalInfo}
              label="Additional Information (Optional)"
              onChange={(value) => setAdditionalInfo(value)}
              placeholder="Any other information you would love to share"
            />
          </div>

          <div className="bg-[#F2F6FF] rounded-2xl p-4 flex items-start gap-2.5 text-[#1462FF]">
            <Image src="/svgs/info.svg" alt="info" width={24} height={24} />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Privacy Notice</p>
              <p className="text-lg tracking-[-2%]">
                Your information will be kept confidential and used only for
                recruitment purposes. We do not share personal data with third
                parties without your consent.
              </p>
            </div>
          </div>

          <div>
            <button className="w-full max-w-[282px] rounded-md bg-[#1462FF] py-4 cursor-pointer text-[#FAFAF7] text-sm font-medium">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
