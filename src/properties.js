import React from 'react';
import { Link } from 'react-router-dom';

function Properties() {
    //mock data if database failure
    const properties = [
        { unit_id: 3, list_date: "Thu May 18 2023 14:27:49 GMT-0400 (Eastern Daylight Time)", agent_email: "kaldus0@earthlink.net", user_email: "afedorowicz19@pagesperso-orange.fr", price: 15636, end_date: "Thu Dec 21 2023 02:04:58 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 4, list_date: "Sat May 20 2023 05:47:21 GMT-0400 (Eastern Daylight Time)", agent_email: "hverrilloc@csmonitor.com", user_email: "rcoppledike6@ed.gov", price: 85617, end_date: "Thu Apr 27 2023 18:41:15 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 5, list_date: "Sun May 21 2023 09:59:34 GMT-0400 (Eastern Daylight Time)", agent_email: "fnewsonk@surveymonkey.com", user_email: "asipson5@ocn.ne.jp", price: 55326, end_date: "Sat May 20 2023 05:47:21 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 6, list_date: "Tue May 23 2023 17:12:12 GMT-0400 (Eastern Daylight Time)", agent_email: "hverrilloc@csmonitor.com", user_email: "cwinterbourne3@stumbleupon.com", price: 65327, end_date: "Fri Dec 01 2023 23:09:45 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 7, list_date: "Thu May 25 2023 22:33:58 GMT-0400 (Eastern Daylight Time)", agent_email: "cwaldera12@chronoengine.com", user_email: "slanden13@prweb.com", price: 57842, end_date: "Mon Jun 19 2023 07:56:16 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 8, list_date: "Sun May 28 2023 01:45:41 GMT-0400 (Eastern Daylight Time)", agent_email: "jvedntyev17@buzzfeed.com", user_email: "qronchka1@mozilla.com", price: 29631, end_date: "Sun May 28 2023 01:45:41 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 9, list_date: "Tue May 30 2023 08:57:25 GMT-0400 (Eastern Daylight Time)", agent_email: "lbrockie7@indiatimes.com", user_email: "rphlipps1d@weather.com", price: 84365, end_date: "Mon May 29 2023 15:03:54 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 10, list_date: "Thu Jun 01 2023 12:09:38 GMT-0400 (Eastern Daylight Time)", agent_email: "kvonhindenburg11@apple.com", user_email: "dritchke6@over-blog.com", price: 24613, end_date: "Wed Oct 04 2023 22:47:53 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 11, list_date: "Sat Jun 03 2023 16:21:21 GMT-0400 (Eastern Daylight Time)", agent_email: "rbeatsonq@wikispaces.com", user_email: "mrobarge9@seesaa.net", price: 54927, end_date: "Tue May 09 2023 04:57:56 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 12, list_date: "Mon Jun 05 2023 20:33:04 GMT-0400 (Eastern Daylight Time)", agent_email: "aheers1k@wikimedia.org", user_email: "mgrealish5@imdb.com", price: 35812, end_date: "Tue Mar 20 2024 14:45:38 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 13, list_date: "Wed Jun 07 2023 00:44:47 GMT-0400 (Eastern Daylight Time)", agent_email: "tfrickeu@blogspot.com", user_email: "adean1g@answers.com", price: 46895, end_date: "Sat Dec 31 2022 07:18:25 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 14, list_date: "Fri Jun 09 2023 04:56:30 GMT-0400 (Eastern Daylight Time)", agent_email: "dgoodereb@nifty.com", user_email: "mbowman1b@paypal.com", price: 74256, end_date: "Fri Dec 15 2023 05:39:09 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 15, list_date: "Sun Jun 11 2023 09:08:14 GMT-0400 (Eastern Daylight Time)", agent_email: "kvonhindenburg11@apple.com", user_email: "amclaugher9@blinklist.com", price: 62439, end_date: "Thu Jul 13 2023 00:18:23 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 16, list_date: "Tue Jun 13 2023 13:19:57 GMT-0400 (Eastern Daylight Time)", agent_email: "thazeldinex@webnode.com", user_email: "gknape9@auda.org.au", price: 23957, end_date: "Fri Feb 16 2024 21:52:08 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 17, list_date: "Thu Jun 15 2023 17:31:40 GMT-0400 (Eastern Daylight Time)", agent_email: "vbeamish1c@photobucket.com", user_email: "wmundford1e@examiner.com", price: 45723, end_date: "Sun May 07 2023 20:26:24 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 18, list_date: "Sat Jun 17 2023 21:43:23 GMT-0400 (Eastern Daylight Time)", agent_email: "waimerict@indiegogo.com", user_email: "egaylard3@boston.com", price: 64983, end_date: "Sat Nov 12 2022 08:37:57 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 19, list_date: "Mon Jun 19 2023 01:55:07 GMT-0400 (Eastern Daylight Time)", agent_email: "fnewsonk@surveymonkey.com", user_email: "gtybalt6@prweb.com", price: 52478, end_date: "Fri Mar 08 2024 10:09:54 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 20, list_date: "Wed Jun 21 2023 06:06:50 GMT-0400 (Eastern Daylight Time)", agent_email: "thultbergh@princeton.edu", user_email: "cmcpheat11@baidu.com", price: 86324, end_date: "Tue Jan 03 2023 06:24:50 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 21, list_date: "Fri Jun 23 2023 10:18:34 GMT-0400 (Eastern Daylight Time)", agent_email: "loluby1@nydailynews.com", user_email: "rdadson18@hao123.com", price: 37895, end_date: "Fri Nov 04 2022 12:30:28 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 22, list_date: "Sun Jun 25 2023 14:30:17 GMT-0400 (Eastern Daylight Time)", agent_email: "mbere19@berkeley.edu", user_email: "bcloney19@odnoklassniki.ru", price: 53692, end_date: "Thu Jun 29 2023 01:11:07 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 23, list_date: "Tue Jun 27 2023 18:42:01 GMT-0400 (Eastern Daylight Time)", agent_email: "hgoodredg@freewebs.com", user_email: "ahartil18@nsw.gov.au", price: 48573, end_date: "Thu Jan 12 2023 21:57:57 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 24, list_date: "Thu Jun 29 2023 22:53:44 GMT-0400 (Eastern Daylight Time)", agent_email: "tfrickeu@blogspot.com", user_email: "wdrogan8@51.la", price: 72638, end_date: "Sun Jan 08 2023 09:02:31 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 25, list_date: "Sun Jul 02 2023 03:05:28 GMT-0400 (Eastern Daylight Time)", agent_email: "isprasen15@sciencedaily.com", user_email: "fbishell8@blog.com", price: 58326, end_date: "Thu Dec 28 2023 09:35:25 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 26, list_date: "Tue Jul 04 2023 07:17:11 GMT-0400 (Eastern Daylight Time)", agent_email: "dgoodereb@nifty.com", user_email: "vperretta0@indiegogo.com", price: 94627, end_date: "Thu Feb 23 2023 07:01:14 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 27, list_date: "Thu Jul 06 2023 11:28:55 GMT-0400 (Eastern Daylight Time)", agent_email: "pdanks16@hc360.com", user_email: "ndik0@toplist.cz", price: 74639, end_date: "Thu Jan 26 2023 10:14:56 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 28, list_date: "Sat Jul 08 2023 15:40:38 GMT-0400 (Eastern Daylight Time)", agent_email: "loluby1@nydailynews.com", user_email: "tkindley14@ucla.edu", price: 29584, end_date: "Fri Apr 07 2023 18:18:54 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 29, list_date: "Mon Jul 10 2023 19:52:22 GMT-0400 (Eastern Daylight Time)", agent_email: "dvondrasek1d@sphinn.com", user_email: "nscholtis14@uol.com.br", price: 39475, end_date: "Wed Nov 30 2022 17:55:24 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 30, list_date: "Wed Jul 12 2023 00:04:05 GMT-0400 (Eastern Daylight Time)", agent_email: "dlawful9@bbc.co.uk", user_email: "kmuir3@flavors.me", price: 83426, end_date: "Sat Apr 29 2023 10:48:18 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 31, list_date: "Fri Jul 14 2023 04:15:49 GMT-0400 (Eastern Daylight Time)", agent_email: "kraine5@wufoo.com", user_email: "egregol2c@state.gov", price: 58642, end_date: "Mon May 01 2023 05:12:23 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 32, list_date: "Sun Jul 16 2023 08:27:32 GMT-0400 (Eastern Daylight Time)", agent_email: "cwaldera12@chronoengine.com", user_email: "kcannam1d@tumblr.com", price: 94836, end_date: "Sun Jan 15 2023 05:45:22 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 33, list_date: "Tue Jul 18 2023 12:39:16 GMT-0400 (Eastern Daylight Time)", agent_email: "hgoodredg@freewebs.com", user_email: "craymen12@live.com", price: 72639, end_date: "Thu Mar 02 2023 09:06:41 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 34, list_date: "Thu Jul 20 2023 16:51:00 GMT-0400 (Eastern Daylight Time)", agent_email: "fnewsonk@surveymonkey.com", user_email: "hcruttenden13@seattletimes.com", price: 86342, end_date: "Tue Jan 31 2023 02:56:47 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 35, list_date: "Sat Jul 22 2023 21:02:43 GMT-0400 (Eastern Daylight Time)", agent_email: "dgoodereb@nifty.com", user_email: "opipping3@newyorker.com", price: 53672, end_date: "Wed Oct 11 2023 07:55:49 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 36, list_date: "Tue Jul 25 2023 01:14:27 GMT-0400 (Eastern Daylight Time)", agent_email: "kcarmichaelw@deliciousdays.com", user_email: "pjeffry0@walmart.com", price: 42953, end_date: "Sun Jan 01 2023 19:19:39 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 37, list_date: "Thu Jul 27 2023 05:26:10 GMT-0400 (Eastern Daylight Time)", agent_email: "mbere19@berkeley.edu", user_email: "jkeatley1d@networkadvertising.org", price: 69385, end_date: "Fri Jun 16 2023 05:03:47 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 38, list_date: "Sat Jul 29 2023 09:37:54 GMT-0400 (Eastern Daylight Time)", agent_email: "kaldus0@earthlink.net", user_email: "sknuckles11@skyrock.com", price: 59426, end_date: "Sun Feb 05 2023 17:18:32 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 39, list_date: "Mon Jul 31 2023 13:49:37 GMT-0400 (Eastern Daylight Time)", agent_email: "rbeatsonq@wikispaces.com", user_email: "kturner1b@state.gov", price: 42658, end_date: "Tue Jun 13 2023 05:54:18 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 40, list_date: "Wed Aug 02 2023 18:01:21 GMT-0400 (Eastern Daylight Time)", agent_email: "kaldus0@earthlink.net", user_email: "fchristauffour7@cocolog-nifty.com", price: 84726, end_date: "Tue Aug 08 2023 20:03:11 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 41, list_date: "Fri Aug 04 2023 22:13:05 GMT-0400 (Eastern Daylight Time)", agent_email: "bjoddinsa@woothemes.com", user_email: "ysambals8@theguardian.com", price: 93562, end_date: "Thu Dec 14 2023 04:35:56 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 42, list_date: "Mon Aug 07 2023 02:24:49 GMT-0400 (Eastern Daylight Time)", agent_email: "kcarmichaelw@deliciousdays.com", user_email: "tharesign17@wiley.com", price: 58236, end_date: "Mon Apr 24 2023 02:02:12 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 43, list_date: "Wed Aug 09 2023 06:36:32 GMT-0400 (Eastern Daylight Time)", agent_email: "pdanks16@hc360.com", user_email: "aberriman8@unicef.org", price: 74825, end_date: "Thu Nov 09 2023 09:44:21 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 44, list_date: "Fri Aug 11 2023 10:48:16 GMT-0400 (Eastern Daylight Time)", agent_email: "mkonzelmannd@bloglines.com", user_email: "wcorri0@tumblr.com", price: 42683, end_date: "Fri Oct 21 2022 17:38:15 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 45, list_date: "Sun Aug 13 2023 15:00:00 GMT-0400 (Eastern Daylight Time)", agent_email: "idessaur4@psu.edu", user_email: "sduhnke1h@livejournal.com", price: 59382, end_date: "Thu Jun 08 2023 06:49:05 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 46, list_date: "Tue Aug 15 2023 19:11:44 GMT-0400 (Eastern Daylight Time)", agent_email: "bjoddinsa@woothemes.com", user_email: "lsteuhlmeyer0@ask.com", price: 48639, end_date: "Wed Mar 15 2023 02:27:56 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 47, list_date: "Thu Aug 17 2023 23:23:27 GMT-0400 (Eastern Daylight Time)", agent_email: "loluby1@nydailynews.com", user_email: "cbransgrove1i@dyndns.org", price: 84693, end_date: "Sat May 25 2024 23:29:33 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 48, list_date: "Sat Aug 19 2023 03:35:11 GMT-0400 (Eastern Daylight Time)", agent_email: "mrushton8@prlog.org", user_email: "mmaccrie14@alexa.com", price: 72638, end_date: "Thu Mar 29 2023 22:51:38 GMT-0400 (Eastern Daylight Time)" },
        { unit_id: 49, list_date: "Mon Aug 21 2023 07:46:55 GMT-0400 (Eastern Daylight Time)", agent_email: "mrunacres18@google.com", user_email: "ayair8@infoseek.co.jp", price: 59382, end_date: "Tue Nov 29 2022 09:15:45 GMT-0500 (Eastern Standard Time)" },
        { unit_id: 50, list_date: "Wed Aug 23 2023 11:58:39 GMT-0400 (Eastern Daylight Time)", agent_email: "hgoodredg@freewebs.com", user_email: "ksnedker8@tmall.com", price: 48672, end_date: "Tue Jul 25 2023 01:10:09 GMT-0400 (Eastern Daylight Time)" }
    ];

    return (
        <div>
            <h1>Current Listings</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/homepage">Go Back Home</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <nav>
                    <ul>
                        <li>
                            <li className="new-listing"><Link to="/homepage">Add Your Home!</Link></li>
                        </li>
                    </ul>
                </nav>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Unit ID</th>
                        <th>List Date</th>
                        <th>Agent Email</th>
                        <th>User Email</th>
                        <th>Price</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property, index) => (
                        <tr key={index}>
                            <td>{property.unit_id}</td>
                            <td>{property.list_date}</td>
                            <td>{property.agent_email}</td>
                            <td>{property.user_email}</td>
                            <td>{property.price}</td>
                            <td>{property.end_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Properties;
