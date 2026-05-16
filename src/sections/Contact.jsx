import { useState } from 'react';
import { Instagram, Facebook } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const INITIAL_FORM_DATA = { name: '', email: '', eventType: 'Svatba', date: '', location: '', message: '' };

const inputClass = "w-full bg-transparent border-0 border-b border-stone-300 px-0 py-3 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors placeholder:text-stone-400 font-light";

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "855c8177-4ca0-43d3-909a-3d457df58cdb",
          name: formData.name,
          email: formData.email,
          eventType: formData.eventType,
          date: formData.date,
          location: formData.location,
          message: formData.message,
          subject: `Nová poptávka z webu: ${formData.eventType} - ${formData.date} (${formData.location})`,
          from_name: "Web Cavyky",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormData(INITIAL_FORM_DATA);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 6000);
    }
  };

  const updateField = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          <Reveal>
            <div>
              <span className="uppercase tracking-[0.2em] text-xs text-stone-500 mb-4 block">Kontakt</span>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8">Napište nám</h3>
              <p className="text-stone-600 font-light mb-12 leading-relaxed">
                Společně probereme, o jaký typ akce se jedná, jaký je váš vysněný playlist a doladíme všechny detaily. Těšíme se na vaši zprávu.
              </p>

              <div className="space-y-8 font-serif text-lg">
                <div>
                  <h5 className="text-xs font-sans uppercase tracking-[0.15em] text-stone-400 mb-2">Telefon</h5>
                  <a href="tel:+420725836832" className="text-stone-900 hover:text-stone-500 transition-colors italic">
                    +420 725 836 832
                  </a>
                </div>

                <div>
                  <h5 className="text-xs font-sans uppercase tracking-[0.15em] text-stone-400 mb-2">E-mail</h5>
                  <a href="mailto:cavykyband@gmail.com" className="text-stone-900 hover:text-stone-500 transition-colors italic">
                    cavykyband@gmail.com
                  </a>
                </div>

                <div>
                  <h5 className="text-xs font-sans uppercase tracking-[0.15em] text-stone-400 mb-2">Působnost</h5>
                    <span className="text-stone-900 italic">Čechy, Morava a Slezsko</span>
                </div>

                <div className="pt-8 flex gap-6">
                  <a href="https://www.instagram.com/cavykyband/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.facebook.com/Cavyky/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors">
                      <Facebook size={20} />
                    </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-[#FAEDCD]/30 p-8 md:p-12 border border-[#D4A373]/20 relative">
              <h4 className="text-2xl font-serif text-stone-900 mb-8">Poptávka</h4>

              {formStatus === 'success' && (
                <div className="mb-8 border border-green-200 bg-green-50 text-green-800 px-4 py-3 text-sm italic transition-all">
                  Děkujeme! Poptávka byla úspěšně odeslána. Brzy se vám ozveme.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mb-8 border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm italic transition-all">
                  Něco se pokazilo. Zkuste to prosím znovu, nebo nám rovnou zavolejte.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={updateField('name')}
                    className={inputClass}
                    placeholder="Vaše jméno nebo společnost"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={updateField('email')}
                      className={inputClass}
                      placeholder="E-mail"
                    />
                  </div>
                  <div>
                    <select
                      value={formData.eventType}
                      onChange={updateField('eventType')}
                      className={inputClass + " appearance-none"}
                    >
                      <option>Svatba</option>
                      <option>Oslava / Párty</option>
                      <option>Ples</option>
                      <option>Firemní večírek</option>
                      <option>Jiné</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={updateField('date')}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={updateField('location')}
                      className={inputClass}
                      placeholder="Místo konání (město, statek...)"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={1}
                    required
                    value={formData.message}
                    onChange={(e) => {
                      updateField('message')(e);
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                    className={inputClass + " resize-none overflow-hidden"}
                    placeholder="Vaše představy o vystoupení, speciální přání..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white py-4 mt-4 uppercase tracking-[0.15em] text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Odesílám...' : 'Odeslat poptávku'}
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
