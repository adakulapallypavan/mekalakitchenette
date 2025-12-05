import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://wa.me/919666267966?text=Hello! I would like to place an order.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      {isHovered && (
        <span className="whitespace-nowrap pr-2">Order Now</span>
      )}
    </button>
  );
}
