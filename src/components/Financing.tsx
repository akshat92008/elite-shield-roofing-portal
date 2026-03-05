import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Calculator } from "lucide-react";

export function Financing() {
  const [payment, setPayment] = useState(250);

  return (
    <section id="financing" className="py-24 bg-slate-grey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm mb-8">
          <Calculator className="w-8 h-8 text-safety-orange" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          Premium Roofs. <span className="text-charcoal/40">Painless Payments.</span>
        </h2>
        <p className="text-lg text-charcoal/70 mb-12 max-w-2xl mx-auto">
          Don't let budget constraints compromise your home's safety. Use our slider to find a comfortable monthly payment that fits your lifestyle.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-charcoal/5"
        >
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-charcoal/40 mb-4">Estimated Monthly Payment</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl md:text-8xl font-black tracking-tighter text-charcoal">${payment}</span>
              <span className="text-xl font-bold text-charcoal/40">/mo</span>
            </div>
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <input 
              type="range" 
              min="100" 
              max="800" 
              step="10"
              value={payment}
              onChange={(e) => setPayment(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-4 text-sm font-bold text-charcoal/40">
              <span>$100</span>
              <span>$800+</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <Button size="lg" className="w-full h-14 text-lg rounded-xl">
              Apply for Financing
            </Button>
            <Button variant="outline" size="lg" className="w-full h-14 text-lg rounded-xl bg-slate-grey border-transparent">
              View Cash Price
            </Button>
          </div>
          
          <p className="text-xs text-charcoal/40 mt-6 font-medium">
            *Subject to credit approval. Rates range from 0% to 29.99% APR based on creditworthiness.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
