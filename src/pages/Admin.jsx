import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import AdminLogin from 'components/AdminLogin';
import AdminDashboard from 'components/AdminDashboard';

const Admin = () => {
    const { user, isAdmin, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center bg-dark">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Not logged in - show login
    if (!user) {
        return <AdminLogin />;
    }

    // Logged in but not admin - show access denied
    if (!isAdmin) {
        return (
            <div className="vh-100 d-flex align-items-center justify-content-center bg-dark text-center">
                <div className="container" style={{ maxWidth: '400px' }}>
                    <div className="card-glass p-5 border-0">
                        <i className="bi bi-shield-lock-fill text-danger display-4 mb-4"></i>
                        <h1 className="h4 fw-bold mb-3">Access Denied</h1>
                        <p className="text-muted small mb-4">
                            You don't have admin privileges to access this dashboard.
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="btn btn-outline-primary w-100"
                        >
                            <i className="bi bi-house me-2"></i> Return to Portfolio
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Admin user - show dashboard
    return <AdminDashboard />;
};

export default Admin;
