import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, MOBILE_NAV_LINKS } from '../data/index.js';

const SECTIONS = ['home', 'about', 'services', 'videos', 'repertoire', 'gallery', 'testimonials', 'faq', 'contact'];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#FEFAE0]/90 backdrop-blur-md border-b border-[#D4A373]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          <div className="flex-shrink-0 cursor-pointer flex items-center h-full py-4" onClick={() => scrollToSection('home')}>
            <img
              src="/logo.png"
              alt="Cavyky Logo"
              className="h-10 md:h-16 w-auto object-contain hover:opacity-70 transition-opacity"
            />
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`uppercase tracking-[0.15em] text-xs transition-colors hover:text-stone-900 ${
                    activeSection === item.id ? 'text-stone-900 border-b border-stone-900 pb-1' : 'text-stone-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-6 py-2 uppercase tracking-[0.15em] text-xs transition-colors"
              >
                Poptávka
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-stone-500 hover:text-stone-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#FEFAE0] border-b border-[#D4A373]/30">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {MOBILE_NAV_LINKS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-4 uppercase tracking-[0.15em] text-xs text-stone-600 hover:text-stone-900 border-b border-stone-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
