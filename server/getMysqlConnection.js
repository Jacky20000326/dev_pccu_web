const mysql = require("mysql")

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0326password',
    database: 'pccudev'
});

module.exports = connection