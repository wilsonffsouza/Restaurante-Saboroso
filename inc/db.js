const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'restaurantesaboroso',
    password: 'password',
    multipleStatements: true
});

module.exports = connection;