// App.js

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './homepage.js';
import Clients from './clients.js';
import Offers from './offers.js';
import Account from './account.js';
import Viewing from './viewing.js';
import Properties from './properties.js';
import Agents from './agents.js';
import RegistrationForm from './registrationform.js';
import LoginForm from './loginform.js';
import LoginPage from './loginpage.js';
import RegistrationPage from './registrationpage.js';
import useAuth from './auth.js'; // Import the custom auth hook

function App() {
  const { user } = useAuth(); // Get user information from the custom auth hook

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/account" element={<Account />} />
        <Route path="/viewing" element={<Viewing />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/agents" element={<Agents />} />

        Private Routes (Require Authentication)
        {user ? (
          <>
            {/* <Route path="/clients" element={<Clients />} /> */}
            {/* <Route path="/offers" element={<Offers />} /> */}
            <Route path="/account" element={<Account />} />
            {/* <Route path="/viewing" element={<Viewing />} /> */}
            {/* <Route path="/properties" element={<Properties />} /> */}
            {/* <Route path="/agents" element={<Agents />} /> */}
          </>
        ) : (
          // Redirect to login page if user is not authenticated
          <Route path="*" element={<Navigate to="/loginpage" replace />} />
        )}

        {/* Authentication Routes */}
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

