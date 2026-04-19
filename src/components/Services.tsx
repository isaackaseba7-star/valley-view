import { Stethoscope, Activity, Users, Syringe, ClipboardCheck } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'General Consultations',
    description: 'Comprehensive medical evaluations and personalized care plans.',
    icon: Stethoscope,
  },
  {
    title: 'Diagnosis & Treatment',
    description: 'Accurate diagnostics and effective treatments for various conditions.',
    icon: Activity,
  },
  {
    title: 'Family Health Services',
    description: 'Specialized care tailored for children, adults, and the elderly.',
    icon: Users,
  },
  {
    title: 'Minor Procedures',
    description: 'Safe and efficient minor surgical procedures performed in-clinic.',
    icon: Syringe,
  },
  {
    title: 'Health Checkups',
    description: 'Routine wellness exams to keep you healthy and catch issues early.',
    icon: ClipboardCheck,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Services</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of reliable and compassionate healthcare services designed to meet the needs of you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xs border border-gray-100 hover:shadow-xl hover:border-medical-blue/20 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-50 text-medical-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-medical-blue group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
