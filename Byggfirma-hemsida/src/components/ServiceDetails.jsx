// src/components/ServiceDetails.jsx
// Visar beskrivande text + bild för vald tjänst, med modern “glas”-stil.

const withBase = (path) => {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL

  return `${base}/${path.replace(/^\//, "")}`
}

const texts = {
  "Gipsentreprenad":
    "Vi levererar gipsentreprenader med hög precision – väggar, tak och speciallösningar. Rena ytor, raka tidplaner och snygga avslut. Behöver du en gipsentreprenad?",
  "Stambyten":
    "Trygga och strukturerade stambyten med modern metodik och tydlig kommunikation. Planering, genomförande och återställning enligt överenskommen tid och budget. Behöver du ett stambyte?",
  "Byggservice":
    "Snabb och pålitlig byggservice, från mindre åtgärder till löpande underhåll. Vi löser det praktiska så att du kan fokusera på vardagen. Behöver du byggservice?",
  "Ombyggnationer":
    "Förbättra flöden och uttryck utan onödiga störningar. Funktion och estetik i balans – anpassat efter dina behov. Behöver du en ombyggnation?",
  "Tillbyggnationer":
    "Mer utrymme och bättre funktion. Vi planerar och bygger till så att det harmonierar med befintlig miljö. Behöver du en tillbyggnation?",
  "Lokal anpassning":
    "Vi anpassar lokaler efter verksamhetens behov – snabbt, snyggt och säkert. Smidiga projekt med minimal driftstörning. Behöver du lokal anpassning?",
  "Totalentreprenad":
    "En kontakt – fullt ansvar. Vi driver processen från idé och projektering till produktion och slutbesiktning. Vi hanterar entreprenader i såväg ABT06 utförande som AB04. Behöver du en totalentreprenad?",
  "Projektledning":
    "Våra projektledare hjälper dig från idé till färdigt byggprojekt. Vi håller ihop tid, budget och kvalitet – med tydlig uppföljning och kommunikation. Behöver du en projektledare?",
};

const images = {
  // Försöker först ladda från /public/services/*.jpg
  // Finns inte filen? Faller tillbaka till en snygg Unsplash-bild.
  "Gipsentreprenad": withBase("services/gipsentreprenad.jpg"),
  "Stambyten": withBase("services/stambyten.jpg"),
  "Byggservice": withBase("services/byggservice.jpg"),
  "Ombyggnationer": withBase("services/ombyggnationer.jpg"),
  "Tillbyggnationer": withBase("services/tillbyggnationer.jpg"),
  "Lokal anpassning": withBase("services/lokal-anpassning.jpg"),
  "Totalentreprenad": withBase("services/totalentreprenad.jpg"),
  "Projektledning": withBase("services/projektledning.jpg"),
};

const fallbacks = {
  "Gipsentreprenad": "https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=1600&auto=format&fit=crop",
  "Stambyten": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
  "Byggservice": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
  "Ombyggnationer": "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop",
  "Tillbyggnationer": "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
  "Lokal anpassning": "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop",
  "Totalentreprenad": "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
  "Projektledning": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
};

export default function ServiceDetails({ service, onContactClick, onClose }) {
  if (!service) return null;

  const src = images[service] || fallbacks[service];
  const alt = `${service} – exempelbild`;
  const text = texts[service] || "";

  // OnError → använd fallback om lokala bilder saknas
  const handleImgError = (e) => {
    if (e.currentTarget.dataset.fallback !== "1") {
      e.currentTarget.src = fallbacks[service];
      e.currentTarget.dataset.fallback = "1";
    }
  };

  return (
    <section id="service-details" className="bg-[rgba(231,190,165,0.35)] border-t border-white/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-semibold">{service}</h3>
          <button onClick={onClose} className="text-neutralText hover:text-neutralDark">Stäng ✕</button>
        </div>

        {/* Glasat kort med bild + text i grid */}
        <div className="grid lg:grid-cols-2 gap-6 rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-black/10 border border-white/40 shadow-lg p-6">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={src}
              alt={alt}
              onError={handleImgError}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-neutralText leading-relaxed">{text}</p>

            <button
              onClick={onContactClick}
              className="mt-6 self-start bg-cta text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              {`Behöver du ${service.toLowerCase()}? Kontakta oss!`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
