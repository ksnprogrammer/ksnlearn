import React from 'react';
import { Link } from 'react-router-dom';
import DynamicBackground from './DynamicBackground';

const About: React.FC = () => {
  const features = [
    {
      title: 'Comprehensive Curriculum',
      description: 'Our courses cover the entire A/L syllabus for Biology, Chemistry, and Physics, ensuring you\'re fully prepared for exams.',
      icon: '📚',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Interactive Learning',
      description: 'Engage with interactive simulations, 3D models, and virtual experiments that make complex concepts easy to understand.',
      icon: '🧪',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your performance with detailed analytics, identifying strengths and areas for improvement.',
      icon: '📊',
      gradient: 'from-green-400 to-cyan-500'
    },
    {
      title: 'Expert Guidance',
      description: 'Learn from experienced educators who provide personalized feedback and support throughout your learning journey.',
      icon: '👨‍🏫',
      gradient: 'from-orange-400 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <DynamicBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">About KSNLearn</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-text-secondary mb-8">
            KSNLearn is a cutting-edge educational platform designed specifically for Sri Lankan A/L students.
            Our mission is to make advanced science education accessible, engaging, and effective.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-card-bg border border-card-border hover:bg-card-hover transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 bg-card-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach to Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text-biology">Learn by Doing</h3>
              <p className="mb-4">
                We believe that science is best learned through hands-on experience. Our platform integrates
                virtual labs, interactive simulations, and practical exercises that reinforce theoretical concepts.
              </p>
              <p>
                By engaging with content actively rather than passively, students develop deeper understanding
                and better retention of complex scientific principles.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text-chemistry">Personalized Learning Paths</h3>
              <p className="mb-4">
                Every student has unique strengths, weaknesses, and learning styles. Our adaptive learning
                system tailors content delivery based on your performance and preferences.
              </p>
              <p>
                As you progress through courses, our platform identifies areas where you need additional support
                and adjusts accordingly, ensuring efficient and effective learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <p className="text-center text-text-secondary mb-12">
            KSNLearn was founded by a team of passionate educators, scientists, and technologists
            committed to transforming science education in Sri Lanka.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Kavindi Jayawardena',
                role: 'Biology Curriculum Director',
                bio: 'PhD in Molecular Biology with 15 years of teaching experience at university level.'
              },
              {
                name: 'Prof. Rajitha Perera',
                role: 'Lead Educational Technologist',
                bio: 'Specializes in developing interactive learning tools and virtual laboratory simulations.'
              },
              {
                name: 'Ashan Fernando, MSc',
                role: 'Physics Content Developer',
                bio: 'Former national physics olympiad winner with expertise in making complex concepts accessible.'
              }
            ].map((member, index) => (
              <div key={index} className="p-6 rounded-xl bg-card-bg border border-card-border hover:bg-card-hover transition-colors">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-text-secondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl text-text-secondary mb-8">
            Join thousands of students who have improved their A/L results with KSNLearn's
            innovative approach to science education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
              Get Started for Free
            </Link>
            <Link to="/courses" className="px-8 py-3 bg-card-bg border border-card-border rounded-lg hover:bg-card-hover transition-colors">
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;