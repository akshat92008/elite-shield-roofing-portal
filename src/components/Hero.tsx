import { MapPin, Star, ShieldCheck, ArrowRight, Phone, DollarSign } from "lucide-react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function Hero() {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleStartEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Fire and forget save to Firebase
    addDoc(collection(db, 'leads'), {
      clientId: 'u4',
      tenantId: 'ROOF_001',
      name: 'Roofing Lead: ' + address.split(',')[0],
      property_address: address,
      phone: phone,
      estimated_value: Math.floor(15000 + Math.random() * 10000),
      monthly_payment: Math.floor(199 + Math.random() * 100),
      status: 'New',
      createdAt: serverTimestamp()
    }).catch(error => {
      console.error("Failed to submit lead:", error);
    });

    // Optimistic UI update
    setIsSuccess(true);
    setAddress("");
    setPhone("");
    setIsSubmitting(false);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-charcoal">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/Video_Generation_for_Website_Beauty.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-charcoal/60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Side: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-safety-orange"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Next-Gen Roofing Solutions</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 text-white">
              Protecting Your Greatest Asset with <span className="text-safety-orange">2026 Smart-Roofing</span> Technology.
            </h1>

            <p className="text-lg text-white/80 mb-8 max-w-xl leading-relaxed">
              Engineered for extreme weather, designed for modern aesthetics. Get a roof that pays for itself with integrated solar options and lifetime warranties.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-10 h-10 rounded-full border-2 border-charcoal object-cover" />
                  ))}
                </div>
                <div className="ml-2">
                  <div className="flex items-center gap-1 text-safety-orange">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-white">
                    <span className="font-bold">4.9/5</span> from 500+ reviews
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-6 -right-6 lg:-right-12 z-20 bg-white p-4 rounded-2xl shadow-xl border border-charcoal/5 flex items-center gap-3"
            >
              <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-charcoal/60 font-semibold uppercase tracking-wider">Verified</p>
                <p className="font-bold text-charcoal">Local Pro</p>
              </div>
            </motion.div>

            {/* Glassmorphism Card */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-safety-orange to-yellow-500"></div>

              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Estimate Sent!</h3>
                  <p className="text-charcoal/60">Our team will contact you with your full 2026 Smart-Roofing ROI report.</p>
                  <Button variant="outline" className="mt-6" onClick={() => setIsSuccess(false)}>New Estimate</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-2">Instant Roof Quote</h3>
                  <p className="text-charcoal/60 mb-6 text-sm">Enter details to generate your preliminary ROI profile.</p>

                  <form className="space-y-4" onSubmit={handleStartEstimate}>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-charcoal">Property Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="123 Main St, City, State"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-charcoal/20 bg-white/50 focus:bg-white focus:ring-2 focus:ring-safety-orange focus:border-transparent transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-charcoal">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-charcoal/20 bg-white/50 focus:bg-white focus:ring-2 focus:ring-safety-orange focus:border-transparent transition-all outline-none"
                        />
                      </div>
                    </div>

                    <Button size="lg" className="w-full group text-lg h-14 rounded-xl mt-2" disabled={isSubmitting}>
                      {isSubmitting ? "Processing..." : "Start Estimate"}
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </Button>

                    <p className="text-xs text-center text-charcoal/50 mt-4">
                      By clicking, you agree to receive ROI reports via SMS.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
