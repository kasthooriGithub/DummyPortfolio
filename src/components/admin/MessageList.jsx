import React from 'react';

const MessageList = ({ submissions, onSelect, selectedId, loading, onDelete }) => {
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (submissions.length === 0) {
        return (
            <div className="card-glass p-5 text-center border-0">
                <i className="bi bi-inbox fs-1 text-muted mb-3 d-block"></i>
                <h4 className="h5 fw-bold">Inbox is empty</h4>
                <p className="text-muted small">Messages from your contact form will appear here.</p>
            </div>
        );
    }

    return (
        <div className="d-flex flex-column gap-2">
            {submissions.map((msg) => (
                <div
                    key={msg.id}
                    className={`card-glass p-3 border-0 cursor-pointer transition-all ${selectedId === msg.id ? 'border-start border-4 border-primary' : ''}`}
                    onClick={() => onSelect(msg)}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                        <div className="d-flex align-items-center gap-2">
                            {msg.status === 'new' && <span className="bg-primary rounded-circle" style={{ width: '8px', height: '8px' }}></span>}
                            <h6 className={`mb-0 fw-bold ${msg.status === 'new' ? 'text-white' : 'text-muted'}`}>{msg.name}</h6>
                        </div>
                        <small className="text-muted" style={{ fontSize: '0.7rem' }}>
                            {new Date(msg.created_at).toLocaleDateString()}
                        </small>
                    </div>
                    <div className="text-muted small text-truncate fw-medium mb-1">{msg.subject}</div>
                    <div className="text-muted small text-truncate" style={{ fontSize: '0.8rem' }}>{msg.message}</div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;
