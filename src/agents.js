import React from 'react';
import { Link } from 'react-router-dom';

function Agents() {
    //mock data if database failure
    const agentData = [
        {
            email: 'abrinicomber@issuu.com',
            company_id: 59,
            first_name: 'Ardenia',
            last_name: 'Brinicombe',
            phone_num: '2764511112',
            address: '56944 Loeprich Circle',
            pass: "pV8dj'B|F"
        },
        {
            email: 'adrew10@gravatar.com',
            company_id: 40,
            first_name: 'Adamo',
            last_name: 'Drew',
            phone_num: '3348010601',
            address: '98954 Hazelcrest Hill',
            pass: "bQ1_o2$uDP"
        },
        {
            email: 'amaciejakm@w3.org',
            company_id: 83,
            first_name: 'Audy',
            last_name: 'Maciejak',
            phone_num: '7383359632',
            address: '7 Schmedeman Plaza',
            pass: "gS5*7"
        },
        {
            email: 'bjoddinsa@woothemes.com',
            company_id: 73,
            first_name: 'Burt',
            last_name: 'Joddins',
            phone_num: '7929723145',
            address: '19 Fair Oaks Trail',
            pass: "cT3%}Z2"
        },
        {
            email: 'cdibb13@bing.com',
            company_id: 52,
            first_name: 'Charita',
            last_name: 'Dibb',
            phone_num: '7259991249',
            address: '52 4th Avenue',
            pass: "dE0@Oa"
        },
        {
            email: 'cgorste@icio.us',
            company_id: 16,
            first_name: 'Cornell',
            last_name: 'Gorst',
            phone_num: '3331580507',
            address: '16 Stoughton Parkway',
            pass: "cM3@T!cV@N"
        },
        {
            email: 'cjanceyz@sogou.com',
            company_id: 41,
            first_name: 'Claudetta',
            last_name: 'Jancey',
            phone_num: '9093525608',
            address: '5636 Schiller Pass',
            pass: "lD9&4z"
        },
        {
            email: 'ckingzett14@tinypic.com',
            company_id: 1,
            first_name: 'Carilyn',
            last_name: 'Kingzett',
            phone_num: '7432765092',
            address: '5349 Sycamore Lane',
            pass: "mV6!9d/p"
        },
        {
            email: 'cwaldera12@chronoengine.com',
            company_id: 75,
            first_name: 'Carmina',
            last_name: 'Waldera',
            phone_num: '8677001016',
            address: '8516 Northridge Junction',
            pass: "dH5?!"
        },
        {
            email: 'dgoodereb@nifty.com',
            company_id: 4,
            first_name: 'Drusy',
            last_name: 'Goodere',
            phone_num: '2542228286',
            address: '36 Jenifer Avenue',
            pass: "mH7%Wj6vh"
        },
        {
            email: 'dlawful9@bbc.co.uk',
            company_id: 61,
            first_name: 'Decca',
            last_name: 'Lawful',
            phone_num: '4657022764',
            address: '3 Stuart Trail',
            pass: "eU7+>"
        },
        {
            email: 'dnorcocky@sourceforge.net',
            company_id: 83,
            first_name: 'Dianemarie',
            last_name: 'Norcock',
            phone_num: '9154644412',
            address: '4 Ohio Lane',
            pass: "wR2$`ALFQ"
        },
        {
            email: 'dvondrasek1d@sphinn.com',
            company_id: 87,
            first_name: 'Darlleen',
            last_name: 'Vondrasek',
            phone_num: '6622265456',
            address: '6 Sloan Junction',
            pass: "aM0>3mS"
        },
        {
            email: 'fnewsonk@surveymonkey.com',
            company_id: 84,
            first_name: 'Florrie',
            last_name: 'Newson',
            phone_num: '1442266125',
            address: '893 Warbler Hill',
            pass: "lJ0+sA|s"
        },
        {
            email: 'hgoodredg@freewebs.com',
            company_id: 97,
            first_name: 'Harbert',
            last_name: 'Goodred',
            phone_num: '5272602518',
            address: '91962 Hollow Ridge Street',
            pass: "hD8=`Z"
        },
        {
            email: 'hmillerj@vk.com',
            company_id: 44,
            first_name: 'Hamel',
            last_name: 'Miller',
            phone_num: '8308447296',
            address: '36317 Fordem Court',
            pass: "aF4@ZZ~8"
        },
        {
            email: 'hohogertieo@adobe.com',
            company_id: 74,
            first_name: 'Hansiain',
            last_name: 'O\'Hogertie',
            phone_num: '3995976922',
            address: '90940 Gina Center',
            pass: "yQ8,`H1bsa"
        },
        {
            email: 'hverrilloc@csmonitor.com',
            company_id: 92,
            first_name: 'Hirsch',
            last_name: 'Verrillo',
            phone_num: '2475439059',
            address: '394 Pawling Drive',
            pass: "zM3~tuv"
        },
        {
            email: 'idessaur4@psu.edu',
            company_id: 15,
            first_name: 'Ignazio',
            last_name: 'Dessaur',
            phone_num: '2287948052',
            address: '2 Northridge Alley',
            pass: "vW0*Qne"
        },
        {
            email: 'ijacmardl@yolasite.com',
            company_id: 90,
            first_name: 'Issie',
            last_name: 'Jacmard',
            phone_num: '9911999957',
            address: '7 Golf Course Place',
            pass: "zP6,MES3&V"
        },
        {
            email: 'isprasen15@sciencedaily.com',
            company_id: 23,
            first_name: 'Ingram',
            last_name: 'Sprasen',
            phone_num: '7848708518',
            address: '45 Longview Road',
            pass: "oY8,F!rrvu"
        },
        {
            email: 'jkinniei@deviantart.com',
            company_id: 40,
            first_name: 'Janina',
            last_name: 'Kinnie',
            phone_num: '9705409090',
            address: '5 Brown Crossing',
            pass: "eX1.o!"
        },
        {
            email: 'jvedntyev17@buzzfeed.com',
            company_id: 18,
            first_name: 'Julie',
            last_name: 'Vedntyev',
            phone_num: '1128367964',
            address: '6 Acker Parkway',
            pass: "cP5|R#_EE"
        },
        {
            email: 'kaldus0@earthlink.net',
            company_id: 13,
            first_name: 'Kimmy',
            last_name: 'Aldus',
            phone_num: '8988301222',
            address: '66925 Anderson Terrace',
            pass: "wU7&D80B_"
        },
        {
            email: 'kcarmichaelw@deliciousdays.com',
            company_id: 10,
            first_name: 'Katha',
            last_name: 'Carmichael',
            phone_num: '1561003498',
            address: '20152 Manufacturers Center',
            pass: "xA4.o_Q6*2"
        },
        {
            email: 'kraine5@wufoo.com',
            company_id: 88,
            first_name: 'Karlene',
            last_name: 'Raine',
            phone_num: '2318084935',
            address: '34884 Lotheville Place',
            pass: "iR7)'"
        },
        {
            email: 'kvonhindenburg11@apple.com',
            company_id: 94,
            first_name: 'Kerby',
            last_name: 'Von Hindenburg',
            phone_num: '4896392626',
            address: '6 Express Place',
            pass: "yP0.Jp"
        },
        {
            email: 'lbrockie7@indiatimes.com',
            company_id: 5,
            first_name: 'Lionello',
            last_name: 'Brockie',
            phone_num: '4791800350',
            address: '13 Merchant Terrace',
            pass: "jG3=|`"
        },
        {
            email: 'ldequesnep@unicef.org',
            company_id: 63,
            first_name: 'Libby',
            last_name: 'de Quesne',
            phone_num: '7476769455',
            address: '107 Brentwood Place',
            pass: "kB3=(Vv2"
        },
        {
            email: 'lmangerf@ca.gov',
            company_id: 95,
            first_name: 'Lilllie',
            last_name: 'Manger',
            phone_num: '7666538745',
            address: '54 Harper Street',
            pass: "vP3"
        },
        {
            email: 'loluby1@nydailynews.com',
            company_id: 72,
            first_name: 'Lexine',
            last_name: 'O\'Luby',
            phone_num: '7053310542',
            address: '5 Birchwood Circle',
            pass: "rR9~n"
        },
        {
            email: 'mbere19@berkeley.edu',
            company_id: 97,
            first_name: 'Mallory',
            last_name: 'Bere',
            phone_num: '3296045609',
            address: '53998 Golf Course Hill',
            pass: "fX5@W8"
        },
        {
            email: 'mkonzelmannd@bloglines.com',
            company_id: 4,
            first_name: 'Myrtie',
            last_name: 'Konzelmann',
            phone_num: '5367830138',
            address: '14 Pawling Center',
            pass: "mT6/xDN0uh"
        },
        {
            email: 'mrunacres18@google.com',
            company_id: 48,
            first_name: 'Mara',
            last_name: 'Runacres',
            phone_num: '2953567135',
            address: '178 Twin Pines Place',
            pass: "fE7"
        },
        {
            email: 'mrushton8@prlog.org',
            company_id: 54,
            first_name: 'Mata',
            last_name: 'Rushton',
            phone_num: '3091901683',
            address: '9504 Miller Park',
            pass: "bR8\"|."
        },
        {
            email: 'msenter2@washington.edu',
            company_id: 24,
            first_name: 'Margo',
            last_name: 'Senter',
            phone_num: '4669911892',
            address: '71197 New Castle Pass',
            pass: "dB3<,%pyT`"
        },
        {
            email: 'pchritchlow1a@pcworld.com',
            company_id: 12,
            first_name: 'Putnem',
            last_name: 'Chritchlow',
            phone_num: '3032862564',
            address: '2552 Ridgeway Circle',
            pass: "wF41KD"
        },
        {
            email: 'pdanks16@hc360.com',
            company_id: 27,
            first_name: 'Portia',
            last_name: 'Danks',
            phone_num: '5375849887',
            address: '44708 Ruskin Circle',
            pass: "yA6#sly>"
        },
        {
            email: 'rbeatsonq@wikispaces.com',
            company_id: 55,
            first_name: 'Rosabelle',
            last_name: 'Beatson',
            phone_num: '4238254500',
            address: '92552 Veith Point',
            pass: "dO5+o+xx$"
        },
    ];

    return (
        <div>
            <h1>Current Agents Available</h1>
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
                        <th>Company ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {agentData.map((agent, index) => (
                        <tr key={index}>
                            <td>{agent.email}</td>
                            <td>{agent.company_id}</td>
                            <td>{agent.first_name}</td>
                            <td>{agent.last_name}</td>
                            <td>{agent.phone_num}</td>
                            <td>{agent.address}</td>
                            <td>{agent.pass}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Agents;
