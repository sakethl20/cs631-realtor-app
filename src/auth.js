// auth.js

import { useState, useEffect } from 'react';
import { auth } from './firebase.js'; // Import your Firebase authentication object

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        // Cleanup function
        return () => unsubscribe();
    }, []);

    return { user };
};

export default useAuth;
