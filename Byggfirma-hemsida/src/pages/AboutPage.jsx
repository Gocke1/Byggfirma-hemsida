import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Brödsmulor */}
      <Breadcrumbs />

      {/* Hero-rad */}
      <section className="bg-[rgba(231,190,165,0.35)] border-y border-white/30">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 ring-1 ring-black/5 shadow-md p-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Om <span className="text-primary">Construere Bygg</span>
            </h1>
            <p className="mt-4 text-neutralText leading-relaxed">
              Vi hjälper privatpersoner, fastighetsägare och företag från idé till färdigt resultat.
              Vårt fokus är kvalitet, tydlig kommunikation och leverans i tid.
            </p>
            <ul className="mt-6 space-y-2 text-neutralText">
              <li>• Trygga processer och ordning & reda på arbetsplatsen</li>
              <li>• Erfarna lag inom renovering, om- och tillbyggnader</li>
              <li>• Projektering och projektledning vid totalentreprenad</li>
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-card border border-neutralLine">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
              alt="Construere Bygg team"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Värden / varför oss */}
      <section className="bg-[rgba(231,190,165,0.35)] border-y border-white/30">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 ring-1 ring-black/5 shadow-md p-6">
          <h2 className="text-3xl font-bold">Varför välja oss?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white border border-neutralLine p-6 shadow-card">
              <h3 className="font-semibold">Kvalitet i varje detalj</h3>
              <p className="mt-2 text-neutralText">
                Vi bygger hållbart och noggrant – från underarbete till sista list.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-neutralLine p-6 shadow-card">
              <h3 className="font-semibold">Tydliga tidplaner</h3>
              <p className="mt-2 text-neutralText">
                Tidsramar är heliga. Vi planerar smart och håller det vi lovar.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-neutralLine p-6 shadow-card">
              <h3 className="font-semibold">En kontaktperson</h3>
              <p className="mt-2 text-neutralText">
                Du får en ansvarig projektledare som håller ihop hela projektet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[rgba(231,190,165,0.35)] border-y border-white/30">
        <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 ring-1 ring-black/5 shadow-md p-6">
          <h2 className="text-3xl font-bold">Så jobbar vi</h2>
          <ol className="mt-6 grid md:grid-cols-4 gap-6">
            {[
              ["01. Kontakt", "Vi går igenom ditt behov och bokar platsbesök."],
              ["02. Offert", "Tydlig omfattning, tidplan och fast pris där det är möjligt."],
              ["03. Produktion", "Ordning & reda på arbetsplatsen och löpande avstämningar."],
              ["04. Slutbesiktning", "Genomgång och överlämning – nöjd kund är målet."],
            ].map(([title, text]) => (
              <li key={title} className="rounded-xl bg-white border border-neutralLine p-4 shadow-sm">
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-1 text-neutralText">{text}</p>
              </li>
            ))}
          </ol>
          <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 ring-1 ring-black/5 shadow-md p-6">
            <Link
              to="/tjanster"
              className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 ring-1 ring-black/5 shadow-md p-6"
            >
              Utforska våra tjänster
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
