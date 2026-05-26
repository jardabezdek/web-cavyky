import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <span className="uppercase tracking-[0.2em] text-xs text-[#D4A373] mb-4 block font-bold">Náš příběh</span>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-10">Více než 10 let spolu</h3>
        </Reveal>

        <div className="space-y-6 text-stone-600 text-lg md:text-xl leading-relaxed font-light font-serif">
          <Reveal delay={200}>
            <p>
              Před více než dekádou jsme se potkali na vyškovském gymnáziu, založili kapelu a začali se sehrávat. Nejdřív jsme pracovali na vlastní tvorbě, ale brzy jsme zjistili, že nás nejvíc baví bavit lidi ověřenými hity.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              Nyní už se vlastní tvorbě nevěnujeme a veškerou energii investujeme do cavyků. Učíme se nové věci, objíždíme společenské akce a snažíme se lidem připomínat, že je na světě krásně.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              Na začátku roku 2026 se náš původní zpěvák Honza odstěhoval do zahraničí, a tak jsme otevřeli novou kapitolu. Do kapely přišla skvělá zpěvačka Monika, kterou můžete znát z brněnských kapel Demodium nebo Beaters. Ta s sebou přinesla svěží energii, zkušenosti i chuť posouvat naši muziku dál.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              #nedelejcavyky
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
