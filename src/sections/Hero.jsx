import Reveal from '../components/Reveal.jsx';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <Reveal>
        <span className="uppercase tracking-[0.3em] text-xs text-[#D4A373] mb-6 block font-bold">Svatební a párty kapela</span>
      </Reveal>

      <Reveal delay={200}>
        <h2 className="text-5xl md:text-8xl font-serif text-stone-900 mb-6 leading-tight">
          Nedělej cavyky <br />
          <span className="italic text-stone-400 font-light">&</span> pozvi si nás.
        </h2>
      </Reveal>

      <Reveal delay={400}>
        <p className="max-w-2xl text-stone-500 text-lg md:text-xl font-light mb-12">
          Živá hudba s duší a energií. Hrajeme průřez tím nejlepším pro vaše nezapomenutelné okamžiky.
        </p>
      </Reveal>

      <Reveal delay={600} className="w-full">
        <div className="w-full h-[50vh] md:h-[65vh] overflow-hidden relative">
          <img
            src="/photos/main.jpg"
            alt="Cavyky na pódiu"
            className="w-full h-full object-cover grayscale-[20%] sepia-[15%] animate-slow-zoom"
          />
        </div>
      </Reveal>
    </section>
  );
}
