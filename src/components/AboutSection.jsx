import React from 'react';

const highlights = [
  { icon: 'bi-code-slash', label: 'Clean Code', description: 'Writing maintainable solutions' },
  { icon: 'bi-palette', label: 'UI/UX Design', description: 'Creating intuitive interfaces' },
  { icon: 'bi-rocket-takeoff', label: 'Performance', description: 'Optimizing for speed' },
  { icon: 'bi-people', label: 'Collaboration', description: 'Team-oriented approach' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">About <span className="hero-gradient-text">Me</span></h2>
          <div className="mx-auto mt-2 rounded" style={{ height: '4px', width: '80px', background: 'var(--neon-cyan)' }}></div>
        </div>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="card-glass p-5 text-center position-relative">
              <div className="row g-4 position-relative z-1">
                {highlights.map((item, index) => (
                  <div key={index} className="col-6 text-center">
                    <div className="p-3">
                      <i className={`bi ${item.icon} text-primary fs-3 mb-2`}></i>
                      <h5 className="fw-bold">{item.label}</h5>
                      <p className="small mb-0 opacity-50">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="h2 fw-bold mb-4">Passionate Developer & Designer</h3>
            <p className="lead mb-4 opacity-50">
              I'm a Junior Web Developer and UI/UX Designer with a passion for creating beautiful, user-centric digital experiences. My journey in tech started with curiosity and has grown into a deep commitment to crafting efficient, elegant solutions.
            </p>
            <p className="mb-5 opacity-50">
              With experience in React, Flutter, and backend technologies like Firebase and MySQL, I bring ideas to life through clean code and thoughtful design. I believe in continuous learning and staying updated with the latest technologies and design trends.
            </p>
            <div className="row g-4 text-center">
              <div className="col-sm-6">
                <div className="card-glass p-3 h-100 text-center">
                  <h4 className="fw-bold text-primary">3+</h4>
                  <p className="mb-0 opacity-50">Projects Completed</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card-glass p-3 h-100 text-center">
                  <h4 className="fw-bold text-primary">1+</h4>
                  <p className="mb-0 opacity-50">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
