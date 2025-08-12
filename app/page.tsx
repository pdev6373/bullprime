import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HowItWorks from '@/components/HowItWorks';
import OurServices from '@/components/OurServices';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <OurServices />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
