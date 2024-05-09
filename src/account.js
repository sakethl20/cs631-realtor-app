import React from 'react';
import { Link } from 'react-router-dom';

function Account() {
    return (
        <div>
            <h1>Welcome to My Website</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/account.js">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Account;