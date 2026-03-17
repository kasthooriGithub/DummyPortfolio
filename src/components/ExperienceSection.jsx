import React from 'react';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Junior Web Developer',
    period: '2023 - Present',
    description: 'Developing and maintaining responsive web applications using React, Bootstrap, and firebase. Focused on performance optimization and writing clean, scalable code.',
  },
  {
    company: 'Digital Creative Agency',
    role: 'UI/UX Design Intern',
    period: '2022 - 2023',
    description: 'Collaborated with senior designers to create user-centric prototypes and high-fidelity mockups in Figma. Implemented frontend components using Bootstrap and CSS.',
  },
  {
    company: 'Freelance Projects',
    role: 'Full Stack Experience',
    period: '2021 - Present',
    description: 'Developed various custom web solutions for clients, focusing on integrating backend services like Firebase for authentication and database management.',
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
