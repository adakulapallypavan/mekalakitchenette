import { Heart, Award, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F4C430]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E85D75]/20 rounded-full blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1689079564957-83e3641c7fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0ODQzOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mekala's Kitchenette"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border-4 border-[#D4AF37]"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-[#2C2C2C] mb-6">About Mekala's Kitchenette</h2>
            
            <p className="text-[#2C2C2C]/80 mb-6">
              Welcome to Mekala's Kitchenette, where every dish tells a story of authentic Telugu tradition. 
              We bring you the rich flavors of homestyle cooking, prepared with the same love and care as in 
              a traditional Telugu household.
            </p>

            <p className="text-[#2C2C2C]/80 mb-8">
              Our recipes have been passed down through generations, using only the finest ingredients and 
              traditional cooking methods. Every meal we prepare is a celebration of Telugu culinary heritage, 
              crafted to bring the warmth of home to your table.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-[#FFF8E7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-[#E85D75]" />
                </div>
                <h3 className="text-[#2C2C2C] mb-2">Made with Love</h3>
                <p className="text-[#2C2C2C]/60">Traditional recipes prepared fresh daily</p>
              </div>

              <div className="text-center">
                <div className="bg-[#FFF8E7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-[#2C2C2C] mb-2">Authentic Taste</h3>
                <p className="text-[#2C2C2C]/60">Pure Telugu homestyle cooking</p>
              </div>

              <div className="text-center">
                <div className="bg-[#FFF8E7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-[#E85D75]" />
                </div>
                <h3 className="text-[#2C2C2C] mb-2">Family Recipes</h3>
                <p className="text-[#2C2C2C]/60">Generations of culinary wisdom</p>
              </div>
            </div>

            <div className="bg-[#FFF8E7] border-l-4 border-[#D4AF37] p-6 rounded-lg">
              <p className="text-[#2C2C2C] italic">
                "Food is not just sustenance, it's love served on a plate. At Mekala's, we cook every meal 
                as if it were for our own family."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
