"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  BookOpen,
  FileText,
  Play,
  CheckCircle,
  Clock,
  Award,
  ChevronRight,
  Brain,
  Beaker,
  Microscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

interface SubjectPageProps {
  subject: "biology" | "chemistry" | "physics"
  title: string
  description: string
  icon: React.ReactNode
  gradientFrom: string
  gradientTo: string
  topics: {
    title: string
    description: string
    icon: React.ReactNode
    progress?: number
  }[]
}

export default function SubjectPage({ 
  subject, 
  title, 
  description, 
  icon, 
  gradientFrom, 
  gradientTo,
  topics
}: SubjectPageProps) {
  const [activeTab, setActiveTab] = useState('learn')
  
  const gradientClass = 
    subject === 'biology' 
      ? 'from-biology-from to-biology-to' 
      : subject === 'chemistry' 
        ? 'from-chemistry-from to-chemistry-to' 
        : 'from-physics-from to-physics-to'
  
  const textGradientClass = 
    subject === 'biology' 
      ? 'gradient-text-biology' 
      : subject === 'chemistry' 
        ? 'gradient-text-chemistry' 
        : 'gradient-text-physics'
  
  const borderClass = 
    subject === 'biology' 
      ? 'border-biology-from/20' 
      : subject === 'chemistry' 
        ? 'border-chemistry-from/20' 
        : 'border-physics-from/20'
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-90"></div>
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${gradientFrom}20_0,transparent_70%)]`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${gradientClass} mr-4`}>
                  {icon}
                </div>
                <h1 className={`text-4xl md:text-5xl font-bold ${textGradientClass}`}>
                  {title}
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className={`bg-gradient-to-r ${gradientClass} text-white`}>
                  Start Learning
                </Button>
                <Button variant="outline" className={`border-${subject}-from text-white`}>
                  View Syllabus
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  <span className="text-gray-300">25+ Modules</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="text-gray-300">100+ Hours</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  <span className="text-gray-300">Certificate</span>
                </div>
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-500" />
                  <span className="text-gray-300">500+ MCQs</span>
                </div>
                <div className="flex items-center">
                  <Play className="w-5 h-5 mr-2 text-red-500" />
                  <span className="text-gray-300">Video Lessons</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-cyan-500" />
                  <span className="text-gray-300">Study Notes</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientClass} rounded-lg blur opacity-30`}></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <Image 
                  src="/placeholder.svg?height=400&width=600" 
                  alt={`${title} Course`} 
                  width={600} 
                  height={400} 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,${gradientFrom}10_0,transparent_60%)]`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Tabs defaultValue="learn" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent mb-8">
              <TabsTrigger 
                value="learn" 
                className={`data-[state=active]:bg-gradient-to-r data-[state=active]:${gradientClass} data-[state=active]:text-white`}
              >
                Learn
              </TabsTrigger>
              <TabsTrigger 
                value="practice" 
                className={`data-[state=active]:bg-gradient-to-r data-[state=active]:${gradientClass} data-[state=active]:text-white`}
              >
                Practice
              </TabsTrigger>
              <TabsTrigger 
                value="test" 
                className={`data-[state=active]:bg-gradient-to-r data-[state=active]:${gradientClass} data-[state=active]:text-white`}
              >
                Test
              </TabsTrigger>
              <TabsTrigger 
                value="resources" 
                className={`data-[state=active]:bg-gradient-to-r data-[state=active]:${gradientClass} data-[state=active]:text-white`}
              >
                Resources
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="learn" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-6 text-white">Learning Modules</h2>
                  
                  <div className="space-y-6">
                    {topics.map((topic, index) => (
                      <div key={index} className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass} hover:border-${subject}-from transition-colors duration-300`}>
                        <div className="flex items-start">
                          <div className={`p-3 rounded-full bg-${subject}-from/10 mr-4`}>
                            {topic.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 text-white">{topic.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{topic.description}</p>
                            
                            {topic.progress !== undefined && (
                              <div className="mb-2">
                                <div className="flex justify-between mb-1">
                                  <span className="text-xs text-gray-400">Progress</span>
                                  <span className="text-xs text-gray-400">{topic.progress}%</span>
                                </div>
                                <Progress value={topic.progress} className="h-2" />
                              </div>
                            )}
                            
                            <div className="flex justify-between items-center mt-4">
                              <div className="flex items-center text-xs text-gray-400">
                                <Clock className="w-3 h-3 mr-1" />
                                <span>4-6 hours</span>
                              </div>
                              <Link href={`/subjects/${subject}/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                <Button variant="ghost" size="sm" className={`text-${subject}-from hover:text-${subject}-to`}>
                                  Start Learning
                                  <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">Your Progress</h2>
                  
                  <div className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass} mb-8`}>
                    <div className="text-center mb-4">
                      <div className="inline-block p-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 mb-4">
                        <div className={`p-6 rounded-full bg-gradient-to-r ${gradientClass} relative`}>
                          <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">42%</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white">Overall Progress</h3>
                      <p className="text-gray-400 text-sm">Keep going! You're doing great.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-400">Completed Modules</span>
                          <span className="text-sm text-white">5/12</span>
                        </div>
                        <Progress value={42} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-400">Practice Questions</span>
                          <span className="text-sm text-white">128/300</span>
                        </div>
                        <Progress value={43} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-400">Test Scores</span>
                          <span className="text-sm text-white">76%</span>
                        </div>
                        <Progress value={76} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass}`}>
                    <h3 className="text-xl font-bold mb-4 text-white">Recommended Next</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full bg-${subject}-from/10 mr-3`}>
                          <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Continue Module 3</h4>
                          <p className="text-gray-400 text-xs">You're 60% through this module</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full bg-${subject}-from/10 mr-3`}>
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Practice Test 2</h4>
                          <p className="text-gray-400 text-xs">Based on your recent activity</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className={`p-2 rounded-full bg-${subject}-from/10 mr-3`}>
                          <Play className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">Watch Tutorial Video</h4>
                          <p className="text-gray-400 text-xs">Visual explanation of key concepts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="practice" className="border-none p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-6 text-white">Practice Resources</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass} hover:border-${subject}-from transition-colors duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-${subject}-from/10 mr-4`}>
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Flashcards</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        Review key terms, definitions, and concepts with our interactive flashcard system.
                      </p>
                      <Button className={`w-full bg-gradient-to-r ${gradientClass} text-white`}>
                        Start Practicing
                      </Button>
                    </div>
                    
                    <div className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass} hover:border-${subject}-from transition-colors duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-${subject}-from/10 mr-4`}>
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Problem Sets</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        Solve practice problems with step-by-step solutions and explanations.
                      </p>
                      <Button className={`w-full bg-gradient-to-r ${gradientClass} text-white`}>
                        Solve Problems
                      </Button>
                    </div>
                    
                    <div className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass} hover:border-${subject}-from transition-colors duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-${subject}-from/10 mr-4`}>
                          <Beaker className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Virtual Lab</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        Conduct virtual experiments and simulations to reinforce your understanding.
                      </p>
                      <Button className={`w-full bg-gradient-to-r ${gradientClass} text-white`}>
                        Enter Lab
                      </Button>
                    </div>
                    
                    <div className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass} hover:border-${subject}-from transition-colors duration-300`}>
                      <div className="flex items-center mb-4">
                        <div className={`p-3 rounded-full bg-${subject}-from/10 mr-4`}>
                          <Microscope className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Interactive Models</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        Explore 3D models and interactive diagrams to visualize complex structures.
                      </p>
                      <Button className={`w-full bg-gradient-to-r ${gradientClass} text-white`}>
                        View Models
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-white">Practice Stats</h2>
                  
                  <div className={`bg-black/40 backdrop-blur-sm p-6 rounded-lg border ${borderClass} mb-8`}>
                    <h3 className="text-xl font-bold mb-4 text-white">Your Activity</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-400">Flashcards Reviewed\

