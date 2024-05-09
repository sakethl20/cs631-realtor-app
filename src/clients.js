import React from 'react';
import { Link } from 'react-router-dom';

function Clients() {
    //mock data if database failure
    const clients = [
        { email: 'ablowing1t@slashdot.org', first_name: 'Ashleigh', last_name: 'Blowing', phone_num: '3172426771', address: '52 Jenifer Circle', budget: '5867' },
        { email: 'jdoe@example.com', first_name: 'John', last_name: 'Doe', phone_num: '1234567890', address: '123 Main St', budget: '5000' },
        { email: 'asmith@example.com', first_name: 'Alice', last_name: 'Smith', phone_num: '9876543210', address: '456 Elm St', budget: '7000' },
        { email: 'bbrown@example.com', first_name: 'Bob', last_name: 'Brown', phone_num: '2345678901', address: '789 Oak St', budget: '4500' },
        { email: 'ljohnson@example.com', first_name: 'Laura', last_name: 'Johnson', phone_num: '8901234567', address: '101 Pine St', budget: '8000' },
        { email: 'rwilliams@example.com', first_name: 'Robert', last_name: 'Williams', phone_num: '3456789012', address: '202 Cedar St', budget: '5500' },
        { email: 'esmith@example.com', first_name: 'Emily', last_name: 'Smith', phone_num: '9012345678', address: '303 Maple St', budget: '6000' },
        { email: 'mjones@example.com', first_name: 'Michael', last_name: 'Jones', phone_num: '4567890123', address: '404 Birch St', budget: '6500' },
        { email: 'msanchez@example.com', first_name: 'Maria', last_name: 'Sanchez', phone_num: '1238904567', address: '505 Walnut St', budget: '7500' },
        { email: 'gmartinez@example.com', first_name: 'Gabriel', last_name: 'Martinez', phone_num: '7890123456', address: '606 Sycamore St', budget: '4800' },
        { email: 'sjohnson@example.com', first_name: 'Sarah', last_name: 'Johnson', phone_num: '2345678901', address: '707 Cedar St', budget: '7000' },
        { email: 'jjackson@example.com', first_name: 'James', last_name: 'Jackson', phone_num: '8901234567', address: '808 Elm St', budget: '5200' },
        { email: 'pwilliams@example.com', first_name: 'Patricia', last_name: 'Williams', phone_num: '3456789012', address: '909 Pine St', budget: '7800' },
        { email: 'kthomas@example.com', first_name: 'Kevin', last_name: 'Thomas', phone_num: '9012345678', address: '1010 Oak St', budget: '6000' },
        { email: 'jjohnson@example.com', first_name: 'Jessica', last_name: 'Johnson', phone_num: '4567890123', address: '1111 Cedar St', budget: '6800' },
        { email: 'ajohnson@example.com', first_name: 'Andrew', last_name: 'Johnson', phone_num: '1238904567', address: '1212 Walnut St', budget: '5300' }
    ];

    return (
        <div>
            <h1>Active Clients</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/homepage">Go Back Home</Link>
                    </li>
                </ul>
            </nav>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <td>{client.email}</td>
                            <td>{client.first_name}</td>
                            <td>{client.last_name}</td>
                            <td>{client.phone_num}</td>
                            <td>{client.address}</td>
                            <td>{client.budget}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Clients;
