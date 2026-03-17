import React from 'react';

const MessageDetails = ({ submission, onDelete, onBack }) => {
    if (!submission) {
        return (
            <div className="card-glass h-100 d-flex align-items-center justify-content-center text-center p-5 border-0">
                <div className="text-muted">
                    <i className="bi bi-chat-left-dots fs-1 mb-3 d-block"></i>
                    <p>Select a message to view details</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card-glass p-4 h-100 border-0">
            <div className="d-flex justify-content-between align-items-start mb-4">
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-sm btn-outline-secondary d-lg-none" onClick={onBack}>
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    <div>
                        <h4 className="fw-bold mb-1">{submission.name}</h4>
                        <div className="text-primary small">{submission.email}</div>
                    </div>
                </div>
                <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(submission.id)}>
                    <i className="bi bi-trash me-1"></i> Delete
                </button>
            </div>

            <div className="mb-4">
                <div className="small text-muted mb-1">Subject</div>
                <div className="fw-bold text-light">{submission.subject}</div>
            </div>

            <div className="mb-4">
                <div className="small text-muted mb-1">Date Received</div>
                <div className="text-light">{new Date(submission.created_at).toLocaleString()}</div>
            </div>

            <hr className="border-secondary opacity-25" />

            <div className="mt-4">
                <div className="small text-muted mb-2">Message Content</div>
                <div className="text-light p-3 bg-dark rounded border border-secondary" style={{ whiteSpace: 'pre-wrap', minHeight: '200px' }}>
                    {submission.message}
                </div>
            </div>

            <div className="mt-5 text-end">
                <a href={`mailto:${submission.email}?subject=Re: ${submission.subject}`} className="btn btn-primary px-4">
                    <i className="bi bi-reply me-2"></i> Reply via Email
                </a>
            </div>
        </div>
    );
};

export default MessageDetails;
