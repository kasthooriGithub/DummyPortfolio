import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-glass' : 'bg-transparent'} py-3`}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={(e) => scrollToSection(e, 'home')}>
          Kasthoori
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <i className="bi bi-list text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {isAdmin && (
              <Link to="/admin" className="btn btn-outline-secondary">Admin</Link>
            )}
            <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'contact')}>Let's Talk</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
