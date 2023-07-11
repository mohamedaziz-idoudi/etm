import mysql from 'mysql2';



export default function handler(req, res) {
    const connection = mysql.createPool({
        host: 'sql925.main-hosting.eu',
        user: 'u951730070_fest_dev',
        password: 'Password123@',
        database: 'u951730070_festival_b',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 10
    });
    connection.query('SELECT * FROM blogs', (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching users' });
        } else {
            res.status(200).json(results);
        }
    });
}