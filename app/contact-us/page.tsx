'use client';
import emailjs from 'emailjs-com';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';
import Input from '@/components/Form/Input';
import { CONTACT } from '@/components/Footer';
import ReCAPTCHA from 'react-google-recaptcha';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect, FormEvent, useRef } from 'react';
import Error from '@/components/Form/Error';

type Error = {
  message: string;
  field: keyof typeof ERRORS;
};

const ERRORS = {
  captcha: ['Captcha is required'],
  subject: ['Subject field is required'],
  message: ['Message field is required'],
  lastName: ['Last name field is required'],
  firstName: ['First name field is required'],
  email: ['Email field is required', 'Invalid email format'],
};

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false },
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false },
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false },
);

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const POSITION: LatLngExpression = [53.771948, -1.722736];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

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

const formVariants: Variants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

const mapVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.4,
    },
  },
};

const inputVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export default function ContactUs() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [lastName, setLastName] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [errors, setErrors] = useState<Error[]>();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const getError = (field: keyof typeof ERRORS) =>
    errors?.find((error) => error.field == field);

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

    if (!firstName.trim())
      newErrors.push({ field: 'firstName', message: ERRORS.firstName[0] });
    if (!lastName.trim())
      newErrors.push({ field: 'lastName', message: ERRORS.lastName[0] });
    if (!subject.trim())
      newErrors.push({ field: 'subject', message: ERRORS.subject[0] });
    if (!message.trim())
      newErrors.push({ field: 'message', message: ERRORS.message[0] });
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
    updateError('firstName', !firstName.trim(), ERRORS.firstName[0]);
  }, [firstName]);

  useEffect(() => {
    updateError('lastName', !lastName.trim(), ERRORS.lastName[0]);
  }, [lastName]);

  useEffect(() => {
    if (!email.trim()) updateError('email', true, ERRORS.email[0]);
    else updateError('email', !EMAIL_REGEX.test(email), ERRORS.email[1]);
  }, [email]);

  useEffect(() => {
    updateError('subject', !subject.trim(), ERRORS.subject[0]);
  }, [subject]);

  useEffect(() => {
    updateError('message', !message.trim(), ERRORS.message[0]);
  }, [message]);

  useEffect(() => {
    updateError('captcha', !captchaToken?.trim(), ERRORS.captcha[0]);
  }, [captchaToken]);

  useEffect(() => {
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })
        ._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    });
  }, []);

  useEffect(() => {
    setIsMessageSent(false);
  }, [subject, message, lastName, firstName, email]);

  const contactHandler = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    setTouched(true);

    const isValid = validateForm();
    if (!isValid) return;

    if (!email.trim()) updateError('email', true, ERRORS.email[0]);
    else updateError('email', !EMAIL_REGEX.test(email), ERRORS.email[1]);

    const hasErrors = errors && errors.length > 0;
    if (hasErrors) return;

    setLoading(true);

    emailjs
      .send(
        'service_bekbvjj',
        'template_dz7ndsn',
        {
          email,
          subject,
          message,
          firstName,
          lastName,
          time: new Date().toLocaleString(),
          'g-recaptcha-response': captchaToken,
        },
        'dye1HuyesZvddJgOq',
      )
      .then(
        () => {
          setTouched(false);
          setTimeout(() => {
            setEmail('');
            setSubject('');
            setMessage('');
            setFirstName('');
            setLastName('');
            setCaptchaToken(null);
            recaptchaRef.current?.reset();
          }, 100);
          setTimeout(() => {
            setIsMessageSent(true);
          }, 200);
        },
        (err) => console.error(err),
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className="bg-[#F8F8FE] text-[#010013]"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
        paddingBlock: 'clamp(36px, 5.556vw, 80px)',
      }}
    >
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="flex flex-col items-center"
        viewport={{ once: true, margin: '-100px' }}
        style={{
          gap: 'clamp(32px, 3.8889vw, 56px)',
        }}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-5 sm:gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2.5 sm:gap-4"
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
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
            <p
              className="min-[400px]:text-lg xl:text-xl font-semibold"
              style={{
                fontSize: 'clamp(16px, 1.389vw, 20px)',
              }}
            >
              Contact Us
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 text-center"
          >
            <h3
              className="leading-snug font-semibold tracking-[-2%] max-w-[640px]"
              style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
              }}
            >
              Get In Touch
            </h3>
            <p
              className="md:max-w-[51.389vw]"
              style={{
                fontSize: 'clamp(14px, 1.25vw, 18px)',
              }}
            >
              {`Whether you're a business looking for skilled workers or a candidate
            seeking your next opportunity, we're here to help. Reach out to us
            today and let's start building your future.`}
            </p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row gap-10 w-full max-w-[1191px] mx-auto">
          <motion.div
            variants={mapVariants}
            className="flex flex-col gap-6 lg:gap-7 flex-1 grow"
          >
            <motion.div
              variants={containerVariants}
              className="flex flex-col md:flex-row flex-wrap lg:flex-col gap-4 lg:gap-5 w-full justify-between"
            >
              {CONTACT.map((contact) => (
                <motion.div
                  key={contact.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex flex-col gap-1.5 p-4 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors duration-300"
                >
                  <h3
                    className="font-semibold"
                    style={{
                      fontSize: 'clamp(16px, 1.3889vw, 20px)',
                    }}
                  >
                    {contact.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {contact.body.map((contact) => (
                      <p
                        className="max-w-[260px]"
                        key={contact.content}
                        style={{
                          fontSize: 'clamp(14px, 1.111vw, 16px)',
                        }}
                      >
                        {contact.content}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative z-40 w-full grow rounded-2xl bg-[#DFDFDF] overflow-hidden shadow-lg"
              style={{
                aspectRatio: 1.207 / 1,
              }}
            >
              <MapContainer
                center={POSITION}
                zoom={15}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={POSITION}>
                  <Popup>
                    62 Tong Street, Suite 37
                    <br />
                    The Enterprise Hub
                    <br />
                    Bradford, BD4 9LX
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </motion.div>

          <motion.form
            variants={formVariants}
            onSubmit={contactHandler}
            className="flex flex-col gap-6 lg:gap-7 bg-white rounded-lg flex-1 grow-[1.1] shadow-lg"
            style={{
              padding: 'clamp(20px, 2.222vw, 32px)',
            }}
          >
            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-5 lg:gap-6"
            >
              <motion.div variants={inputVariants}>
                <Input
                  value={firstName}
                  className="grow"
                  label="First Name*"
                  placeholder="Ex. John"
                  errorText={getError('firstName')?.message}
                  showError={getError('firstName')?.field == 'firstName'}
                  onChange={(value) => setFirstName(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  value={lastName}
                  className="grow"
                  label="Last Name*"
                  placeholder="Ex. Doe"
                  errorText={getError('lastName')?.message}
                  showError={getError('lastName')?.field == 'lastName'}
                  onChange={(value) => setLastName(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  className="grow"
                  value={email}
                  label="Email Address*"
                  placeholder="Ex. example@gmail.com"
                  errorText={getError('email')?.message}
                  showError={getError('email')?.field == 'email'}
                  onChange={(value) => setEmail(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  className="grow"
                  value={subject}
                  label="Subject*"
                  errorText={getError('subject')?.message}
                  showError={getError('subject')?.field == 'subject'}
                  placeholder="Enter subject"
                  onChange={(value) => setSubject(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  type="textarea"
                  value={message}
                  label="Message*"
                  errorText={getError('message')?.message}
                  showError={getError('message')?.field == 'message'}
                  placeholder="Enter your message here"
                  onChange={(value) => setMessage(value)}
                />
              </motion.div>
            </motion.div>

            <div className="flex flex-col">
              <div className="recaptcha-container">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  onChange={(token) => setCaptchaToken(token)}
                  sitekey="6LfNSKgrAAAAABR5M5DPNB9zXdxUN-0VNbKvCXct"
                />
              </div>

              {getError('captcha')?.field == 'captcha' && (
                <Error text={getError('captcha')?.message} />
              )}
            </div>

            <motion.button
              variants={inputVariants}
              transition={{ type: 'spring', stiffness: 200, delay: 0 }}
              className="w-full rounded-md bg-[#1462FF] py-4 cursor-pointer text-[#FAFAF7] text-sm font-medium transition-all duration-300 hover:bg-[#0f4fff] hover:scale-[100.5%]"
            >
              {loading ? 'Submitting...' : 'Submit Form'}
            </motion.button>

            {isMessageSent && !loading && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: 0.1,
                }}
                className="bg-[#E7F6EC] rounded-md sm:rounded-lg p-3 sm:p-4 flex flex-col gap-1 text-[#0F973D] text-center shadow-md"
              >
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-medium tracking-[-2%]"
                  style={{
                    fontSize: 'clamp(14px, 1.25vw, 18px)',
                  }}
                >
                  Thank you for reaching out.
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm"
                >
                  Our team will get back to you shortly
                </motion.p>
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
}
