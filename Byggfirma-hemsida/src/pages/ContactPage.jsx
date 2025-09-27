import Breadcrumbs from "../components/Breadcrumbs";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Breadcrumbs />
      <section className="bg-[rgba(231,190,165,0.35)] border-y border-white/30">
        <h1 className="text-4xl font-extrabold tracking-tight">Kontakta oss</h1>
        <p className="mt-4 text-neutralText">
          Har du frågor om våra tjänster, offert eller projekt? Hör av dig via formuläret eller telefon.
        </p>

        <form className="mt-8 space-y-4">
          {/* Förnamn (krav) */}
          <input
            type="text"
            placeholder="Förnamn *"
            required
            className="w-full border border-neutralLine rounded-lg p-3"
          />

          {/* Efternamn (valfritt) */}
          <input
            type="text"
            placeholder="Efternamn"
            className="w-full border border-neutralLine rounded-lg p-3"
          />

          {/* E-post (krav) */}
          <input
            type="email"
            placeholder="E-post *"
            required
            className="w-full border border-neutralLine rounded-lg p-3"
          />

          {/* Telefon (valfritt) */}
          <input
            type="tel"
            placeholder="Telefonnummer"
            className="w-full border border-neutralLine rounded-lg p-3"
          />

          {/* Meddelande */}
          <textarea
            placeholder="Hur kan vi hjälpa dig?"
            rows={5}
            required
            className="w-full border border-neutralLine rounded-lg p-3"
          ></textarea>

          <button
            type="submit"
            className="bg-cta text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Skicka meddelande
          </button>
        </form>
      </section>
    </div>
  );
}
