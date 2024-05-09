import React from 'react';
import { Link } from 'react-router-dom';

function Offers() {
    //mock data if database failure
    const offers = [
        { user_email: 'dfeighney2r@uiuc.edu', unit_id: 100, list_date: new Date('Fri Apr 26 2024 16:47:44 GMT-0400 (Eastern Daylight Time)'), agent_email: 'ijacmardl@yolasite.com', offer_amount: 3469, fee_amount: 394, status: 'accepted' },
        { user_email: 'jcaws2n@goodreads.com', unit_id: 3, list_date: new Date('Thu Jun 22 2023 01:05:14 GMT-0400 (Eastern Daylight Time)'), agent_email: 'waimerict@indiegogo.com', offer_amount: 15281, fee_amount: 870, status: 'pending' },
        { user_email: 'sjiggins15@flavors.me', unit_id: 91, list_date: new Date('Sun Jan 28 2024 03:45:42 GMT-0500 (Eastern Standard Time)'), agent_email: 'cwaldera12@chronoengine.com', offer_amount: 36938, fee_amount: 408, status: 'rejected' },
        { user_email: 'user1@example.com', unit_id: 50, list_date: new Date('Thu May 30 2024 11:25:33 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent1@example.com', offer_amount: 5000, fee_amount: 250, status: 'pending' },
        { user_email: 'user2@example.com', unit_id: 75, list_date: new Date('Tue Jul 10 2023 09:45:21 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent2@example.com', offer_amount: 7500, fee_amount: 375, status: 'accepted' },
        { user_email: 'user3@example.com', unit_id: 32, list_date: new Date('Wed Sep 05 2023 14:20:10 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent3@example.com', offer_amount: 3200, fee_amount: 160, status: 'rejected' },
        { user_email: 'user4@example.com', unit_id: 15, list_date: new Date('Fri Nov 15 2024 08:30:45 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent4@example.com', offer_amount: 15000, fee_amount: 750, status: 'accepted' },
        { user_email: 'user5@example.com', unit_id: 42, list_date: new Date('Mon Feb 18 2024 10:10:05 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent5@example.com', offer_amount: 4200, fee_amount: 210, status: 'pending' },
        { user_email: 'user6@example.com', unit_id: 68, list_date: new Date('Sat Apr 06 2024 12:55:20 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent6@example.com', offer_amount: 6800, fee_amount: 340, status: 'rejected' },
        { user_email: 'user7@example.com', unit_id: 87, list_date: new Date('Tue Dec 12 2023 15:40:30 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent7@example.com', offer_amount: 8700, fee_amount: 435, status: 'pending' },
        { user_email: 'user8@example.com', unit_id: 23, list_date: new Date('Thu Aug 22 2024 09:20:15 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent8@example.com', offer_amount: 2300, fee_amount: 115, status: 'accepted' },
        { user_email: 'user9@example.com', unit_id: 57, list_date: new Date('Wed Oct 09 2024 13:15:00 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent9@example.com', offer_amount: 5700, fee_amount: 285, status: 'rejected' },
        { user_email: 'user10@example.com', unit_id: 81, list_date: new Date('Sat Mar 30 2024 16:00:40 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent10@example.com', offer_amount: 8100, fee_amount: 405, status: 'accepted' },
        { user_email: 'user11@example.com', unit_id: 38, list_date: new Date('Mon Jun 17 2024 11:55:55 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent11@example.com', offer_amount: 3800, fee_amount: 190, status: 'pending' },
        { user_email: 'user12@example.com', unit_id: 64, list_date: new Date('Sun Nov 26 2023 10:30:25 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent12@example.com', offer_amount: 6400, fee_amount: 320, status: 'rejected' },
        { user_email: 'user13@example.com', unit_id: 95, list_date: new Date('Fri Jan 05 2024 08:15:15 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent13@example.com', offer_amount: 9500, fee_amount: 475, status: 'accepted' },
        { user_email: 'user14@example.com', unit_id: 29, list_date: new Date('Tue Sep 19 2023 14:45:35 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent14@example.com', offer_amount: 2900, fee_amount: 145, status: 'pending' },
        { user_email: 'user15@example.com', unit_id: 50, list_date: new Date('Thu May 30 2024 11:25:33 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent15@example.com', offer_amount: 5000, fee_amount: 250, status: 'accepted' },
        { user_email: 'user16@example.com', unit_id: 75, list_date: new Date('Tue Jul 10 2023 09:45:21 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent16@example.com', offer_amount: 7500, fee_amount: 375, status: 'rejected' },
        { user_email: 'user17@example.com', unit_id: 32, list_date: new Date('Wed Sep 05 2023 14:20:10 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent17@example.com', offer_amount: 3200, fee_amount: 160, status: 'pending' },
        { user_email: 'user18@example.com', unit_id: 15, list_date: new Date('Fri Nov 15 2024 08:30:45 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent18@example.com', offer_amount: 15000, fee_amount: 750, status: 'accepted' },
        { user_email: 'user19@example.com', unit_id: 42, list_date: new Date('Mon Feb 18 2024 10:10:05 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent19@example.com', offer_amount: 4200, fee_amount: 210, status: 'pending' },
        { user_email: 'user20@example.com', unit_id: 68, list_date: new Date('Sat Apr 06 2024 12:55:20 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent20@example.com', offer_amount: 6800, fee_amount: 340, status: 'rejected' },
        { user_email: 'user21@example.com', unit_id: 87, list_date: new Date('Tue Dec 12 2023 15:40:30 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent21@example.com', offer_amount: 8700, fee_amount: 435, status: 'pending' },
        { user_email: 'user22@example.com', unit_id: 23, list_date: new Date('Thu Aug 22 2024 09:20:15 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent22@example.com', offer_amount: 2300, fee_amount: 115, status: 'accepted' },
        { user_email: 'user23@example.com', unit_id: 57, list_date: new Date('Wed Oct 09 2024 13:15:00 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent23@example.com', offer_amount: 5700, fee_amount: 285, status: 'rejected' },
        { user_email: 'user24@example.com', unit_id: 81, list_date: new Date('Sat Mar 30 2024 16:00:40 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent24@example.com', offer_amount: 8100, fee_amount: 405, status: 'accepted' },
        { user_email: 'user25@example.com', unit_id: 38, list_date: new Date('Mon Jun 17 2024 11:55:55 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent25@example.com', offer_amount: 3800, fee_amount: 190, status: 'pending' },
        { user_email: 'user26@example.com', unit_id: 64, list_date: new Date('Sun Nov 26 2023 10:30:25 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent26@example.com', offer_amount: 6400, fee_amount: 320, status: 'rejected' },
        { user_email: 'user27@example.com', unit_id: 95, list_date: new Date('Fri Jan 05 2024 08:15:15 GMT-0500 (Eastern Standard Time)'), agent_email: 'agent27@example.com', offer_amount: 9500, fee_amount: 475, status: 'accepted' },
        { user_email: 'user28@example.com', unit_id: 29, list_date: new Date('Tue Sep 19 2023 14:45:35 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent28@example.com', offer_amount: 2900, fee_amount: 145, status: 'pending' },
        { user_email: 'user29@example.com', unit_id: 50, list_date: new Date('Thu May 30 2024 11:25:33 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent29@example.com', offer_amount: 5000, fee_amount: 250, status: 'accepted' },
        { user_email: 'user30@example.com', unit_id: 75, list_date: new Date('Tue Jul 10 2023 09:45:21 GMT-0400 (Eastern Daylight Time)'), agent_email: 'agent30@example.com', offer_amount: 7500, fee_amount: 375, status: 'rejected' }
    ];

    return (
        <div>
            <h1>Current Offers Given</h1>
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
                        <th>User Email</th>
                        <th>Unit ID</th>
                        <th>List Date</th>
                        <th>Agent Email</th>
                        <th>Offer Amount</th>
                        <th>Fee Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {offers.map((offer, index) => (
                        <tr key={index}>
                            <td>{offer.user_email}</td>
                            <td>{offer.unit_id}</td>
                            <td>{offer.list_date.toString()}</td>
                            <td>{offer.agent_email}</td>
                            <td>{offer.offer_amount}</td>
                            <td>{offer.fee_amount}</td>
                            <td>{offer.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Offers;
