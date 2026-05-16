import { useState } from 'react';
import { X } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { GALLERY_IMAGES } from '../data/index.js';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-12 text-center">Okamžiky</h3>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[250px] md:auto-rows-[400px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <Reveal
              key={img.id}
              delay={idx * 150}
              className={idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}
            >
              <div
                className="relative group overflow-hidden cursor-pointer w-full h-full"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[20%] sepia-[10%]"
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors"
          >
            <X size={32} strokeWidth={1} />
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            loading="lazy"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
