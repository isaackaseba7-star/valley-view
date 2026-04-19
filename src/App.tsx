import UrgencyBanner from './components/UrgencyBanner';
import QuickContact from './components/QuickContact';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import MapLocation from './components/MapLocation';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      <UrgencyBanner />
      <QuickContact />
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <WhyChooseUs />
        <FAQ />
        <MapLocation />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
