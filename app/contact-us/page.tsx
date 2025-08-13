'use client';
import Image from 'next/image';
import { useState } from 'react';
import Input from '@/components/Form/Input';
import { CONTACT } from '@/components/Footer';

export default function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [experience, setExperience] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  return (
    <section
      className="bg-[#F8F8FE] py-20 text-[#010013] flex flex-col gap-10 items-center"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-2.5 sm:gap-4">
          <Image
            alt="icon"
            width={59}
            height={27}
            src="/svgs/section-icon.svg"
            className="w-8 min-[400px]:w-12 sm:w-[59px]"
          />
          <p className="min-[400px]:text-lg sm:text-xl font-semibold">
            Contact Us
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl leading-snug font-semibold tracking-[-2%] max-w-[640px]">
            Get In Touch
          </h3>
          <p className="max-w-[740px] text-sm sm:text-base lg:text-lg">
            {`Whether you’re a business looking for skilled workers or a candidate
            seeking your next opportunity, we’re here to help. Reach out to us
            today and let’s start building your future.`}
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-[1191px] mx-auto">
        <div className="flex flex-col gap-7 flex-1 grow">
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-col gap-6 w-full justify-between">
            {CONTACT.map((contact) => (
              <div className="flex flex-col gap-2.5" key={contact.title}>
                <h3 className="text-xl font-semibold">{contact.title}</h3>
                <div className="flex flex-col gap-1">
                  {contact.body.map((contact) => (
                    <p className="max-w-[260px]" key={contact.content}>
                      {contact.content}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="w-full grow rounded-2xl bg-[#DFDFDF]"
            style={{
              aspectRatio: 1.207 / 1,
            }}
          ></div>
        </div>

        <form
          action=""
          className="flex flex-col gap-7 lg:gap-8 bg-white p-8 rounded-lg flex-1 grow-[1.27]"
        >
          <div className="flex flex-col gap-5 lg:gap-6">
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
            <Input
              type="textarea"
              value={experience}
              label="Specific Skills & Experience"
              onChange={(value) => setExperience(value)}
              placeholder="Describe your skills, certifications and experience"
            />
          </div>

          <button className="w-full rounded-md bg-[#1462FF] py-4 cursor-pointer text-[#FAFAF7] text-sm font-medium">
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
}
