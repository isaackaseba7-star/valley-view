import { useState } from 'react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="bg-medical-blue p-2 rounded-lg">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div className="font-display font-bold text-xl sm:text-2xl text-medical-blue flex flex-col leading-tight">
              <span>Valley View</span>
              <span className="text-sm sm:text-base font-medium text-gray-500">Medical Center</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-medical-blue font-medium transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <a href="tel:0974730960" className="bg-medical-blue hover:bg-medical-blue-light transition-colors text-white px-6 py-2.5 rounded-full font-medium flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:0974730960" className="bg-medical-blue/10 text-medical-blue p-2 rounded-full">
              <Phone className="w-5 h-5" />
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-medical-blue hover:bg-gray-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a href="tel:0974730960" className="w-full bg-medical-blue text-white px-3 py-3 rounded-md font-medium flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call: 097 4730960
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
