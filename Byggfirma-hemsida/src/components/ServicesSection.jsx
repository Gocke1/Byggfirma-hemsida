import { useState } from "react";

const services = [
  "Gipsentreprenad",
  "Stambyten",
  "Byggservice",
  "Ombyggnationer",
  "Tillbyggnationer",
  "Lokal anpassning",
  "Totalentreprenad",
  "Projektledning",
];

export default function ServicesSection({ onSelectService }) {
  const [active, setActive] = useState(null);

  return (
    <section id="tjanster" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold md:text-right text-neutralDark">Våra tjänster</h2>
          <p className="mt-4 text-neutralText md:text-right">
            Klicka på ett alternativ för att läsa mer. Längst ned i beskrivningen kan du kontakta oss direkt.
          </p>
        </div>
        <div className="order-1 md:order-2 space-y-2">
          {services.map((s, i) => (
// src/components/ServicesSection.jsx (bara knappen)
<button
  key={s}
  onClick={() => {
    setActive(i);
    onSelectService(s);
    requestAnimationFrame(() => {
      document.getElementById("service-details")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }}
  className={`w-full text-left px-4 py-3 rounded-xl border transition shadow-sm
    ${active===i
      ? "bg-white/80 backdrop-blur-sm border-white/40 ring-1 ring-black/10 text-primary"
      : "bg-white/70 hover:bg-white/80 backdrop-blur-sm border-white/30"}`}
>
  {s}
</button>

          ))}
        </div>
      </div>
    </section>
  );
}
