import React, { useState, useEffect } from 'react'; // Import React and useState
import { Link, useLocation } from 'react-router-dom';
import './index.css'; // Import CSS file for homepage styling

function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.role) {
            setRole(location.state.role);
        }
    }, [location]);

    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    };

    return (
        <div className="homepage-container">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">SLAD Realtors</Link>
                </div>
                <ul className="nav-links">
                    <li><Link to="/properties">Listings</Link></li>
                    {/* <li><Link to="/viewing">Viewing</Link></li> */}
                    <li><Link to="/agents">Agents</Link></li>
                    {/* <li><Link to="/clients">Clients</Link></li> */}
                    <li><Link to="/offers">Offers</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li className="login-link"><Link to="/loginpage">Logout</Link></li>
                </ul>
            </nav>
            <div className="welcome-message">
                <h1>Welcome to our Start-Up Website</h1>
                <p>Find your dream home today!</p>
            </div>
            <div className="image-container">
                <img src="https://cdn.corporatefinanceinstitute.com/assets/real-estate.jpeg" alt="Real Estate" />
            </div>
        </div>
    );
}

export default HomePage;

