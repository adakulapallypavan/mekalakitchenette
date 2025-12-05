import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const address = "OPP Apollo Pharmacy Neknampur, Fair Fields Colony Back Gate, MANIKONDA";
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4973784851545!2d78.3895842!3d17.4060853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzIxLjkiTiA3OMKwMjMnMjIuNSJF!5e0!3m2!1sen!2sin!4v1234567890";

  const openInMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <section id="location" className="bg-[#FFF8E7] py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#2C2C2C] mb-4">Find Us & Delivery</h2>
          <p className="text-[#2C2C2C]/70 max-w-2xl mx-auto">
            Visit us for takeaway or enjoy our delivery service within 3km radius
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mekala's Kitchenette Location"
            ></iframe>
          </div>

          {/* Location Details */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#D4AF37] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#2C2C2C] mb-2">Our Address</h3>
                  <p className="text-[#2C2C2C]/70">
                    {address}
                  </p>
                </div>
              </div>

              <button 
                onClick={openInMaps}
                className="w-full bg-[#D4AF37] text-[#2C2C2C] px-6 py-3 rounded-lg hover:bg-[#F4C430] transition-colors flex items-center justify-center gap-2 mb-6"
              >
                <Navigation className="w-5 h-5" />
                <span>Get Directions</span>
              </button>

              <div className="border-t border-[#2C2C2C]/10 pt-6">
                <h3 className="text-[#2C2C2C] mb-4">Delivery Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <p className="text-[#2C2C2C]/80">Free delivery within 3km radius</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <p className="text-[#2C2C2C]/80">Takeaway available during all operating hours</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                    <p className="text-[#2C2C2C]/80">Call ahead for faster service</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF8E7] rounded-lg p-4 mt-6">
                <p className="text-[#2C2C2C]/80">
                  <span className="text-[#E85D75]">Rotte Packs</span> are available only after 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
