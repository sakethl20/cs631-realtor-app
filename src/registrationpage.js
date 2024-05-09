// RegistrationPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import RegistrationForm from './registrationform.js';
import './index.css';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase.js";

const auth = getAuth(app);
const [setEmail] = useState('');
const [setPassword] = useState('');
const [role, setRole] = useState('buyer'); // Default role is 'buyer'
const [error, setError] = useState(null);
const navigate = useNavigate();

const handleSignUp = async () => {
    const email = txtEmail.value;
    const password = txtpassword.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
        navigate('/homepage');
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage); // Set error message state
        console.error('Error signing in:', error);
    }
};

const monitorAuthState = async () => {

    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user);
            showApp();
            showLoginState(user);

            hideLoginError();
        }
        else {
            showLoginForm();
        }

    })

}

function RegistrationPage() {
    return (
        <div className="registration-container">
            <h2 className="registration-header">Register</h2>
            <RegistrationForm />
            <button onClick={handleSignUp} className="registration-button">Sign Up</button>
            {error && <p className="error-message">{error}</p>}
            <p className="register-link">Already have an account? <Link to="/loginpage">Login here</Link>.</p>
        </div>
    );
}


export default RegistrationPage;
