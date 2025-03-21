import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Biology from './pages/Biology';
import Chemistry from './pages/Chemistry';
import Physics from './pages/Physics';
import SignUp from './components/SignUp';
import Login from './components/Login';
import supabase from './supabaseClient';
import { connectToMongo } from './mongoClient';
import {
  BookOpen,
  FlaskConical,
  Atom
} from 'lucide-react'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user);

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user);
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen w-screen bg-gray-900 text-white overflow-hidden"> {/* Darker background */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Navbar toggleSidebar={toggleSidebar} user={user} isSidebarOpen={isSidebarOpen} />
          <main className="flex-1 overflow-y-auto bg-gray-900"> {/* Darker background */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/biology" element={<Biology />} />
              <Route path="/chemistry" element={<Chemistry />} />
              <Route path="/physics" element={<Physics />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

const HomePage = () => (
  <div className="p-8">
    <h1 className="text-4xl font-bold text-red-500 mb-4">KSNLearn</h1>
    <h2 className="text-2xl font-bold text-white mb-4">Master A/L Sciences</h2>
    <p className="text-lg text-gray-300 mb-8">Your gateway to excelling in Biology, Chemistry, and Physics.</p>
    <div className="flex flex-wrap gap-4 mb-16">
      <Link to="/biology" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Biology</Link>
      <Link to="/chemistry" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Chemistry</Link>
      <Link to="/physics" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Physics</Link>
    </div>
  </div>
);

export default App;
