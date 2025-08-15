'use client';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import { LatLngExpression } from 'leaflet';
import Input from '@/components/Form/Input';
import { CONTACT } from '@/components/Footer';
import { useState, useEffect, FormEvent } from 'react';
import { motion, Variants } from 'framer-motion';

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

// Animation variants
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
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

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

  const isValid =
    subject.trim() &&
    message.trim() &&
    lastName.trim() &&
    firstName?.trim() &&
    EMAIL_REGEX.test(email);

  const contactHandler = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    if (!isValid) return;

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          email,
          subject,
          message,
          firstName,
          lastName,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setEmail('');
          setSubject('');
          setMessage('');
          setFirstName('');
          setLastName('');
          setTimeout(() => {
            setIsMessageSent(true);
          }, 100);
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
              <Image
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
                  placeholder="Enter first name"
                  onChange={(value) => setFirstName(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  value={lastName}
                  className="grow"
                  label="Last Name*"
                  placeholder="Enter last name"
                  onChange={(value) => setLastName(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  className="grow"
                  value={email}
                  label="Email Address*"
                  placeholder="Enter email address"
                  onChange={(value) => setEmail(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  className="grow"
                  value={subject}
                  label="Subject*"
                  placeholder="Enter subject"
                  onChange={(value) => setSubject(value)}
                />
              </motion.div>
              <motion.div variants={inputVariants}>
                <Input
                  type="textarea"
                  value={message}
                  label="Your Message"
                  placeholder="Enter your message here"
                  onChange={(value) => setMessage(value)}
                />
              </motion.div>
            </motion.div>

            <motion.button
              variants={inputVariants}
              whileHover={{
                scale: isValid ? 1.02 : 1,
                backgroundColor: isValid ? '#0f4fff' : undefined,
              }}
              whileTap={{ scale: isValid ? 0.98 : 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full rounded-md bg-[#1462FF] py-4 cursor-pointer text-[#FAFAF7] text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50 transition-opacity duration-300"
              disabled={!isValid}
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
                className="bg-[#E7F6EC] rounded-lg p-4 flex flex-col gap-1 text-[#0F973D] text-center shadow-md"
              >
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg font-medium tracking-[-2%]"
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
