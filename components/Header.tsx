'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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

  return (
    <>
      <header
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
            <Link
              key={route.title}
              href={route.route}
              className="capitalize text-black font-medium text-sm px-5 py-2"
            >
              {route.title}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact-us"
          className="w-full sm:w-fit rounded-md bg-transparent py-3 px-5 lg:px-6 cursor-pointer text-[#1462FF] text-sm font-medium outline-[1px] outline-[#1462FF] hidden md:flex text-center"
        >
          Contact Us
        </Link>

        <div
          className="relative w-7 aspect-square md:hidden"
          onClick={() => setShowMenu(true)}
        >
          <Image src="/svgs/hamburger.svg" alt="menu" fill />
        </div>
      </header>

      <div
        className="fixed inset-0 z-[60] bg-white md:hidden"
        style={{
          display: showMenu ? 'block' : 'none',
        }}
      >
        <div className="flex flex-col h-full">
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

            <div
              className="relative w-7 aspect-square"
              onClick={() => setShowMenu(false)}
            >
              <Image src="/svgs/close.svg" alt="menu" fill />
            </div>
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
                <Link
                  key={route.title}
                  href={route.route}
                  className="capitalize text-black font-medium py-2"
                >
                  {route.title}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact-us"
              className="w-full rounded-md bg-transparent p-3 cursor-pointer text-[#1462FF] font-medium outline-[1px] outline-[#1462FF] text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
