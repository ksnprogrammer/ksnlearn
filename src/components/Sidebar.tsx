import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  FlaskConical,
  Atom
} from 'lucide-react'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-gray-800 w-64 md:w-64 p-4 fixed h-screen top-0 left-0 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <button onClick={toggleSidebar} className="md:hidden absolute top-4 right-4">
        X
      </button>
      <ul className="space-y-4">
        <li>
          <Link to="/biology" className="flex items-center text-lg hover:text-red-500">
            <BookOpen className="w-6 h-6 mr-2 text-green-400"/> Biology
          </Link>
        </li>
        <li>
          <Link to="/chemistry" className="flex items-center text-lg hover:text-purple-500">
            <FlaskConical className="w-6 h-6 mr-2 text-purple-400"/> Chemistry
          </Link>
        </li>
        <li>
          <Link to="/physics" className="flex items-center text-lg hover:text-blue-500">
            <Atom className="w-6 h-6 mr-2 text-blue-400"/> Physics
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
