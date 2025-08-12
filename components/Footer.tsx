import Link from 'next/link';
import Image from 'next/image';

const QUICK_LINKS = [
  {
    title: 'About Us',
    route: '#about-us',
  },
  {
    title: 'Our Services',
    route: '#our-services',
  },
  {
    title: 'Hire Workers',
    route: '#hire-workers',
  },
  {
    title: 'Work With Us',
    route: '#work-with-us',
  },
];

const CONTACT = [
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
    href: '',
  },
  {
    name: 'instagram',
    src: '/svgs/instagram.svg',
    href: '',
  },
];

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-8 mt-auto pb-6 pt-10 sm:pb-8 sm:pt-12 bg-[#131057] text-sm sm:text-base text-[#FAFAF7]"
      style={{
        paddingInline: 'max(6.25vw, 20px)',
      }}
    >
      <div className="flex justify-between gap-10 sm:gap-16 md:gap-20 flex-wrap flex-col sm:flex-row sm:px-8">
        <div className="flex flex-col gap-6 grow">
          <div
            className="relative"
            style={{
              aspectRatio: 4.23 / 1,
              width: 'clamp(120px, 15.28vw, 220px)',
            }}
          >
            <Image src="/svgs/logo-white.svg" alt="logo" fill />
          </div>

          <div className="flex flex-col gap-2">
            <p>Stay Connected</p>

            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((link) => (
                <a target="_blank" href={link.href} key={link.name}>
                  <Image
                    src={link.src}
                    alt={link.name}
                    width={32}
                    height={32}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between grow gap-10 sm:gap-16 md:gap-20 flex-wrap flex-col sm:flex-row">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-xl font-semibold">Quick Links</h2>

            <div className="flex flex-col">
              {QUICK_LINKS.map((link) => (
                <Link href={link.route} className="py-1.5" key={link.title}>
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Contact Us</h2>

            <div className="flex flex-col gap-4">
              {CONTACT.map((contact) => (
                <div className="flex flex-col gap-2.5" key={contact.title}>
                  <h3 className="font-semibold">{contact.title}</h3>
                  <div className="flex flex-col gap-1">
                    {contact.body.map((contact) => (
                      <p className="max-w-[330px]" key={contact.content}>
                        {contact.content}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-5 sm:gap-8 flex-wrap py-6 border-t-[1px] border-t-[#E6E5E7] sm:px-4">
        <p>Copyright © Bull Prime Services Limited 2025</p>

        <span className="flex flex-col gap-2 min-[400px]:flex-row min-[400px]:gap-1">
          <a href="">User Terms and Condition</a>
          <span className="hidden min-[400px]:block"> | </span>
          <a href="">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
}
