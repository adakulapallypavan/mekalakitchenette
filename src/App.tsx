import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { QuickInfo } from "./components/QuickInfo";
import { MenuSection } from "./components/MenuSection";
import { About } from "./components/About";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <QuickInfo />
      <MenuSection />
      <About />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
