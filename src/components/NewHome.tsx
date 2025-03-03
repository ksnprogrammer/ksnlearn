import React from 'react';
import { Link } from 'react-router-dom';
import DynamicBackground from './DynamicBackground';
import StudentSuccess from './StudentSuccess';

const NewHome: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Science Education',
      description: 'Exploring how artificial intelligence is revolutionizing the way we learn and teach science...',
      link: '/blog/ai-in-science-education'
    },
    {
      title: 'Top 10 Study Techniques for A/L Success',
      description: 'Discover the most effective study strategies used by top-performing students to ace their A/L exams...',
      link: '/blog/study-techniques'
    },
    {
      title: 'The Role of Practical Experiments in Science Learning',
      description: 'Why hands-on experiments are crucial for understanding complex scientific concepts and how to conduct them at home...',
      link: '/blog/practical-experiments'
    }
  ];

  const featuredCourses = [
    {
      title: 'Advanced Genetics',
      description: 'Unravel the mysteries of DNA and inheritance patterns',
      topics: [
        'Gene expression and regulation',
        'Mendelian and non-Mendelian inheritance',
        'Genetic engineering techniques'
      ],
      subject: 'biology',
      link: '/courses/advanced-genetics'
    },
    {
      title: 'Organic Reactions Masterclass',
      description: 'Master the art of organic synthesis and reaction mechanisms',
      topics: [
        'Nucleophilic substitution reactions',
        'Elimination and addition mechanisms',
        'Aromatic compound reactions'
      ],
      subject: 'chemistry',
      link: '/courses/organic-reactions'
    },
    {
      title: 'Quantum Mechanics Fundamentals',
      description: 'Dive into the fascinating world of quantum physics',
      topics: [
        'Wave-particle duality',
        'Schrödinger equation and applications',
        'Quantum tunneling and entanglement'
      ],
      subject: 'physics',
      link: '/courses/quantum-mechanics'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <DynamicBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Master A/L Sciences with Advanced Learning</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Your cybernetic gateway to excelling in Biology, Chemistry, and Physics.
          Interactive lessons, practical experiments, and expert guidance all in one platform.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/courses" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
            Explore Courses ⚡
          </Link>
          <Link to="/about" className="px-8 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors">
            Learn More →
          </Link>
        </div>
      </section>

      {/* Subject Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gray-900 border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300">
            <div className="text-green-500 text-4xl mb-4">Biology</div>
            <p className="text-gray-400">Explore cells, genetics, physiology, and ecosystems</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-red-900/30 hover:border-red-700/50 transition-all duration-300">
            <div className="text-red-500 text-4xl mb-4">Chemistry</div>
            <p className="text-gray-400">Master organic, inorganic, and physical chemistry</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-900 border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300">
            <div className="text-blue-500 text-4xl mb-4">Physics</div>
            <p className="text-gray-400">Understand mechanics, electromagnetism, and quantum physics</p>
          </div>
        </div>
      </section>

      {/* About KSNLearn */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">About KSNLearn</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            KSNLearn is a cutting-edge educational platform designed specifically for Sri Lankan A/L students.
            Our mission is to make advanced science education accessible, engaging, and effective.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-black border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300">
              <div className="text-blue-500 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-400">Our courses cover the entire A/L syllabus for Biology, Chemistry, and Physics, ensuring you're fully prepared for exams.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-black border border-purple-900/30 hover:border-purple-700/50 transition-all duration-300">
              <div className="text-purple-500 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
              <p className="text-gray-400">Engage with interactive simulations, 3D models, and virtual experiments that make complex concepts easy to understand.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-black border border-green-900/30 hover:border-green-700/50 transition-all duration-300">
              <div className="text-green-500 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-400">Monitor your performance with detailed analytics, identifying strengths and areas for improvement.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-black border border-red-900/30 hover:border-red-700/50 transition-all duration-300">
              <div className="text-red-500 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
              <p className="text-gray-400">Learn from experienced educators who provide personalized feedback and support throughout your learning journey.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="py-16 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Courses</h2>
          <p className="text-center text-gray-400 mb-12">Explore our most popular courses designed to help you excel in your A/L exams</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => {
              // Define subject-specific styling
              const subjectStyles = {
                biology: {
                  iconClass: 'text-green-500',
                  borderClass: 'border-green-900/30 hover:border-green-700/50',
                  buttonClass: 'bg-green-500 hover:bg-green-600',
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                  )
                },
                chemistry: {
                  iconClass: 'text-red-500',
                  borderClass: 'border-red-900/30 hover:border-red-700/50',
                  buttonClass: 'bg-red-500 hover:bg-red-600',
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                    </svg>
                  )
                },
                physics: {
                  iconClass: 'text-blue-500',
                  borderClass: 'border-blue-900/30 hover:border-blue-700/50',
                  buttonClass: 'bg-blue-500 hover:bg-blue-600',
                  icon: (
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0