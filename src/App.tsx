import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Advantage } from "./components/Advantage";
import { Financing } from "./components/Financing";
import { MobileFooter } from "./components/MobileFooter";
import { AdminDashboard } from "./pages/AdminDashboard";

import { ContactForm } from "./components/ContactForm";
import { ProjectTracking } from "./components/ProjectTracking";

function LandingPage() {
  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <ProjectTracking />
        <Services />
        <Advantage />
        <Financing />

        {/* Contact Section */}
        <section className="py-24 bg-slate-grey" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black mb-6">Ready to Protect Your Asset?</h2>
                <p className="text-charcoal/60 text-lg mb-8 leading-relaxed">
                  Our 2026 Smart-Roofing system is now available for premium installations.
                  Send us a message to schedule your site inspection.
                </p>
                <div className="flex items-center gap-4 text-safety-orange font-bold">
                  <span className="w-12 h-1 bg-safety-orange"></span>
                  SYTEM ACTIVE & READY
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <MobileFooter />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
