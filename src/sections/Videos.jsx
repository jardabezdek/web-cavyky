import Reveal from '../components/Reveal.jsx';
import { YOUTUBE_VIDEOS } from '../data/index.js';

export default function Videos() {
  return (
    <section id="videos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.2em] text-xs text-[#D4A373] mb-4 block font-bold">Poslechněte si nás</span>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Živé ukázky</h3>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {YOUTUBE_VIDEOS.map((video, idx) => (
            <Reveal key={video.id} delay={idx * 200}>
              <div className="p-3 border border-[#D4A373]/30 bg-[#FAEDCD]/20 h-full flex flex-col">
                <div className="relative w-full pt-[56.25%] overflow-hidden bg-stone-900 shadow-sm">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 mb-2 text-center px-4 flex-grow flex flex-col justify-center">
                  <h4 className="text-xl font-serif text-stone-900 mb-2">{video.title}</h4>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
