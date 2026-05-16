import Nav from './sections/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Services from './sections/Services.jsx';
import Videos from './sections/Videos.jsx';
import Repertoire from './sections/Repertoire.jsx';
import Gallery from './sections/Gallery.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Faq from './sections/Faq.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FEFAE0] text-stone-800 font-sans selection:bg-[#D4A373] selection:text-white overflow-x-hidden">
      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slowZoom 30s ease-in-out infinite alternate;
        }
      `}</style>

      <Nav />
      <Hero />
      <About />
      <Services />
      <Videos />
      <Repertoire />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
