require('dotenv').config();
const express = require('express');
const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;

//connection database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hoidanit',
  port: 3307,
  password: '123456',
});

connection.query('select * from Users u', function (err, result, fields) {
  console.log('result: ', result);
});

//Config template engine
configViewEngine(app);

//Config routing
app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
