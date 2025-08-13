import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import OurServices from '@/components/OurServices';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <OurServices />
      <HowItWorks />
      <CTA />
    </div>
  );
}
