'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROUTES = [
  {
    title: 'home',
    route: '/',
  },
  {
    title: 'about us',
    route: '/about-us',
  },
  {
    title: 'services',
    route: '/services',
  },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleLinkClick = () => {
    setIsClosing(true);
    // Add a small delay before actually closing to show the active state
    setTimeout(() => {
      setShowMenu(false);
      setIsClosing(false);
    }, 150);
  };

  return (
    <>
      <motion.header
        className="z-50 flex justify-between items-center gap-10 py-4 sticky top-0 left-0 right-0 bg-[#FFFFFF] text-[#0E0E0E]"
        style={{
          paddingInline: 'max(6.25vw, 20px)',
          boxShadow: '0px 2px 16px 0px #0000000D',
        }}
      >
        <div
          className="relative"
          style={{
            aspectRatio: 4.19 / 1,
            width: 'clamp(110px, 10.486vw, 151px)',
          }}
        >
          <Image src="/svgs/logo-black.svg" alt="logo" fill />
        </div>

        <nav className="hidden md:flex">
          {ROUTES.map((route) => (
            <motion.div
              key={route.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md overflow-hidden"
            >
              <Link
                href={route.route}
                className="capitalize text-black font-medium text-sm px-5 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              >
                {route.title}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            href="/contact-us"
            className="w-full sm:w-fit rounded-md bg-transparent py-3 px-5 lg:px-6 cursor-pointer text-[#1462FF] text-sm font-medium outline-[1px] outline-[#1462FF] flex text-center hover:bg-[#1462FF] hover:text-white transition-colors duration-300"
          >
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-7 aspect-square md:hidden cursor-pointer"
          onClick={() => setShowMenu(true)}
        >
          <Image src="/svgs/hamburger.svg" alt="menu" fill />
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white md:hidden"
          >
            <motion.div
              className="flex flex-col h-full"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                opacity: { duration: 0.4 },
              }}
            >
              <div
                className="z-50 flex justify-between items-center gap-10 py-4 sticky top-0 left-0 right-0 bg-[#FFFFFF] text-[#0E0E0E]"
                style={{
                  paddingInline: 'max(6.25vw, 20px)',
                  boxShadow: '0px 2px 16px 0px #0000000D',
                }}
              >
                <div
                  className="relative"
                  style={{
                    aspectRatio: 4.19 / 1,
                    width: 'clamp(110px, 10.486vw, 151px)',
                  }}
                >
                  <Image src="/svgs/logo-black.svg" alt="logo" fill />
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-7 aspect-square cursor-pointer"
                  onClick={() => setShowMenu(false)}
                >
                  <Image src="/svgs/close.svg" alt="menu" fill />
                </motion.div>
              </div>

              <div
                className="py-7 grow flex flex-col justify-between bg-[#F8F8FE]"
                style={{
                  paddingInline: 'max(6.25vw, 20px)',
                  boxShadow: '0px 2px 16px 0px #0000000D',
                }}
              >
                <nav className="flex flex-col gap-3">
                  {ROUTES.map((route) => (
                    <motion.div
                      key={route.title}
                      transition={{ duration: 0.2 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="rounded-lg overflow-hidden"
                      whileTap={{
                        scale: 0.98,
                        backgroundColor: 'rgba(20, 98, 255, 0.1)',
                      }}
                    >
                      <Link
                        href={route.route}
                        onClick={handleLinkClick}
                        className="capitalize text-black font-medium py-2 block rounded-lg px-2 hover:bg-white transition-colors duration-200 active:bg-blue-50 overflow-hidden"
                      >
                        {route.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{
                    scale: 0.98,
                    backgroundColor: '#1462FF',
                    color: '#FFFFFF',
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/contact-us"
                    onClick={handleLinkClick}
                    className="w-full rounded-md bg-transparent p-3 cursor-pointer text-[#1462FF] font-medium outline-[1px] outline-[#1462FF] text-center block hover:bg-[#1462FF] hover:text-white transition-colors duration-300 active:bg-[#1462FF] active:text-white"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
