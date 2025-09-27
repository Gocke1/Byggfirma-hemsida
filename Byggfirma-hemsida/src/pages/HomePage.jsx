// src/pages/HomePage.jsx
import HeroSection from "../components/HeroSection";

export default function HomePage({ onCta }) {
  return (
    <>
      <HeroSection onCta={onCta} />
    </>
  );
}
