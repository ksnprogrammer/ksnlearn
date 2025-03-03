import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { KSNLearnTextLogo } from './logo/KSNLearnTextLogo';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('Navbar must be used within an AuthProvider');
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <KSNLearnTextLogo variant="default" size="sm" animated={true} />
        </div>
        
        <div className="navbar-links">
          <a href="#biology" className="nav-link biology">Biology</a>
          <a href="#chemistry" className="nav-link chemistry">Chemistry</a>
          <a href="#physics" className="nav-link physics">Physics</a>
        </div>

        <div className="navbar-actions">
          <button className="lang-toggle">සිංහල</button>
          {auth.isAuthenticated ? (
            <button className="login-btn" onClick={auth.logout}>Logout</button>
          ) : (
            <>
              <button className="login-btn" onClick={() => setIsMenuOpen(true)}>Login</button>
              <button className="signup-btn" onClick={() => setIsMenuOpen(true)}>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;