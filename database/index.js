const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fenty_nav_videos'

});

db.connect((err)=>{
  if (err) {
    console.log('Error connecting to Database');
  }

  db.query('USE fenty_nav_videos');

  console.log('Connected to database fenty_nav_videos successfully');
});

module.exports = db;