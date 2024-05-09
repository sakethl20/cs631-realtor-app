// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './loginform.js';
import './index.css'; // Import CSS file for styling

function LoginPage() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <LoginForm />
            <p className="register-link">Don't have an account? <Link to="/registrationpage">Register here</Link>.</p>
        </div>
    );
}

export default LoginPage;


