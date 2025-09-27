import ServicesSection from "../components/ServicesSection";
import ServiceDetails from "../components/ServiceDetails";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import Breadcrumbs from "../components/Breadcrumbs";   // 👈 Import

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="rounded-xl bg-white/80 backdrop-blur-sm border border-white/40 ring-1 ring-black/5 shadow-md p-6">
      <Breadcrumbs />   {/* 👈 Här renderas breadcrumbs högst upp */}
      
      <section className="bg-[rgba(231,190,165,0.35)] border-y border-white/30">
        <h1 className="text-3xl font-bold text-center mb-6">Våra tjänster</h1>

        <ServicesSection onSelectService={setSelectedService} />

        {selectedService && (
          <ServiceDetails
            service={selectedService}
            onContactClick={() => setShowContactForm(true)}
            onClose={() => setSelectedService(null)}
          />
        )}

        {showContactForm && (
          <ContactForm
            service={selectedService}
            onClose={() => setShowContactForm(false)}
          />
        )}
      </section>
    </div>
  );
}
