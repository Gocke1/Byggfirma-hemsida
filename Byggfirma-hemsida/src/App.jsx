// src/App.jsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AiAgent from "./components/AiAgent";
import ContactForm from "./components/ContactForm";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="min-h-screen bg-site text-neutralDark">
      <Navbar />
      <AiAgent onAskContact={() => setShowContactForm(true)} />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage onCta={() => setShowContactForm(true)} />} />
        <Route path="/tjanster" element={<ServicesPage />} />
          <Route path="/om-oss" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
}
