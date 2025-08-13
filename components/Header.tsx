import Link from 'next/link';
import Image from 'next/image';

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
  return (
    <header
      className="z-30 flex justify-between items-center gap-10 py-4 sticky top-0 left-0 right-0 bg-[#FFFFFF] text-[#0E0E0E]"
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
        className="w-full sm:w-fit rounded-md bg-transparent py-3 px-5 lg:px-6 cursor-pointer text-[#1462FF] text-sm font-medium outline-[1px] outline-[#1462FF] hidden md:flex"
      >
        Contact Us
      </Link>
    </header>
  );
}
