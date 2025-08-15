'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const QUICK_LINKS = [
  {
    title: 'About Us',
    route: '/about-us',
  },
  {
    title: 'Our Services',
    route: '/services',
  },
  {
    title: 'Contact Us',
    route: '/contact-us',
  },
  {
    title: 'Hire Workers',
    route: '/request-workers-form',
  },
  {
    title: 'Work With Us',
    route: '/skilled-workers-form',
  },
];

export const CONTACT = [
  {
    title: 'We are open',
    body: [
      {
        content: 'Mondays - Fridays',
      },
      {
        content: '9:00am - 5:00pm',
      },
    ],
  },
  {
    title: 'Call Us:',
    body: [
      {
        content: '+447784269848',
      },
    ],
  },
  {
    title: 'Find Us:',
    body: [
      {
        content:
          '62 Tong Street, Suite 37, The Enterprise Hub, Bradford, England, BD4 9LX',
      },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    name: 'facebook',
    src: '/svgs/facebook.svg',
    href: 'https://www.facebook.com/profile.php?id=61578792181616',
  },
  {
    name: 'instagram',
    src: '/svgs/instagram.svg',
    href: 'https://www.instagram.com/bullprimeservices?igsh=MWlsbnc3NGp4MzJtZg==',
  },
];

// Animation variants
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

const logoVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const linkVariants: Variants = {
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

const socialVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};

const footerBottomVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.8,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
      className="flex flex-col gap-8 mt-auto pb-6 pt-10 sm:pb-8 sm:pt-12 bg-[#131057] text-sm sm:text-base text-[#FAFAF7]"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <div className="flex justify-between gap-10 sm:gap-16 md:gap-20 flex-wrap flex-col sm:flex-row sm:px-8">
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-6 grow"
        >
          <Link href={'/'}>
            <motion.div
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
              style={{
                aspectRatio: 4.23 / 1,
                width: 'clamp(110px, 10.486vw, 151px)',
              }}
            >
              <Image src="/svgs/logo-white.svg" alt="logo" fill />
            </motion.div>
          </Link>

          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <motion.p variants={itemVariants}>Stay Connected</motion.p>

            <motion.div variants={containerVariants} className="flex gap-2.5">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a
                  key={link.name}
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  href={link.href}
                  custom={index}
                >
                  <Image
                    src={link.src}
                    alt={link.name}
                    width={32}
                    height={32}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="flex justify-between grow gap-10 sm:gap-16 md:gap-20 flex-wrap flex-col sm:flex-row">
          <motion.div variants={itemVariants} className="flex flex-col gap-2.5">
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold"
            >
              Quick Links
            </motion.h2>

            <motion.div variants={containerVariants} className="flex flex-col">
              {QUICK_LINKS.map((link) => (
                <motion.div key={link.title} variants={linkVariants}>
                  <Link
                    href={link.route}
                    className="py-1.5 inline-block hover:text-blue-300 transition-colors duration-200"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {link.title}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <motion.h2
              variants={itemVariants}
              className="text-xl font-semibold"
            >
              Contact Us
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-4"
            >
              {CONTACT.map((contact, index) => (
                <motion.div
                  key={contact.title}
                  variants={itemVariants}
                  whileHover={{
                    x: 5,
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                  className="flex flex-col gap-2"
                >
                  <motion.h3 variants={itemVariants} className="font-semibold">
                    {contact.title}
                  </motion.h3>
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-col gap-1"
                  >
                    {contact.body.map((contactItem) => (
                      <motion.p
                        key={contactItem.content}
                        variants={linkVariants}
                        className="max-w-[330px]"
                      >
                        {contactItem.content}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={footerBottomVariants}
        className="flex justify-between items-center gap-5 sm:gap-8 flex-wrap py-6 border-t-[1px] border-t-[#E6E5E7] sm:px-4"
      >
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Copyright © Bull Prime Services Limited 2025
        </motion.p>

        <motion.span
          className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:gap-1"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.a
            href=""
            whileHover={{
              color: '#93c5fd',
              transition: { duration: 0.2 },
            }}
          >
            User Terms and Condition
          </motion.a>
          <span className="hidden min-[400px]:block"> | </span>
          <motion.a
            href=""
            whileHover={{
              color: '#93c5fd',
              transition: { duration: 0.2 },
            }}
          >
            Privacy Policy
          </motion.a>
        </motion.span>
      </motion.div>
    </motion.footer>
  );
}
