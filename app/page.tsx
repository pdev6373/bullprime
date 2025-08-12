import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import OurServices from '@/components/OurServices';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <OurServices />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
