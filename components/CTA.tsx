'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="bg-[#1462FF] py-12 sm:py-14 gap-10 flex justify-center"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <motion.div
        className="flex justify-between items-center flex-col-reverse min-[920px]:flex-row gap-10 w-full max-w-[1152px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grow flex flex-col gap-5 w-full min-[920px]:w-auto max-w-[700px] mx-auto min-[920px]:mx-0">
          <motion.div className="flex flex-col gap-2" variants={itemVariants}>
            <h3
              className="font-bold leading-[1.1] hidden sm:block"
              style={{
                fontSize: 'clamp(32px, 3.8889vw, 56px)',
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
          </motion.div>

          <motion.div
            className="flex gap-4 items-center text-sm sm:text-base lg:text-lg font-medium flex-wrap sm:flex-nowrap"
            variants={itemVariants}
          >
            <Link href={'/work-with-us'} className="w-full sm:max-w-fit">
              <motion.button
                className="w-full sm:max-w-fit rounded-md bg-[#FAFAF7] text-[#010013] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 4px 20px rgba(250, 250, 247, 0.2)',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Join as a worker
              </motion.button>
            </Link>

            <Link href={'/hire-workers'} className="w-full sm:max-w-fit">
              <motion.button
                className="w-full sm:max-w-fit rounded-md bg-transparent outline-[1px] outline-[#FAFAF7] py-3 px-5 cursor-pointer text-sm font-medium flex justify-center items-center gap-2.5"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: 'rgba(250, 250, 247, 0.05)',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Request for workers
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div variants={imageVariants}>
          <Image
            alt="cta"
            width={473}
            height={473}
            src="/pngs/cta.png"
            className="w-full max-w-[700px] min-[920px]:hidden"
          />
        </motion.div>

        <motion.div
          className="relative grow hidden min-[920px]:block"
          style={{
            width: 'clamp(380px, 32.847vw, 473px)',
            aspectRatio: 1 / 1,
          }}
          variants={imageVariants}
        >
          <Image fill alt="cta" src="/pngs/cta.png" className="object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
}
