import React from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: 'bi-window-sidebar',
    skills: ['React', 'JavaScript', 'Bootstrap 5', 'HTML5 & CSS3'],
  },
  {
    category: 'Backend',
    icon: 'bi-database-gear',
    skills: ['PHP', 'MySQL', 'Firebase'],
  },
  {
    category: 'Design & Tools',
    icon: 'bi-vector-pen',
    skills: ['Figma', 'UI/UX Design', 'Git & GitHub', 'Responsive Design', 'Vite', 'VS Code'],
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-5 bg-glass">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">My <span className="hero-gradient-text">Skills</span></h2>
          <p className="opacity-50 mt-2">A technical toolkit that empowers me to build modern web solutions.</p>
        </div>
        <div className="row g-4">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="card-glass p-4 h-100 border-0">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="icon-box bg-dark text-primary rounded d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                    <i className={`bi ${group.icon} fs-4`}></i>
                  </div>
                  <h4 className="fw-bold mb-0">{group.category}</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge-glass px-3 py-2 small">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
