import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
