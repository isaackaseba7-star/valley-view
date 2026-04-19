import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    text: "The services are very good and efficient. Very welcoming staff.",
    author: "Happy Patient"
  },
  {
    text: "Wonderful service and the friendliest staff I have ever met.",
    author: "Local Resident"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-medical-blue text-white relative overflow-hidden">
      {/* Abstract background rings */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full border-4 border-white/10 opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full border-4 border-white/10 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Patients Across Lusaka</h2>
          <p className="text-blue-100 text-lg">Real experiences from our community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <Quote className="w-10 h-10 text-accent-green mb-6 opacity-80" />
              <div className="flex gap-1 mb-4 text-accent-green">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xl font-medium leading-relaxed mb-6">"{review.text}"</p>
              <p className="text-blue-100 font-medium tracking-wide text-sm">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
