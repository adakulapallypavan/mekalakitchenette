import { ShoppingBag, Bike, Phone } from "lucide-react";

export function QuickInfo() {
  return (
    <section className="bg-[#2C2C2C] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Takeaway Only */}
          <div className="flex items-center justify-center gap-4 text-white">
            <div className="bg-[#D4AF37] p-3 rounded-full">
              <ShoppingBag className="w-6 h-6 text-[#2C2C2C]" />
            </div>
            <div>
              <p className="opacity-80">Service</p>
              <p>Takeaway Only</p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex items-center justify-center gap-4 text-white">
            <div className="bg-[#D4AF37] p-3 rounded-full">
              <Bike className="w-6 h-6 text-[#2C2C2C]" />
            </div>
            <div>
              <p className="opacity-80">Delivery Radius</p>
              <p>Within 3km</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center gap-4 text-white">
            <div className="bg-[#D4AF37] p-3 rounded-full">
              <Phone className="w-6 h-6 text-[#2C2C2C]" />
            </div>
            <div>
              <a href="tel:9666267966" className="hover:text-[#F4C430] transition-colors">
                <p className="opacity-80">Call Us</p>
                <p>9666267966</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
