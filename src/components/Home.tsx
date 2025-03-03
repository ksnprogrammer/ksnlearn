import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DynamicBackground } from './DynamicBackground';

interface SubjectCard {
  title: string;
  description: string;
  modules: string[];
  gradient: string;
  lineColor: string;
}

export default function Home() {
  const navigate = useNavigate();
  const [activeSubject, setActiveSubject] = useState<'biology' | 'chemistry' | 'physics'>('biology');

  const subjects: Record<string, SubjectCard> = {
    biology: {
      title: 'Biology',
      description: 'Explore the mysteries of life through modern visualizations and experiential laboratories',
      modules: [
        'Cell Biology and Genetics',
        'Human Physiology',
        'Ecology and Evolution',
        'Botany'
      ],
      gradient: 'from-biology-primary to-biology-secondary',
      lineColor: '#10B981'
    },
    chemistry: {
      title: 'Chemistry',
      description: 'Master molecular interactions with interactive 3D models and simulations',
      modules: [
        'Organic Chemistry',
        'Inorganic Chemistry',
        'Physical Chemistry',
        'Analytical Techniques'
      ],
      gradient: 'from-chemistry-primary to-chemistry-secondary',
      lineColor: '#E11D48'
    },
    physics: {
      title: 'Physics',
      description: 'Understand the universe\'s laws through immersive experiments',
      modules: [
        'Mechanics & Dynamics',
        'Electricity & Magnetism',
        'Waves & Optics',
        'Modern Physics'
      ],
      gradient: 'from-physics-primary to-physics-secondary',
      lineColor: '#3B82F6'
    }
  };

  return (
    <div className="relative">
      <DynamicBackground
        lineColor={subjects[activeSubject].lineColor}
        speed={20}
        lineCount={5}
      />

      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-blue-500">KSN</span>
          <span className="text-red-500">Learn</span>
        </h1>
        <p className="text-2xl mb-4">Modern Learning Technology for A/L Science Success</p>
        
        <div className="max-w-3xl mx-auto text-gray-300 mb-8">
          <p>
            Your cybernetic gateway to Biology, Chemistry, and Physics.
            Interactive lessons, practical experiments, and expert guidance on one platform.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center mb-12">
          <button 
            onClick={() => navigate('/courses')} 
            className="button-primary"
          >
            Explore Courses
          </button>
          <button 
            onClick={() => navigate('/about')} 
            className="button-secondary"
          >
            Learn More
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {Object.entries(subjects).map(([key, subject]) => (
          <div
            key={key}
            className={`card backdrop-blur-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
              activeSubject === key ? `ring-2 ring-offset-2 ring-${key}-primary shadow-lg shadow-${key}-primary/20` : ''
            }`}
            onMouseEnter={() => setActiveSubject(key as 'biology' | 'chemistry' | 'physics')}
          >
            <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${subject.gradient} bg-clip-text text-transparent`}>
              {subject.title}
            </h2>
            <p className="text-gray-300 mb-6">{subject.description}</p>
            <div className="space-y-2">
              {subject.modules.map((module, index) => (
                <div
                  key={index}
                  className="p-2 bg-black/20 backdrop-blur-sm rounded-lg text-sm text-gray-200 transition-all duration-300 hover:bg-black/30 hover:translate-x-1"
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div className="card backdrop-blur-lg hover:shadow-lg hover:shadow-biology-primary/20">
          <h3 className="text-4xl font-bold mb-2 gradient-text-biology">10,000+</h3>
          <p className="text-gray-300">Active Students</p>
        </div>
        <div className="card backdrop-blur-lg hover:shadow-lg hover:shadow-chemistry-primary/20">
          <h3 className="text-4xl font-bold mb-2 gradient-text-chemistry">95%</h3>
          <p className="text-gray-300">Pass Rate</p>
        </div>
        <div className="card backdrop-blur-lg hover:shadow-lg hover:shadow-physics-primary/20">
          <h3 className="text-4xl font-bold mb-2 gradient-text-physics">1,000+</h3>
          <p className="text-gray-300">Video Lessons</p>
        </div>
      </div>
    </div>
  );
}