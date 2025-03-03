import React from 'react';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  subject: string;
  rating: number;
  testimonial: string;
  date: string;
  moduleLink: string;
  initials: string;
}

const StudentSuccess: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 'KD',
      name: 'Kavindi Dissanayake',
      location: 'Colombo',
      subject: 'Biology',
      rating: 5,
      testimonial: 'The Biology modules at KSNLearn helped me understand complex concepts like genetic engineering and cell division with such clarity. The interactive visualizations and practice questions were invaluable. I scored an A in my A/L Biology exam!',
      date: 'June 2023',
      moduleLink: '/modules/biology',
      initials: 'KD'
    },
    {
      id: 'VP',
      name: 'Vishwa Perera',
      location: 'Kandy',
      subject: 'Chemistry',
      rating: 5,
      testimonial: 'Organic chemistry was my biggest weakness until I discovered KSNLearn. The step-by-step reaction mechanisms and the virtual lab simulations made everything click. From struggling to get a C, I improved to an A in my final exams!',
      date: 'May 2023',
      moduleLink: '/modules/chemistry',
      initials: 'VP'
    },
    {
      id: 'AF',
      name: 'Ashan Fernando',
      location: 'Galle',
      subject: 'Physics',
      rating: 5,
      testimonial: 'The Physics modules at KSNLearn made concepts like electromagnetic induction and wave mechanics so much easier to grasp. The interactive simulations let me visualize abstract concepts, which was a game-changer. I got an A in Physics!',
      date: 'July 2023',
      moduleLink: '/modules/physics',
      initials: 'AF'
    }
  ];

  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Student Success Stories</h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Hear from our students who have achieved their academic goals with KSNLearn
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            // Define subject-specific styling
            const subjectStyles = {
              'Biology': {
                gradient: 'from-green-400 to-cyan-500',
                bgGlow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
                iconBg: 'bg-green-500/20',
                iconText: 'text-green-400',
                linkColor: 'text-green-400 group-hover:text-green-300'
              },
              'Chemistry': {
                gradient: 'from-pink-500 to-red-500',
                bgGlow: 'group-hover:shadow-[0_0_30px_rgba(225,29,72,0.3)]',
                iconBg: 'bg-pink-500/20',
                iconText: 'text-pink-400',
                linkColor: 'text-pink-400 group-hover:text-pink-300'
              },
              'Physics': {
                gradient: 'from-blue-500 to-purple-600',
                bgGlow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]',
                iconBg: 'bg-blue-500/20',
                iconText: 'text-blue-400',
                linkColor: 'text-blue-400 group-hover:text-blue-300'
              }
            };
            
            const style = subjectStyles[testimonial.subject];
            
            return (
              <div
                key={testimonial.id}
                className={`group relative p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 ${style.bgGlow}`}
              >
                {/* Subtle gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-5 rounded-xl pointer-events-none`}></div>
                
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold ${style.iconBg} ${style.iconText}`}>
                      {testimonial.initials}
                    </div>
                    <div className="ml-3">
                      <h3 className="font-bold text-white">{testimonial.name}</h3>
                      <p className={`text-sm ${style.iconText}`}>
                        {testimonial.subject} Student • {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.testimonial}"
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-500 text-sm">{testimonial.date}</span>
                    <Link
                      to={testimonial.moduleLink}
                      className={`text-sm ${style.linkColor} transition-colors flex items-center`}
                    >
                      {testimonial.subject} Modules
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <Link
              to="/register"
              className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
            >
              <span className="flex items-center space-x-2 pr-6">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span className="text-gray-100 group-hover:text-white transition duration-200">Start Your Success Story</span>
              </span>
              <span className="pl-6 text-indigo-400 group-hover:text-indigo-300 transition duration-200">Register Now →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;