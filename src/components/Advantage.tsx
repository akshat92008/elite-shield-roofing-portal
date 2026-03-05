import { motion } from "framer-motion";
import { Smartphone, CheckCircle2, Camera, FileText } from "lucide-react";

export function Advantage() {
  return (
    <section id="advantage" className="py-24 bg-charcoal text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-safety-orange/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              The <span className="text-safety-orange">Amaura</span> Advantage.
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              Say goodbye to contractor anxiety. Our proprietary Client Portal gives you 100% transparency from the first inspection to the final nail.
            </p>

            <div className="space-y-8">
              {[
                { icon: Camera, title: "Real-Time Drone Photos", desc: "Watch your roof replacement live with daily drone updates." },
                { icon: FileText, title: "Live Claim Tracking", desc: "See exactly where your insurance claim stands, updated hourly." },
                { icon: CheckCircle2, title: "Digital Warranty Vault", desc: "Never lose your paperwork. Access your 50-year warranty anytime." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                      <feature.icon className="w-6 h-6 text-safety-orange" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-white/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:ml-auto"
          >
            {/* Phone Mockup */}
            <div className="relative mx-auto w-[300px] h-[600px] bg-charcoal rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-white/10 rounded-b-3xl w-1/2 mx-auto z-20"></div>
              
              {/* App UI */}
              <div className="absolute inset-0 bg-slate-grey p-6 flex flex-col">
                <div className="mt-8 mb-6">
                  <p className="text-xs text-charcoal/50 font-bold uppercase tracking-wider mb-1">Project Status</p>
                  <h3 className="text-2xl font-black text-charcoal">In Progress</h3>
                </div>
                
                <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-charcoal">Insurance Claim</span>
                    <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">Approved</span>
                  </div>
                  <div className="h-2 bg-slate-grey rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-safety-orange rounded-full"></div>
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-2xl p-4 shadow-sm overflow-hidden relative">
                  <p className="text-sm font-bold text-charcoal mb-3">Latest Drone Shot</p>
                  <img 
                    src="https://picsum.photos/seed/drone/400/400" 
                    alt="Drone View" 
                    className="w-full h-32 object-cover rounded-xl mb-3"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex items-center gap-2 text-xs text-charcoal/60 font-medium">
                    <Smartphone className="w-4 h-4" />
                    <span>Updated 2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-12 top-1/4 bg-white text-charcoal p-4 rounded-2xl shadow-xl border border-charcoal/5 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-safety-orange animate-pulse"></div>
                <p className="font-bold text-sm">Crew Arrived</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
