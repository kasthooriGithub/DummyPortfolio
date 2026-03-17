import React from 'react';

const HeroSection = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="vh-100 d-flex align-items-center position-relative overflow-hidden">
      <div className="container position-relative z-1 text-center">
        <h1 className="display-1 fw-bold mb-3">
          Hi, I'm <span className="hero-gradient-text glow-text">Developer</span>
        </h1>
        <h2 className="display-6 fw-bold mb-4 opacity-75">
          Junior Web Developer & UI/UX Designer
        </h2>
        <p className="lead mx-auto mb-5 opacity-50" style={{ maxWidth: '600px' }}>
          Crafting beautiful, functional web experiences with modern technologies.
          Passionate about clean code and intuitive design.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="#projects" className="btn btn-primary btn-lg px-5 py-3" onClick={(e) => scrollToSection(e, 'projects')}>
            <i className="bi bi-folder me-2"></i> View Projects
          </a>
          <a href="/Kasthoori_CV.pdf" className="btn btn-outline-secondary btn-lg px-5 py-3" download>
            <i className="bi bi-download me-2"></i> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
