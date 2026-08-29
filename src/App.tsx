import Nav from '@/components/Nav';
import Hero from '@/sections/Hero';
import Marquee from '@/sections/Marquee';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Work from '@/sections/Work';
import Testimonials from '@/sections/Testimonials';
import Process from '@/sections/Process';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-ember focus:px-5 focus:py-3 focus:font-semibold focus:text-on-ember"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Work />
        <Testimonials />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
