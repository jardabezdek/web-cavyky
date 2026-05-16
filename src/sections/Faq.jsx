import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { FAQ } from '../data/index.js';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-[#FEFAE0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-xs text-[#D4A373] mb-4 block font-bold">Dobré vědět</span>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Časté dotazy</h3>
          </div>
        </Reveal>

        <div className="space-y-2">
          {FAQ.map((faq, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="border-b border-[#D4A373]/30">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                >
                  <h4 className="text-xl font-serif text-stone-900 group-hover:text-[#D4A373] transition-colors pr-8">
                    {faq.question}
                  </h4>
                  <ChevronDown
                    className={`text-[#D4A373] transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}
                    size={24}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === idx ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-stone-600 font-light leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
