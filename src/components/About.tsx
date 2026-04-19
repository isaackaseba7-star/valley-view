import { Target, Eye, Heart, History } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in clinical care and patient service.',
    icon: Target,
  },
  {
    title: 'Compassion',
    description: 'Every patient is treated with empathy, dignity, and deep respect.',
    icon: Heart,
  },
  {
    title: 'Integrity',
    description: 'We maintain honest, transparent relationships with our patients and community.',
    icon: Eye,
  },
  {
    title: 'Innovation',
    description: 'We embrace modern medical technologies to improve health outcomes.',
    icon: History,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Heritage & Mission</h2>
          <p className="text-lg text-gray-600">
            Founded with a commitment to elevate healthcare standards in Lusaka, Valley View Medical Center blends international medical protocols with warm, local hospitality.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mb-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-6 text-gray-600 leading-relaxed text-lg"
          >
            <p>
              <strong className="text-medical-blue font-semibold">Our History</strong> – Valley View Medical Center was established with a singular vision: to bring world-class, private healthcare to Salama Park and the greater Lusaka area. From our humble beginnings as a small immediate-care facility, we have rapidly expanded into a comprehensive medical center trusted by thousands of families.
            </p>
            <p>
              <strong className="text-medical-blue font-semibold">Our Mission</strong> – To provide accessible, reliable, and premium healthcare services safely and efficiently. We aim to be the first choice for families and professionals seeking quality medical attention without the long wait times.
            </p>
            <p>
              <strong className="text-medical-blue font-semibold">Our Vision</strong> – To be Zambia’s most trusted healthcare provider, known for combining state-of-the-art medical technology with unwavering compassion.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square sm:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                alt="Hospital hallway" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-medical-blue/10 mix-blend-multiply"></div>
              <div className="absolute inset-0 border-4 border-white/20 rounded-3xl pointer-events-none"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden sm:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-medical-blue/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-medical-blue" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-xl">Trusted Care</div>
                  <div className="text-sm text-gray-500">Since inception</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-medical-blue/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center mb-6 text-medical-blue">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
