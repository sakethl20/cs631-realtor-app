// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase authentication object
import { app } from "./firebase.js";
import './index.css'; // Import CSS file for styling

function LoginForm() {
    const auth = getAuth(app);
    const [setEmail] = useState('');
    const [setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Get navigate function from React Router

    const handleSignIn = async () => {

        const email = txtEmail.value;
        const password = txtpassword.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
            navigate('/homepage');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage); // Set error message state
            console.error('Error signing in:', error);
        }
    };


    return (
        <div className="login-form">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="login-input"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="login-input"
            />
            <button onClick={handleSignIn} className="login-button">Sign In</button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
}

export default LoginForm;


