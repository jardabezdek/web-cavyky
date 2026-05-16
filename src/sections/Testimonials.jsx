import Reveal from '../components/Reveal.jsx';
import { TESTIMONIALS } from '../data/index.js';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#CCD5AE]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="uppercase tracking-[0.2em] text-xs text-[#D4A373] mb-4 block font-bold">Co o nás říkají</span>
            <h3 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900">Ohlasy</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          {TESTIMONIALS.map((testimonial, idx) => (
            <Reveal key={idx} delay={idx * 200}>
              <div className="flex flex-col h-full border-t border-[#CCD5AE] pt-8">
                <span className="text-6xl text-[#CCD5AE] font-serif leading-none mb-4 absolute -mt-4">"</span>
                <p className="text-xl md:text-2xl font-serif italic font-light leading-relaxed flex-grow mb-8 text-stone-600 relative z-10 pt-4">
                  {testimonial.text}
                </p>
                <div>
                  <p className="uppercase tracking-[0.15em] text-xs font-bold text-stone-900">{testimonial.author}</p>
                  <p className="text-stone-500 text-xs mt-1 tracking-wider">{testimonial.event}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
