import { useState } from "react";

export default function ContactForm({ service, onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: service ? `Jag är intresserad av ${service}.` : "",
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // HTML5 "required" sköter grundkraven. Här kan du lägga extra validering vid behov.
    alert(`Tack! Vi kontaktar dig.\n\n${JSON.stringify(form, null, 2)}`);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Mörk bakgrund + blur för “glas”-känsla */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Glas-panel: mjuk vit transparens, ring, skugga */}
      <div className="relative w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md ring-1 ring-black/10 shadow-xl p-6 border border-white/30">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-neutralText hover:text-neutralDark"
          aria-label="Stäng"
        >
          ✕
        </button>

        <h4 className="text-xl font-semibold text-neutralDark">
          Kontakta oss {service ? `om ${service}` : ""}
        </h4>
        <p className="mt-1 text-sm text-neutralText">Fält markerade med * är obligatoriska.</p>

        <form onSubmit={submit} className="mt-4 space-y-3">
          {/* Förnamn (krav) */}
          <input
            name="firstName"
            type="text"
            placeholder="Förnamn *"
            required
            value={form.firstName}
            onChange={onChange}
            className="w-full rounded-lg px-3 py-2 bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-cta"
          />

          {/* Efternamn (valfritt) */}
          <input
            name="lastName"
            type="text"
            placeholder="Efternamn (valfritt)"
            value={form.lastName}
            onChange={onChange}
            className="w-full rounded-lg px-3 py-2 bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-cta"
          />

          {/* E-post (krav) */}
          <input
            name="email"
            type="email"
            placeholder="E-post *"
            required
            value={form.email}
            onChange={onChange}
            className="w-full rounded-lg px-3 py-2 bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-cta"
          />

          {/* Telefon (valfritt) */}
          <input
            name="phone"
            type="tel"
            placeholder="Telefon (valfritt)"
            value={form.phone}
            onChange={onChange}
            className="w-full rounded-lg px-3 py-2 bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-cta"
          />

          {/* Meddelande (krav) */}
          <textarea
            name="message"
            rows={4}
            placeholder="Hur kan vi hjälpa dig?"
            required
            value={form.message}
            onChange={onChange}
            className="w-full rounded-lg px-3 py-2 bg-white/70 border border-white/40 focus:outline-none focus:ring-2 focus:ring-cta"
          />

          <button
            type="submit"
            className="w-full bg-cta text-white rounded-lg py-2 font-medium hover:opacity-90 transition"
          >
            Skicka
          </button>
        </form>
      </div>
    </div>
  );
}
