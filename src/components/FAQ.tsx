import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to make an appointment to see a doctor?",
    answer: "While we highly encourage booking an appointment to minimize your waiting time, we gladly welcome walk-in patients every day. Please note that urgent or emergency cases will always be prioritized."
  },
  {
    question: "What are your operating hours?",
    answer: "Our clinic is open daily until 9:00 PM (21:00). We are dedicated to providing accessible healthcare after standard working hours to accommodate your busy schedule."
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we partner with a wide variety of corporate and private health insurance providers. Please contact our front desk at 097 4730960 with your insurance details so we can confirm your specific coverage."
  },
  {
    question: "What should I bring to my first visit?",
    answer: "For your first visit, please bring a valid form of identification, your health insurance card (if applicable), and any previous medical records or lists of current medications you are taking."
  },
  {
    question: "What types of services are available at Valley View?",
    answer: "We offer comprehensive family healthcare, including general doctor consultations, diagnostics, minor surgical procedures, and routine wellness checkups for all age groups."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find quick answers to common questions about our services, appointments, and policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs hover:border-medical-blue/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-lg text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-medical-blue shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
