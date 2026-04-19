import { AlertCircle } from 'lucide-react';

export default function UrgencyBanner() {
  return (
    <div className="bg-red-600 text-white px-4 py-2 text-center text-sm font-medium flex-col sm:flex-row flex items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        <AlertCircle className="w-4 h-4 animate-pulse" />
        <span>Open Today Until 9PM</span>
      </div>
      <span className="hidden sm:inline">&bull;</span>
      <span>Visit Now for Immediate Care</span>
    </div>
  );
}
