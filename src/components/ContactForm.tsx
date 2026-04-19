import { Phone, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="md:w-5/12 bg-medical-blue p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">Request an Appointment</h3>
              <p className="text-blue-100 mb-8">
                Fill out the form and our team will get back to you to confirm your visit.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-xs border border-white/20">
              <p className="text-sm text-blue-100 mb-2 font-medium">Prefer instant help?</p>
              <a href="tel:0974730960" className="flex items-center gap-3 font-bold text-xl hover:text-accent-green transition-colors">
                <Phone className="w-6 h-6" />
                097 4730960
              </a>
            </div>
          </div>

          <div className="md:w-7/12 p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all" 
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all" 
                  placeholder="097 XXX XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-medical-blue/20 focus:border-medical-blue transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button className="w-full bg-medical-blue hover:bg-medical-blue-light transition-colors text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group">
                Request Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
