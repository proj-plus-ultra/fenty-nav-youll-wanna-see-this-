const mysql = require('mysql');

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password: '',
  database: 'fenty'

})

db.connect((err)=>{
  if (err) {
    console.log('Error connecting to Database');
  }

  db.query('USE fenty');


  console.log('Connected to database fenty successfully');
})

module.exports = db;