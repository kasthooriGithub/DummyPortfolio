import React from 'react';

const experiences = [
  {
    company: 'Woocurs Technologies',
    role: 'Software Developer Intern',
    period: 'Aug 2025 - Feb 2026',
    description: 'Developing and maintaining responsive web applications using React, Bootstrap, and firebase. Focused on performance optimization and writing clean, scalable code.',
  },
  {
    company: 'Bank of Ceylon – Thirunelvely',
    role: 'Banking Trainee (School Leaver Program)',
    period: 'Feb 2023 - Aug 2023',
    description: 'Developed communication, teamwork, and professional workplace behavior',
  },
  {
    company: 'Academic Project-Online Furniture Platform',
    role: 'Final Year Project',
    period: '2021 - Present',
    description: 'Developed an online furniture platform using HTML, CSS, JavaScript, and PHP.Designed responsive user interfaces for product browsing and shopping experience.Implemented basic features like product listing, categories, and navigation.Applied UI/UX principles to enhance user experience.',
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-5 bg-glass">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">My <span className="hero-gradient-text">Experience</span></h2>
          <p className="opacity-50 mt-2">My professional journey in the world of technology and design.</p>
        </div>
        <div className="row g-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="col-md-4">
              <div className="card-glass p-4 h-100 border-0">
                <div className="mb-3">
                  <span className="badge-glass px-3 py-1 small text-primary">{exp.period}</span>
                </div>
                <h4 className="fw-bold mb-1">{exp.role}</h4>
                <h5 className="opacity-50 small mb-4">{exp.company}</h5>
                <p className="opacity-50 small mb-0">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
