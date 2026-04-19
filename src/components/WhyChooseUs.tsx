import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  "Friendly & Professional Staff",
  "Fast Service – Minimal Waiting",
  "Clean & Safe Environment",
  "Convenient Location",
  "Patient-Focused Care"
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Doctor talking to patient" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10 pointer-events-none" />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Valley View?</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We are committed to delivering a superior healthcare experience. Our facility compares to top-tier international clinics, ensuring you receive the best care possible near you.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                  <span className="font-semibold text-gray-800 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
