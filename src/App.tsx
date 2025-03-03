import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { DynamicBackground } from './components/DynamicBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FlashcardDeck from './components/FlashcardDeck';
import NewHome from './components/NewHome';
import About from './components/About';
import Articles from './components/Articles';
import Quiz from './components/Quiz';
import { KSNLearnTextLogo } from './components/logo/KSNLearnTextLogo';

import Login from './components/Login';
import Register from './components/Register';
const QuizList = () => (
  <div className="p-8">
    <Quiz />
  </div>
);
const BlogList = () => <div className="p-8">Blog List Page</div>;
const Profile = () => <div className="p-8">Profile Page</div>;
const AdminDashboard = () => <div className="p-8">Admin Dashboard</div>;
const NotFound = () => <div className="p-8">404 - Page Not Found</div>;

// Create a client for React Query
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-black text-white relative">
            <DynamicBackground 
              lineColor="#3B82F6"
              speed={20}
              lineCount={5}
            />
            <div className="relative z-10">
              <Navbar />
              <main className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<NewHome />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/flashcards" element={<FlashcardDeck />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/quizzes" element={<QuizList />} />
                  <Route path="/blogs" element={<BlogList />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
