import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const { signIn } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');

        const { error } = await signIn(email, password);

        if (error) {
            setErrorMsg(error.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-dark">
            <div className="container" style={{ maxWidth: '450px' }}>
                <Link to="/" className="text-secondary text-decoration-none mb-4 d-inline-block">
                    <i className="bi bi-arrow-left me-2"></i> Back to Portfolio
                </Link>

                <div className="card-glass p-5 border-0">
                    <div className="text-center mb-5">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px' }}>
                            <i className="bi bi-lock text-primary fs-2"></i>
                        </div>
                        <h2 className="fw-bold h4">Admin Login</h2>
                        <p className="text-muted small">Sign in to manage your portfolio</p>
                    </div>

                    {errorMsg && (
                        <div className="alert alert-danger small py-2 d-flex align-items-center mb-4">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label small text-muted">Email Address</label>
                            <div className="input-group">
                                <span className="input-group-text bg-dark border-secondary text-muted border-end-0">
                                    <i className="bi bi-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    className="form-control form-control-dark border-start-0 ps-0"
                                    placeholder="admin@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label className="form-label small text-muted">Password</label>
                            <div className="input-group">
                                <span className="input-group-text bg-dark border-secondary text-muted border-end-0">
                                    <i className="bi bi-shield-lock"></i>
                                </span>
                                <input
                                    type="password"
                                    className="form-control form-control-dark border-start-0 ps-0"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-3 mb-4" disabled={isLoading}>
                            {isLoading ? <span className="spinner-border spinner-border-sm me-2"></span> : 'Sign In'}
                        </button>
                    </form>

                    <div className="text-center">
                        <Link to="/admin-signup" className="text-muted small text-decoration-none">
                            Don't have an account? <span className="text-primary">Sign up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
