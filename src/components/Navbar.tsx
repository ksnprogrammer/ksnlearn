import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { signOut } from '../supabaseClient';

const Navbar = ({ toggleSidebar, user, isSidebarOpen }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="md:hidden">
        {isSidebarOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
      <div>
        {user ? (
          <>
            <span className="text-lg font-medium">{user.email}</span>
            <button onClick={signOut} className="ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Out</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">Sign Up</Link>
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
