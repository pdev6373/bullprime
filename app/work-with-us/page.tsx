'use client';
import emailjs from 'emailjs-com';
import { FormEvent, useEffect, useRef, useState } from 'react';
import Input from '@/components/Form/Input';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';
import Error from '@/components/Form/Error';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

type Error = {
  message: string;
  field: keyof typeof ERRORS;
};

const ERRORS = {
  captcha: ['Captcha is required'],
  fullName: ['Full name field is required'],
  email: ['Email field is required', 'Invalid email format'],
  phone: ['Phone number field is required'],
  industry: ['Industry field is required'],
  experience: ['Specific Skills & Experience field is required'],
};

const OPTIONS = [
  {
    label: 'Construction',
    value: 'Construction',
  },
  {
    label: 'Warehousing',
    value: 'Warehousing',
  },
  {
    label: 'Logistics',
    value: 'Logistics',
  },
  {
    label: 'Others',
    value: 'Others',
  },
];

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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const formVariants: Variants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.05,
      delayChildren: 0.3,
    },
  },
};

const inputRowVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const privacyVariants: Variants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const buttonVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function WorkWithUs() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState<Error[]>();
  const [experience, setExperience] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const getError = (field: keyof typeof ERRORS) =>
    errors?.find((error) => error.field === field);

  const updateError = (
    field: keyof typeof ERRORS,
    condition: boolean,
    message: string,
  ) => {
    if (!touched) return;
    setErrors((prev) => {
      const filtered = prev ? prev.filter((e) => e.field !== field) : [];
      if (condition) return [...filtered, { field, message }];
      return filtered.length > 0 ? filtered : undefined;
    });
  };

  const validateForm = () => {
    const newErrors: Error[] = [];

    if (!fullName.trim())
      newErrors.push({ field: 'fullName', message: ERRORS.fullName[0] });
    if (!phone.trim())
      newErrors.push({ field: 'phone', message: ERRORS.phone[0] });
    if (!industry.trim())
      newErrors.push({ field: 'industry', message: ERRORS.industry[0] });
    if (!experience.trim())
      newErrors.push({ field: 'experience', message: ERRORS.experience[0] });
    if (!captchaToken?.trim())
      newErrors.push({ field: 'captcha', message: ERRORS.captcha[0] });

    if (!email.trim())
      newErrors.push({ field: 'email', message: ERRORS.email[0] });
    else if (!EMAIL_REGEX.test(email))
      newErrors.push({ field: 'email', message: ERRORS.email[1] });

    setErrors(newErrors.length > 0 ? newErrors : undefined);
    return newErrors.length === 0;
  };

  useEffect(() => {
    updateError('fullName', !fullName.trim(), ERRORS.fullName[0]);
  }, [fullName, touched]);

  useEffect(() => {
    updateError('phone', !phone.trim(), ERRORS.phone[0]);
  }, [phone, touched]);

  useEffect(() => {
    if (!email.trim()) updateError('email', true, ERRORS.email[0]);
    else updateError('email', !EMAIL_REGEX.test(email), ERRORS.email[1]);
  }, [email, touched]);

  useEffect(() => {
    updateError('industry', !industry.trim(), ERRORS.industry[0]);
  }, [industry, touched]);

  useEffect(() => {
    updateError('experience', !experience.trim(), ERRORS.experience[0]);
  }, [experience, touched]);

  useEffect(() => {
    updateError('captcha', !captchaToken?.trim(), ERRORS.captcha[0]);
  }, [captchaToken, touched]);

  const contactHandler = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    setTouched(true);

    const isValid = validateForm();
    if (!isValid) return;

    const hasErrors = errors && errors.length > 0;
    if (hasErrors) return;

    setLoading(true);

    emailjs
      .send(
        'service_bekbvjj',
        'template_4cvonfg',
        {
          email,
          phone,
          industry,
          fullName,
          experience,
          additionalInfo: additionalInfo || 'none',
          time: new Date().toLocaleString(),
          'g-recaptcha-response': captchaToken,
        },
        'dye1HuyesZvddJgOq',
      )
      .then(
        () => {
          setTouched(false);
          {
            setTimeout(() => {
              setEmail('');
              setPhone('');
              setIndustry('');
              setFullName('');
              setExperience('');
              setAdditionalInfo('');
              setCaptchaToken(null);
              recaptchaRef.current?.reset();
              router.push('/work-with-us/submitted');
            }, 100);
          }
        },
        (err) => console.error(err),
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-[#F8F8FE] text-[#010013] flex flex-col items-center"
      style={{
        gap: 'clamp(24px, 2.7778vw, 40px)',
        paddingInline: 'max(6.25vw, 20px)',
        paddingBlock: 'clamp(36px, 5.556vw, 80px)',
      }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2.5 sm:gap-4"
        >
          <motion.div
            className="flex items-center"
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              alt="icon"
              width={59}
              height={27}
              src="/svgs/section-icon.svg"
              style={{
                width: 'clamp(30px, 3.33vw, 48px)',
              }}
            />
          </motion.div>
          <motion.p
            className="min-[400px]:text-lg xl:text-xl font-semibold"
            style={{
              fontSize: 'clamp(16px, 1.389vw, 20px)',
            }}
          >
            Contact Us
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-2 text-center"
        >
          <motion.h3
            className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 36px)',
            }}
          >
            Join Our Skilled Worker Network
          </motion.h3>
          <motion.p
            className="md:max-w-[41.11vw]"
            style={{
              fontSize: 'clamp(14px, 1.25vw, 18px)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {`Take the next step in your career. Connect with top employers in
            construction and warehousing.`}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        variants={formVariants}
        className="bg-white rounded-lg flex flex-col w-full max-w-[932px]"
        style={{
          gap: 'clamp(28px, 3.33vw, 48px)',
          padding: 'clamp(20px, 2.222vw, 32px)',
        }}
      >
        <motion.div variants={inputRowVariants} className="flex flex-col gap-1">
          <h3
            className="font-medium tracking-[-2%]"
            style={{
              fontSize: 'clamp(16px, 1.25vw, 18px)',
            }}
          >
            Workers Registration Form
          </h3>
          <p className="text-sm">
            Please fill out all required fields. Our team will review your
            application and contact you soon.
          </p>
        </motion.div>

        <form
          className="flex flex-col"
          style={{
            gap: 'clamp(20px, 2.222vw, 32px)',
          }}
        >
          <div
            className="flex flex-col"
            style={{
              gap: 'clamp(20px, 1.6667vw, 24px)',
            }}
          >
            <motion.div
              variants={inputRowVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.div
                className="grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  value={fullName}
                  className="grow"
                  label="Your Full Name*"
                  placeholder="John Doe"
                  onChange={(value) => setFullName(value)}
                  showError={getError('fullName')?.field === 'fullName'}
                  errorText={getError('fullName')?.message}
                />
              </motion.div>
              <motion.div
                className="grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  value={email}
                  className="grow"
                  label="Your Email Address*"
                  placeholder="Ex. example@gmail.com"
                  onChange={(value) => setEmail(value)}
                  showError={getError('email')?.field === 'email'}
                  errorText={getError('email')?.message}
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={inputRowVariants}
              className="flex flex-col md:flex-row gap-4"
            >
              <motion.div
                className="flex-1 grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="tel"
                  className="grow"
                  value={phone}
                  label="Phone Number*"
                  placeholder="+1233456789"
                  onChange={(value) => setPhone(value)}
                  showError={getError('phone')?.field === 'phone'}
                  errorText={getError('phone')?.message}
                />
              </motion.div>
              <motion.div
                className="flex-1 grow"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="select"
                  className="grow"
                  value={industry}
                  options={OPTIONS}
                  label="Primary Industry*"
                  placeholder="Select Industry"
                  onChange={(value) => setIndustry(value)}
                  showError={getError('industry')?.field === 'industry'}
                  errorText={getError('industry')?.message}
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={inputRowVariants}
              whileFocus={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                type="textarea"
                value={experience}
                label="Specific Skills & Experience*"
                onChange={(value) => setExperience(value)}
                placeholder="Describe your skills, certifications and experience"
                showError={getError('experience')?.field === 'experience'}
                errorText={getError('experience')?.message}
              />
            </motion.div>

            <motion.div
              variants={inputRowVariants}
              whileFocus={{ scale: 1.005 }}
              transition={{ duration: 0.2 }}
            >
              <Input
                type="textarea"
                value={additionalInfo}
                label="Additional Information (Optional)"
                onChange={(value) => setAdditionalInfo(value)}
                placeholder="Any other information you would love to share"
              />
            </motion.div>

            <div className="flex flex-col">
              <div className="recaptcha-container">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  onChange={(token) => setCaptchaToken(token)}
                  sitekey="6LfNSKgrAAAAABR5M5DPNB9zXdxUN-0VNbKvCXct"
                />
              </div>
              {getError('captcha')?.field === 'captcha' && (
                <Error text={getError('captcha')?.message} />
              )}
            </div>
          </div>

          <motion.div
            variants={privacyVariants}
            className="bg-[#F2F6FF] rounded-xl md:rounded-2xl p-4 flex items-start gap-2 text-[#1462FF]"
          >
            <motion.div transition={{ duration: 0.6 }} className="shrink-0">
              <img
                src="/svgs/info.svg"
                alt="info"
                width={24}
                height={24}
                className="aspect-square pt-0.5"
                style={{
                  width: 'clamp(20px, 1.6667vw, 24px)',
                }}
              />
            </motion.div>
            <div className="flex flex-col gap-1">
              <p
                className="font-bold"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 18px)',
                }}
              >
                Privacy Notice
              </p>
              <p
                className="tracking-[-2%]"
                style={{
                  fontSize: 'clamp(14px, 1.25vw, 18px)',
                }}
              >
                Your information will be kept confidential and used only for
                recruitment purposes. We do not share personal data with third
                parties without your consent.
              </p>
            </div>
          </motion.div>

          <motion.div variants={buttonVariants}>
            <motion.button
              onClick={contactHandler}
              className="w-full sm:max-w-[282px] rounded-md bg-[#1462FF] py-4 cursor-pointer text-[#FAFAF7] text-sm font-medium"
              whileHover={{
                scale: 1.02,
                backgroundColor: '#0F52E6',
                boxShadow: '0 8px 25px rgba(20, 98, 255, 0.3)',
                transition: { duration: 0.2 },
              }}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </motion.section>
  );
}
