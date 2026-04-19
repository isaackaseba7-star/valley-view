import { MapPin } from 'lucide-react';

export default function MapLocation() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <div className="flex justify-center items-center gap-2 text-medical-blue font-medium text-lg">
            <MapPin className="w-5 h-5" />
            <p>H9WF+F34, Salama Park Road, Lusaka</p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100 aspect-video md:aspect-21/9 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15383.085023903175!2d28.32635925!3d-15.3888371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f3539bc1316b%3A0xe54c46f1fa70bceb!2sSalama%20Park%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2sus!4v1714240316335!5m2!1sen!2sus" 
            className="absolute inset-0 w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps targeting Salama Park, Lusaka"
          ></iframe>
        </div>

        <div className="mt-8 flex justify-center">
          <a href="https://maps.google.com/?q=Valley+View+Medical+Center+Salama+Park+Road+Lusaka" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 border-2 border-medical-blue text-medical-blue font-bold py-4 px-10 rounded-full transition-colors shadow-sm flex items-center gap-2">
            Get Directions Now
          </a>
        </div>
      </div>
    </section>
  );
}
