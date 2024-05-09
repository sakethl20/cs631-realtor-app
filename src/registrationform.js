import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase.js";
import './index.css';

function RegistrationForm() {
    const auth = getAuth(app);
    const [setEmail] = useState('');
    const [setPassword] = useState('');
    const [role, setRole] = useState('buyer'); // Default role is 'buyer'
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Get navigate function from React Router

    return (
        <div className="registration-form">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="registration-input"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="registration-input"
            />
            <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="registration-input"
            >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="agent">Agent</option>
            </select>
        </div>
    );
}


export default RegistrationForm;

