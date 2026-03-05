import { motion } from "framer-motion";
import { Droplets, Home, Sun, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Emergency Leak Repair",
    description: "24/7 rapid response team. We stop the damage before it spreads with temporary tarping and permanent fixes.",
    icon: Droplets,
    color: "bg-blue-50 text-blue-600",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    image: "https://picsum.photos/seed/leak/600/400"
  },
  {
    title: "Full Roof Replacement",
    description: "Architectural shingles, metal, or flat roofs. Built to withstand Category 5 hurricanes with a 50-year warranty.",
    icon: Home,
    color: "bg-charcoal text-white",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    image: "https://picsum.photos/seed/roof/800/600"
  },
  {
    title: "Solar Shingle Integration",
    description: "Turn your roof into a power plant. Sleek, low-profile solar tiles that look like regular roofing.",
    icon: Sun,
    color: "bg-yellow-50 text-yellow-600",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-3",
    image: "https://picsum.photos/seed/solar/1200/400"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Engineered for <span className="text-charcoal/40">Performance.</span>
          </h2>
          <p className="text-lg text-charcoal/70">
            From midnight emergencies to complete solar transformations, our bento-box of services covers every square inch of your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-charcoal/10 ${service.colSpan} bg-slate-grey`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[320px]">
                <div className="flex justify-between items-start mb-auto">
                  <div className={`p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 ${service.color === 'bg-charcoal text-white' ? 'text-white' : 'text-white'}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <button className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/80 leading-relaxed max-w-md">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
