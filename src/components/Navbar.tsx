import { Shield, Menu, Phone } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-charcoal p-2 rounded-lg">
              <Shield className="w-6 h-6 text-safety-orange" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Elite Shield <span className="text-safety-orange">Roofing</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-safety-orange transition-colors">Services</a>
            <a href="#advantage" className="text-sm font-medium hover:text-safety-orange transition-colors">The Advantage</a>
            <a href="#financing" className="text-sm font-medium hover:text-safety-orange transition-colors">Financing</a>
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-xs text-charcoal/60 font-medium uppercase tracking-wider">24/7 Emergency</span>
                <a href="tel:1-800-ROOFING" className="font-display font-bold text-lg">1-800-ROOFING</a>
              </div>
              <a href="#contact">
                <Button>Get a Quote</Button>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <a href="tel:1-800-ROOFING" className="p-2 bg-slate-grey rounded-full text-charcoal">
              <Phone className="w-5 h-5" />
            </a>
            <button className="p-2 text-charcoal">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
