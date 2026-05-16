import Reveal from '../components/Reveal.jsx';
import { SERVICES } from '../data/index.js';

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Kde hrajeme</h3>
            <p className="text-stone-500 font-light max-w-2xl mx-auto">
              Přijedeme, nazvučíme a odehrajeme. Vlastníme veškerou aparaturu, takže se s námi nemusíte o nic starat.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => (
            <Reveal key={idx} delay={idx * 200}>
              <div className="border-t border-[#D4A373]/40 pt-8 group h-full">
                <span className="text-xs tracking-[0.2em] uppercase text-[#D4A373] font-bold mb-4 block">0{idx + 1}</span>
                <h4 className="text-2xl font-serif text-stone-900 mb-4">{service.title}</h4>
                <p className="text-stone-600 font-light leading-relaxed">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
