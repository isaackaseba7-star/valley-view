import { HeartPulse, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-medical-blue-dark text-white/80 pt-16 pb-8 border-t border-medical-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="bg-medical-blue p-2 rounded-lg">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <div className="font-display font-bold text-xl flex flex-col leading-tight">
                <span>Valley View</span>
                <span className="text-xs font-medium text-blue-200">Medical Center</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Reliable, compassionate healthcare you can trust. Providing premium medical services to families and professionals in Lusaka.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                <span className="text-sm">H9WF+F34, Salama Park Road, <br/>Lusaka, Zambia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-green shrink-0" />
                <a href="tel:0974730960" className="text-sm hover:text-white transition-colors">097 4730960</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent-green shrink-0" />
                <span className="text-sm">Open Daily (Closes 21:00)</span>
              </li>
              <li>
                <span className="inline-block bg-white/10 text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider">Walk-ins Welcome</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="https://maps.google.com/?q=Valley+View+Medical+Center+Salama+Park+Road+Lusaka" target="_blank" rel="noopener noreferrer" className="text-accent-green font-medium hover:underline">Google Maps Route</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Valley View Medical Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
