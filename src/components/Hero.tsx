import { Logo } from "./Logo";
import { MapPin } from "lucide-react";

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOrderNow = () => {
    window.open('https://wa.me/919666267966?text=Hello! I would like to place an order.', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwaW5kaWFuJTIwcmljZXxlbnwxfHx8fDE3NjQ4NjQ5MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/95 via-[#2C2C2C]/85 to-[#2C2C2C]/95"></div>
      </div>

      {/* Decorative mandala patterns */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#F4C430" strokeWidth="0.5"/>
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180;
            const x1 = 50;
            const y1 = 50;
            const x2 = 50 + 45 * Math.cos(angle);
            const y2 = 50 + 45 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F4C430" strokeWidth="0.5"/>;
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-32">
        <Logo size="lg" className="mx-auto mb-8 drop-shadow-2xl" />
        
        <h1 className="text-white mb-4 max-w-4xl mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)' }}>
          Mekala's Kitchenette
        </h1>
        
        <p className="text-[#F4C430] mb-2 max-w-2xl mx-auto italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)' }}>
          Authentic Homestyle Telugu Cuisine - Takeaway Only
        </p>
        
        <p className="text-white mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)' }}>
          Experience the warmth of traditional Telugu flavors, made with love just like home
        </p>

        {/* Delivery Badge */}
        <div className="inline-flex items-center gap-2 bg-[#E85D75] text-white px-6 py-3 rounded-full mb-8 shadow-2xl">
          <MapPin className="w-5 h-5" />
          <span>Delivering within 3km</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleOrderNow}
            className="bg-[#D4AF37] text-[#2C2C2C] px-8 py-4 rounded-lg hover:bg-[#F4C430] transition-all transform hover:scale-105 shadow-2xl min-w-[200px]"
          >
            Order Now
          </button>
          <button 
            onClick={scrollToMenu}
            className="border-2 border-[#F4C430] text-[#F4C430] bg-[#2C2C2C]/50 backdrop-blur-sm px-8 py-4 rounded-lg hover:bg-[#D4AF37] hover:text-[#2C2C2C] hover:border-[#D4AF37] transition-all transform hover:scale-105 shadow-2xl min-w-[200px]"
          >
            View Menu
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FFF8E7] to-transparent"></div>
    </section>
  );
}