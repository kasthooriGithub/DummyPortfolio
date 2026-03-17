import React, { useState } from 'react';

const staticProjects = [
  {
    id: 1,
    title: 'Modern Portfolio',
    description: 'A responsive and high-performance portfolio website built with React and Bootstrap.',
    project_type: 'Web',
    tech_stack: ['React', 'Bootstrap', 'Custom CSS'],
    github_url: 'https://github.com',
    live_url: 'https://demo.com',
  },
  {
    id: 2,
    title: 'Employee Task & Time Tracking System',
    description: 'A web application to manage employees, assign tasks, and track time using real-time database functionality.',
    project_type: 'SaaS',
    tech_stack: ['React', 'Firebase', 'Bootstrap'],
    github_url: 'https://github.com',
    live_url: 'https://68b40fae01a91fbcbc917723--stirring-cannoli-487e17.netlify.app/',
  },
  {
    id: 3,
    title: 'Fitness Tracker App',
    description: 'A web application to track workouts, calories, and progress.',
    project_type: 'Web',
    tech_stack: ['React', 'Firebase', 'Bootstrap','Custom CSS'],
    github_url: 'https://github.com/kasthooriGithub/FitnessTracker.git',
    live_url: 'https://demo.com',
  }
];

const colorMap = {
  'Web': 'text-primary border-primary',
  'Mobile': 'text-info border-info',
  'SaaS': 'text-warning border-warning',
};

const ProjectsSection = () => {
  const [projects] = useState(staticProjects);

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Featured <span className="hero-gradient-text">Projects</span></h2>
          <p className="mt-2 opacity-50">Selected works that showcase my technical expertise and problem-solving skills.</p>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="card-glass h-100 p-0 overflow-hidden border-0">
                <div className="p-4">
                  <div className=" d-flex justify-content-between align-items-center mb-3">
                    <span className={`badge border ${colorMap[project.project_type] || 'text-light border-light'} small`}>
                      {project.project_type}
                    </span>
                    <div className="d-flex gap-2">
                      <a href={project.github_url} className="hover-primary fs-5" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
                      <a href={project.live_url} className="hover-primary fs-5" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i></a>
                    </div>
                  </div>
                  <h4 className="fw-bold mb-2">{project.title}</h4>
                  <p className="small mb-4 opacity-50">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {project.tech_stack.map((tech, idx) => (
                      <span key={idx} className="small py-1 px-2 border border-secondary rounded-pill opacity-50" style={{ fontSize: '0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
