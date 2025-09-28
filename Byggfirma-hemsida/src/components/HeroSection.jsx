// src/components/HeroSection.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const gallery = [hero1, hero2, hero3];

export default function HeroSection({ onCta }) {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % gallery.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative h-[88vh] mt-0">
      <div
        className="absolute inset-0 bg-cover bg-center transition-[background-image] duration-1000 ease-soft"
        style={{ backgroundImage: `url(${gallery[idx]})` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Välkommen till <span className="text-accent">Construere Bygg</span>
        </h1>
        <p
          className={`mt-5 text-white/90 text-lg sm:text-xl transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Från mindre renoveringar till totalentreprenader. Rätt utfört, i tid – med kvalitet.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link
            to="/tjanster"
            className="px-5 py-3 rounded-lg bg-white text-neutralDark font-medium border border-neutralLine hover:bg-site/40 transition"
          >
            Våra tjänster
          </Link>

          <button
            onClick={onCta}
            className="px-5 py-3 rounded-lg bg-cta text-white font-medium hover:opacity-90 transition"
          >
            Få offert
          </button>
        </div>
      </div>
    </section>
  );
}
