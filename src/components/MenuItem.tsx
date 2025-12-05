import { ShoppingCart } from "lucide-react";

interface MenuItemProps {
  name: string;
  price: number;
  image: string;
  isVeg: boolean;
  description?: string;
}

export function MenuItem({ name, price, image, isVeg, description }: MenuItemProps) {
  const handleAddToOrder = () => {
    const message = `Hi! I'd like to order: ${name} (₹${price})`;
    window.open(`https://wa.me/919666267966?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Veg/Non-veg indicator */}
        <div className="absolute top-3 left-3 bg-white rounded-full p-1 shadow-md">
          <div className={`w-3 h-3 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[#2C2C2C] mb-2 line-clamp-2 min-h-[3rem]">
          {name}
        </h3>
        
        {description && (
          <p className="text-[#2C2C2C]/60 mb-3 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between mt-4">
          <span className="text-[#D4AF37]">
            ₹{price}
          </span>
          <button 
            onClick={handleAddToOrder}
            className="bg-[#D4AF37] text-[#2C2C2C] px-4 py-2 rounded-lg hover:bg-[#F4C430] transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
