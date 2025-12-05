import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  const handleOrderNow = () => {
    window.open('https://wa.me/919666267966?text=Hello! I would like to place an order.', '_blank');
  };

  return (
    <footer id="contact" className="bg-[#2C2C2C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo size="sm" />
              <span className="text-[#F4C430]">Mekala's Kitchenette</span>
            </div>
            <p className="text-white/70 mb-6">
              Authentic homestyle Telugu cuisine, made with love and traditional recipes. 
              Experience the warmth of home-cooked meals.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#D4AF37] p-2 rounded-full hover:bg-[#F4C430] transition-colors"
              >
                <Instagram className="w-5 h-5 text-[#2C2C2C]" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#D4AF37] p-2 rounded-full hover:bg-[#F4C430] transition-colors"
              >
                <Facebook className="w-5 h-5 text-[#2C2C2C]" />
              </a>
              <button 
                onClick={handleOrderNow}
                className="bg-[#25D366] p-2 rounded-full hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-[#F4C430] mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="tel:9666267966" 
                className="flex items-start gap-3 hover:text-[#F4C430] transition-colors group"
              >
                <Phone className="w-5 h-5 mt-1 text-[#D4AF37] group-hover:text-[#F4C430]" />
                <div>
                  <p className="text-white/50">Phone</p>
                  <p>9666267966</p>
                </div>
              </a>
              
              <a 
                href="mailto:mekalaskitchenette@gmail.com" 
                className="flex items-start gap-3 hover:text-[#F4C430] transition-colors group"
              >
                <Mail className="w-5 h-5 mt-1 text-[#D4AF37] group-hover:text-[#F4C430]" />
                <div>
                  <p className="text-white/50">Email</p>
                  <p className="break-all">mekalaskitchenette@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-[#D4AF37]" />
                <div>
                  <p className="text-white/50">Address</p>
                  <p>OPP Apollo Pharmacy Neknampur,<br />Fair Fields Colony Back Gate,<br />MANIKONDA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="text-[#F4C430] mb-6">Operating Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-white/70">Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10">
                <span className="text-white/70">Saturday - Sunday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="bg-[#E85D75]/20 border border-[#E85D75] rounded-lg p-4 mt-6">
                <p className="text-white/90">
                  Rotte Packs available<br />
                  <span className="text-[#F4C430]">After 6:00 PM only</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Now CTA */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-[#F4C430] mb-4">Ready to Order?</h3>
            <p className="text-white/70 mb-6">
              Call us or send a WhatsApp message to place your order
            </p>
            <button 
              onClick={handleOrderNow}
              className="bg-[#D4AF37] text-[#2C2C2C] px-8 py-4 rounded-lg hover:bg-[#F4C430] transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} Mekala's Kitchenette. All rights reserved.
          </p>
          <p className="text-white/40 mt-2">
            Made with <span className="text-[#E85D75]">❤</span> for authentic Telugu food lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
