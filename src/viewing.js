import React from 'react';
import { Link } from 'react-router-dom';

function Viewing() {
    //mock data if database failure
    const viewings = [
        { unit_id: 5, list_date: new Date('Sun Aug 20 2023 01:36:17 GMT-0400 (Eastern Daylight Time)'), time: new Date('Tue Mar 12 2024 06:39:44 GMT-0400 (Eastern Daylight Time)') },
        { unit_id: 10, list_date: new Date('Mon Sep 05 2023 10:45:00 GMT-0400 (Eastern Daylight Time)'), time: new Date('Wed Mar 20 2024 13:30:00 GMT-0400 (Eastern Daylight Time)') },
        { unit_id: 15, list_date: new Date('Thu Oct 12 2023 09:15:00 GMT-0400 (Eastern Daylight Time)'), time: new Date('Fri Apr 05 2024 10:00:00 GMT-0400 (Eastern Daylight Time)') },
        { unit_id: 20, list_date: new Date('Sat Nov 25 2023 11:30:00 GMT-0400 (Eastern Daylight Time)'), time: new Date('Mon Apr 15 2024 15:45:00 GMT-0400 (Eastern Daylight Time)') },
        { unit_id: 25, list_date: new Date('Tue Dec 19 2023 08:00:00 GMT-0400 (Eastern Daylight Time)'), time: new Date('Thu Apr 25 2024 11:15:00 GMT-0400 (Eastern Daylight Time)') },
        { unit_id: 30, list_date: new Date('Wed Jan 10 2024 14:20:00 GMT-0400 (Eastern Daylight Time)'), time: new Date('Fri May 03 2024 09:30:00 GMT-0400 (Eastern Daylight Time)') },
        { unit_id: 35, list_date: new Date('Sat Feb 15 2024 12:00:00 GMT-0400 (Eastern Daylight Time)'), time: new Date('Mon May 13 2024 14:00:00 GMT-0400 (Eastern Daylight Time)') }

    ];

    return (
        <div>
            <h1>Current Viewings Booked</h1>
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
                        <th>Unit ID</th>
                        <th>List Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {viewings.map((viewing, index) => (
                        <tr key={index}>
                            <td>{viewing.unit_id}</td>
                            <td>{viewing.list_date.toString()}</td>
                            <td>{viewing.time.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Viewing;
