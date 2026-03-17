import React, { useState, useEffect } from 'react';

const ProjectForm = ({ project, onSubmit, onCancel, loading }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [techStack, setTechStack] = useState('');
    const [projectType, setProjectType] = useState('Web');
    const [githubUrl, setGithubUrl] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (project) {
            setTitle(project.title);
            setDescription(project.description || '');
            setTechStack(project.tech_stack?.join(', ') || '');
            setProjectType(project.project_type);
            setGithubUrl(project.github_url || '');
            setLiveUrl(project.live_url || '');
            setImageUrl(project.image_url || '');
        }
    }, [project]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const techArray = techStack
            .split(',')
            .map(t => t.trim())
            .filter(t => t.length > 0);

        await onSubmit({
            title,
            description: description || null,
            tech_stack: techArray.length > 0 ? techArray : null,
            project_type: projectType,
            github_url: githubUrl || null,
            live_url: liveUrl || null,
            image_url: imageUrl || null,
        });
    };

    return (
        <div className="card-glass p-4 border-0">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h3 className="h5 fw-bold mb-0">
                    {project ? 'Edit Project' : 'Add New Project'}
                </h3>
                <button type="button" className="btn btn-sm btn-outline-secondary border-0" onClick={onCancel}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label small text-muted">Title *</label>
                    <input
                        type="text"
                        className="form-control form-control-dark"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Project title"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label small text-muted">Description</label>
                    <textarea
                        className="form-control form-control-dark"
                        id="description"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Project description"
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="techStack" className="form-label small text-muted">Tech Stack (comma-separated)</label>
                    <input
                        type="text"
                        className="form-control form-control-dark"
                        id="techStack"
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                        placeholder="React, Bootstrap, Firebase"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="projectType" className="form-label small text-muted">Project Type</label>
                    <select
                        className="form-select form-control-dark"
                        id="projectType"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                    >
                        <option value="Web">Web</option>
                        <option value="Mobile">Mobile</option>
                        <option value="SaaS">SaaS</option>
                    </select>
                </div>

                <div className="row g-3 mb-4">
                    <div className="col-md-6">
                        <label htmlFor="githubUrl" className="form-label small text-muted">GitHub URL</label>
                        <input
                            type="url"
                            className="form-control form-control-dark"
                            id="githubUrl"
                            value={githubUrl}
                            onChange={(e) => setGithubUrl(e.target.value)}
                            placeholder="https://github.com/..."
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="liveUrl" className="form-label small text-muted">Live URL</label>
                        <input
                            type="url"
                            className="form-control form-control-dark"
                            id="liveUrl"
                            value={liveUrl}
                            onChange={(e) => setLiveUrl(e.target.value)}
                            placeholder="https://..."
                        />
                    </div>
                </div>

                <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-primary flex-grow-1" disabled={loading || !title.trim()}>
                        {loading && <span className="spinner-border spinner-border-sm me-2"></span>}
                        {project ? 'Update Project' : 'Add Project'}
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
