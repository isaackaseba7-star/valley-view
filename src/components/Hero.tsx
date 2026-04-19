import { Phone, MapPin, Star, Clock, HeartPulse, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background with soft medical tones */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-medical-blue/90 to-medical-blue/70 z-10 mix-blend-multiply" />
        <img
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEfuYk1h7kCveVnJOe3hQzlVJG0Lr73ExoBF6maBLS_RX1QSc5MNBv3MMaxroRGzo9Xb4NLC0OtlKtmKVavpDy6x0Z_atyt9b06cEIHKpbx7ivWOibZ5sqUq11EcvVaiOOsSD_kuw=w2400-h1600-k-no"
          alt="Valley View Medical Center"
          className="w-full h-full object-cover scale-105 transform origin-center animate-slowZoom"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/20 text-accent-green border border-accent-green/30 text-sm font-semibold mb-6 uppercase tracking-wider backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4" /> Trusted Healthcare
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Quality Healthcare You Can <span className="text-accent-green">Trust</span> in Lusaka
            </h1>
            <p className="text-lg sm:text-xl text-blue-50 mb-10 leading-relaxed opacity-90 max-w-xl">
              Professional, compassionate, and efficient medical care for you and your family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="tel:0974730960" className="bg-medical-blue hover:bg-medical-blue-light transition-all text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a href="#location" className="bg-white hover:bg-gray-50 transition-all text-medical-blue px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/20"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-accent-green mb-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
              <span className="font-bold text-lg">4.3/5</span>
              <span className="text-sm text-blue-100">Patient Rating</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <Clock className="w-6 h-6 text-accent-green mb-1" />
              <span className="font-bold text-lg">Until 21:00</span>
              <span className="text-sm text-blue-100">Open Daily</span>
            </div>

            <div className="flex flex-col gap-1">
              <HeartPulse className="w-6 h-6 text-accent-green mb-1" />
              <span className="font-bold text-lg">Friendly</span>
              <span className="text-sm text-blue-100">Qualified Staff</span>
            </div>

            <div className="flex flex-col gap-1">
              <Zap className="w-6 h-6 text-accent-green mb-1" />
              <span className="font-bold text-lg">Fast</span>
              <span className="text-sm text-blue-100">Efficient Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
