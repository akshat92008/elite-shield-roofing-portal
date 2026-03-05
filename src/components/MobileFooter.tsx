import { PhoneCall } from "lucide-react";
import { Button } from "./ui/Button";

export function MobileFooter() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-charcoal/10 p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      <Button size="lg" className="w-full h-14 text-lg rounded-xl shadow-lg shadow-safety-orange/30 flex items-center justify-center gap-3">
        <PhoneCall className="w-5 h-5" />
        Call Now: 1-800-ROOFING
      </Button>
    </div>
  );
}
