import React from 'react';

const ProjectList = ({ projects, onEdit, onDelete, loading }) => {
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="card-glass p-5 text-center border-0">
                <i className="bi bi-folder-x fs-1 text-muted mb-3 d-block"></i>
                <h4 className="h5 fw-bold">No projects yet</h4>
                <p className="text-muted small">Add your first project to showcase your work.</p>
            </div>
        );
    }

    return (
        <div className="row g-4">
            {projects.map((project) => (
                <div key={project.id} className="col-12">
                    <div className="card-glass p-4 border-0">
                        <div className="row align-items-center">
                            <div className="col">
                                <h4 className="h5 fw-bold mb-1">{project.title}</h4>
                                <div className="d-flex flex-wrap gap-2 mb-2">
                                    <span className="badge border border-secondary text-muted small px-2">
                                        {project.project_type}
                                    </span>
                                    {project.tech_stack?.map((tech, i) => (
                                        <span key={i} className="text-muted small" style={{ fontSize: '0.75rem' }}>
                                            • {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-muted small mb-0 text-truncate" style={{ maxWidth: '400px' }}>
                                    {project.description}
                                </p>
                            </div>
                            <div className="col-auto d-flex gap-2">
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(project)}>
                                    <i className="bi bi-pencil me-1"></i> Edit
                                </button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(project.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
