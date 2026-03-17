import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const AdminSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { signUp } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        setSuccessMsg('');

        if (password !== confirmPassword) {
            setErrorMsg("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setErrorMsg("Password must be at least 6 characters long.");
            return;
        }

        setIsLoading(true);
        const { error } = await signUp(email, password);

        if (error) {
            setErrorMsg(error.message);
        } else {
            setSuccessMsg("Account created! Please note authentication is currently disabled.");
        }
        setIsLoading(false);
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-dark">
            <div className="container" style={{ maxWidth: '450px' }}>
                <Link to="/admin" className="text-secondary text-decoration-none mb-4 d-inline-block">
                    <i className="bi bi-arrow-left me-2"></i> Back to Login
                </Link>

                <div className="card-glass p-5 border-0">
                    <div className="text-center mb-5">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '64px', height: '64px' }}>
                            <i className="bi bi-user-plus text-primary fs-2"></i>
                        </div>
                        <h2 className="fw-bold h4">Admin Signup</h2>
                        <p className="text-muted small">Create your admin account</p>
                    </div>

                    {errorMsg && (
                        <div className="alert alert-danger small py-2 d-flex align-items-center mb-4">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                            {errorMsg}
                        </div>
                    )}

                    {successMsg && (
                        <div className="alert alert-success small py-2 d-flex align-items-center mb-4">
                            <i className="bi bi-check-circle-fill me-2"></i>
                            {successMsg}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label small text-muted">Email Address</label>
                            <input
                                type="email"
                                className="form-control form-control-dark"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small text-muted">Password</label>
                            <input
                                type="password"
                                className="form-control form-control-dark"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label small text-muted">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control form-control-dark"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-3 mt-2" disabled={isLoading}>
                            {isLoading ? <span className="spinner-border spinner-border-sm me-2"></span> : 'Create Account'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminSignup;
