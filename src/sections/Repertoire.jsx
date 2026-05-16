import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { REPERTOIRE } from '../data/index.js';

export default function Repertoire() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="repertoire" className="py-24 bg-[#FAEDCD]/30 border-y border-[#D4A373]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-xs text-[#D4A373] mb-4 block font-bold">Co od nás uslyšíte</span>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Náš Repertoár</h3>
            <p className="text-stone-500 font-light max-w-2xl mx-auto">
              Na detailech záleží. Setlist stavíme tak, aby reagoval na náladu hostů a udržel parket plný.
              Tohle je jen malá ukázka toho, co s námi zažijete.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {REPERTOIRE.map((list, idx) => {
            const visibleSongs = isExpanded ? list.songs : list.songs.slice(0, 7);
            return (
              <Reveal key={idx} delay={idx * 200}>
                <div className="bg-[#FEFAE0]/50 p-8 border border-[#D4A373]/20 h-full flex flex-col">
                  <h4 className="text-2xl font-serif text-stone-900 mb-8 border-b border-[#D4A373]/30 pb-4">
                    {list.category}
                  </h4>
                  <ul className="space-y-4 flex-grow transition-all duration-500">
                    {visibleSongs.map((song, songIdx) => (
                      <li key={songIdx} className="flex flex-col border-b border-[#D4A373]/10 pb-3 last:border-0 last:pb-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <span className="text-stone-800 font-medium text-sm tracking-wide">{song.artist}</span>
                        <span className="text-stone-500 font-light font-serif italic">{song.title}</span>
                      </li>
                    ))}
                  </ul>
                  {!isExpanded && (
                    <div className="mt-8 pt-4 text-center">
                      <span className="text-xs tracking-[0.2em] uppercase text-[#D4A373] font-bold">A další...</span>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={600}>
          <div className="mt-16 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-4 uppercase tracking-[0.15em] text-xs transition-colors"
            >
              {isExpanded ? 'Skrýt kompletní repertoár' : 'Zobrazit kompletní repertoár (60+ skladeb)'}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
