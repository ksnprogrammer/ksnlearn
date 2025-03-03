import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dna,
  FlaskRoundIcon as Flask,
  Atom,
  BookOpen,
  BarChart,
  Brain,
  Zap,
  Users,
  ChevronRight,
  CheckCircle,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0,transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">KSN</span>
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-glow">
                Learn
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">
              Master A/L Sciences with Advanced Learning
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
              Your cybernetic gateway to excelling in Biology, Chemistry, and Physics. Interactive lessons, practical
              experiments, and expert guidance all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/subjects">
                <Button className="relative overflow-hidden group text-white border border-neon-blue bg-transparent hover:bg-transparent">
                  <span className="relative z-10 flex items-center">
                    Explore Courses
                    <Zap className="ml-2 w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  variant="outline"
                  className="text-white border-neon-purple hover:border-neon-blue hover:text-neon-blue transition-colors duration-300"
                >
                  Learn More
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-biology-from to-biology-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-biology-from/20 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-biology-from/10 mb-4">
                    <Dna className="w-8 h-8 text-biology-from" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 gradient-text-biology">Biology</h3>
                  <p className="text-gray-400 text-center text-sm">
                    Explore cells, genetics, physiology, and ecosystems
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-chemistry-from to-chemistry-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-chemistry-from/20 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-chemistry-from/10 mb-4">
                    <Flask className="w-8 h-8 text-chemistry-from" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 gradient-text-chemistry">Chemistry</h3>
                  <p className="text-gray-400 text-center text-sm">Master organic, inorganic, and physical chemistry</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-physics-from to-physics-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-physics-from/20 flex flex-col items-center">
                  <div className="p-3 rounded-full bg-physics-from/10 mb-4">
                    <Atom className="w-8 h-8 text-physics-from" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 gradient-text-physics">Physics</h3>
                  <p className="text-gray-400 text-center text-sm">
                    Understand mechanics, electromagnetism, and quantum physics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
          <div className="inline-flex items-center animate-bounce">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1)_0,transparent_60%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About KSNLearn</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              KSNLearn is a cutting-edge educational platform designed specifically for Sri Lankan A/L students. Our
              mission is to make advanced science education accessible, engaging, and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-blue transition-colors duration-300">
              <div className="p-3 rounded-full bg-blue-500/10 mb-4 w-14 h-14 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Comprehensive Curriculum</h3>
              <p className="text-gray-400 text-sm">
                Our courses cover the entire A/L syllabus for Biology, Chemistry, and Physics, ensuring you're fully
                prepared for exams.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-purple transition-colors duration-300">
              <div className="p-3 rounded-full bg-purple-500/10 mb-4 w-14 h-14 flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Interactive Learning</h3>
              <p className="text-gray-400 text-sm">
                Engage with interactive simulations, 3D models, and virtual experiments that make complex concepts easy
                to understand.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-green transition-colors duration-300">
              <div className="p-3 rounded-full bg-green-500/10 mb-4 w-14 h-14 flex items-center justify-center">
                <BarChart className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Progress Tracking</h3>
              <p className="text-gray-400 text-sm">
                Monitor your performance with detailed analytics, identifying strengths and areas for improvement.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-neon-red transition-colors duration-300">
              <div className="p-3 rounded-full bg-red-500/10 mb-4 w-14 h-14 flex items-center justify-center">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Expert Guidance</h3>
              <p className="text-gray-400 text-sm">
                Learn from experienced educators who provide personalized feedback and support throughout your learning
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 relative overflow-hidden bg-black/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1)_0,transparent_60%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Courses</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore our most popular courses designed to help you excel in your A/L exams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-biology-from to-biology-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-biology-from/20">
                <div className="mb-4">
                  <Dna className="w-12 h-12 text-biology-from" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text-biology">Advanced Genetics</h3>
                <p className="text-gray-400 mb-4">Unravel the mysteries of DNA and inheritance patterns</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Gene expression and regulation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Mendelian and non-Mendelian inheritance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Genetic engineering techniques
                  </li>
                </ul>
                <Link href="/courses/advanced-genetics">
                  <Button className="w-full bg-biology-from text-white hover:bg-biology-to transition-colors duration-300">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-chemistry-from to-chemistry-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-chemistry-from/20">
                <div className="mb-4">
                  <Flask className="w-12 h-12 text-chemistry-from" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text-chemistry">Organic Reactions Masterclass</h3>
                <p className="text-gray-400 mb-4">Master the art of organic synthesis and reaction mechanisms</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Nucleophilic substitution reactions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Elimination and addition mechanisms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Aromatic compound reactions
                  </li>
                </ul>
                <Link href="/courses/organic-reactions-masterclass">
                  <Button className="w-full bg-chemistry-from text-white hover:bg-chemistry-to transition-colors duration-300">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-physics-from to-physics-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-physics-from/20">
                <div className="mb-4">
                  <Atom className="w-12 h-12 text-physics-from" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text-physics">Quantum Mechanics Fundamentals</h3>
                <p className="text-gray-400 mb-4">Dive into the fascinating world of quantum physics</p>
                <ul className="text-gray-300 text-sm mb-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Wave-particle duality
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Schrödinger equation and applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                    Quantum tunneling and entanglement
                  </li>
                </ul>
                <Link href="/courses/quantum-mechanics-fundamentals">
                  <Button className="w-full bg-physics-from text-white hover:bg-physics-to transition-colors duration-300">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1)_0,transparent_60%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">KSNLearn by the Numbers</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              See how our platform is revolutionizing A/L science education in Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 text-center">
                <div className="text-4xl font-bold mb-2 text-blue-400">50,000+</div>
                <p className="text-gray-300">Active Students</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-green-500/20 text-center">
                <div className="text-4xl font-bold mb-2 text-green-400">1,000+</div>
                <p className="text-gray-300">Hours of Video Content</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20 text-center">
                <div className="text-4xl font-bold mb-2 text-yellow-400">98%</div>
                <p className="text-gray-300">Student Satisfaction</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-red-500/20 text-center">
                <div className="text-4xl font-bold mb-2 text-red-400">25,000+</div>
                <p className="text-gray-300">Practice Questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 relative overflow-hidden bg-black/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0,transparent_60%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Latest from Our Blog</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Stay updated with the latest developments in science education and exam preparation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog Post 1"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">The Future of AI in Science Education</h3>
                <p className="text-gray-400 mb-4">
                  Exploring how artificial intelligence is revolutionizing the way we learn and teach science...
                </p>
                <Link
                  href="/blog/ai-in-science-education"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog Post 2"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Top 10 Study Techniques for A/L Success</h3>
                <p className="text-gray-400 mb-4">
                  Discover the most effective study strategies used by top-performing students to ace their A/L exams...
                </p>
                <Link
                  href="/blog/top-study-techniques"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Blog Post 3"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  The Role of Practical Experiments in Science Learning
                </h3>
                <p className="text-gray-400 mb-4">
                  Why hands-on experiments are crucial for understanding complex scientific concepts and how to conduct
                  them at home...
                </p>
                <Link
                  href="/blog/importance-of-practical-experiments"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/10">
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative overflow-hidden bg-black/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1)_0,transparent_60%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Features</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Discover the innovative tools and features that make KSNLearn the ultimate platform for A/L science
              education.
            </p>
          </div>

          <Tabs defaultValue="study" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-transparent mb-8">
              <TabsTrigger
                value="study"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white"
              >
                Study Mode
              </TabsTrigger>
              <TabsTrigger
                value="flashcards"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white"
              >
                Flashcards
              </TabsTrigger>
              <TabsTrigger
                value="mcq"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                MCQ Tests
              </TabsTrigger>
              <TabsTrigger
                value="essays"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Essay Generator
              </TabsTrigger>
              <TabsTrigger
                value="progress"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
              >
                Progress Tracking
              </TabsTrigger>
            </TabsList>

            <TabsContent value="study" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Comprehensive Study Materials</h3>
                  <p className="text-gray-400 mb-6">
                    Our study mode presents theoretical concepts in an easily digestible format, with clear
                    explanations, diagrams, and examples.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Interactive lessons with multimedia content</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">3D models and animations for complex concepts</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Step-by-step problem-solving guides</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Downloadable notes and summaries</p>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Study Mode"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="flashcards" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Interactive Flashcards</h3>
                  <p className="text-gray-400 mb-6">
                    Our flashcard system helps you quickly review and memorize key terms, definitions, formulas, and
                    concepts.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Spaced repetition algorithm for optimal retention</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Create your own custom flashcard decks</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Track your progress and focus on difficult cards</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Multimedia flashcards with images and diagrams</p>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-green-500/20">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Flashcards"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mcq" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Comprehensive MCQ Tests</h3>
                  <p className="text-gray-400 mb-6">
                    Test your knowledge with our extensive collection of multiple-choice questions designed to match the
                    A/L exam format.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Thousands of practice questions with detailed explanations</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Timed tests to simulate exam conditions</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Detailed score analysis and performance insights</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Adaptive testing that focuses on your weak areas</p>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-red-500/20">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="MCQ Tests"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="essays" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Essay Generator & Writing Tools</h3>
                  <p className="text-gray-400 mb-6">
                    Practice your writing skills with our essay generator and get feedback on your written responses.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Generate essay outlines on various topics</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">AI-powered feedback on your written work</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Sample essays with annotations and explanations</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Writing tips and strategies for structured responses</p>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Essay Generator"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="progress" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-white">Detailed Progress Tracking</h3>
                  <p className="text-gray-400 mb-6">
                    Monitor your learning journey with comprehensive analytics and personalized insights.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Visual dashboards showing your progress in each subject</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Identify knowledge gaps and areas for improvement</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Track time spent on each topic and activity</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">Personalized study recommendations based on your performance</p>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-green-500 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Progress Tracking"
                      width={500}
                      height={300}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0,transparent_60%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Hear from our students who have achieved their academic goals with KSNLearn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-biology-from to-biology-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-black/60 backdrop-blur-sm border-biology-from/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-biology-from/20 flex items-center justify-center mr-4">
                      <span className="text-biology-from font-bold">KD</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Kavindi Dissanayake</h4>
                      <p className="text-sm text-biology-from">Biology Student • Colombo</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "The Biology modules at KSNLearn helped me understand complex concepts like genetic engineering and
                    cell division with such clarity. The interactive visualizations and practice questions were
                    invaluable. I scored an A in my A/L Biology exam!"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">June 2023</span>
                    <Link
                      href="/subjects/biology"
                      className="text-biology-from hover:underline text-sm flex items-center"
                    >
                      Biology Modules
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-chemistry-from to-chemistry-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-black/60 backdrop-blur-sm border-chemistry-from/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-chemistry-from/20 flex items-center justify-center mr-4">
                      <span className="text-chemistry-from font-bold">VP</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Vishwa Perera</h4>
                      <p className="text-sm text-chemistry-from">Chemistry Student • Kandy</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "Organic chemistry was my biggest weakness until I discovered KSNLearn. The step-by-step reaction
                    mechanisms and the virtual lab simulations made everything click. From struggling to get a C, I
                    improved to an A in my final exams!"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">May 2023</span>
                    <Link
                      href="/subjects/chemistry"
                      className="text-chemistry-from hover:underline text-sm flex items-center"
                    >
                      Chemistry Modules
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-physics-from to-physics-to rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-black/60 backdrop-blur-sm border-physics-from/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-physics-from/20 flex items-center justify-center mr-4">
                      <span className="text-physics-from font-bold">AF</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Ashan Fernando</h4>
                      <p className="text-sm text-physics-from">Physics Student • Galle</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">
                    "The Physics modules at KSNLearn made concepts like electromagnetic induction and wave mechanics so
                    much easier to grasp. The interactive simulations let me visualize abstract concepts, which was a
                    game-changer. I got an A in Physics!"
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">July 2023</span>
                    <Link
                      href="/subjects/physics"
                      className="text-physics-from hover:underline text-sm flex items-center"
                    >
                      Physics Modules
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <button className="w-3 h-3 rounded-full bg-gray-700"></button>
              <button className="w-3 h-3 rounded-full bg-white"></button>
              <button className="w-3 h-3 rounded-full bg-gray-700"></button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3)_0,transparent_70%)]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Excel in Your A/L Sciences?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of Sri Lankan students who have transformed their learning experience with KSNLearn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/10 px-8 py-6 text-lg">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

