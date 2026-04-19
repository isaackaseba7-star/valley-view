import { MapPin, Phone, Clock } from 'lucide-react';

export default function QuickContact() {
  return (
    <div className="bg-medical-blue-dark text-white/90 text-sm py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent-green" />
            <span>Salama Park Road, Lusaka</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-green" />
            <span>Open &ndash; Closes 9PM</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-medium text-accent-green">Walk-ins Welcome – No Appointment Needed</span>
          <div className="flex items-center gap-2 font-semibold">
            <Phone className="w-4 h-4 text-accent-green" />
            <span>097 4730960</span>
          </div>
        </div>
      </div>
    </div>
  );
}
