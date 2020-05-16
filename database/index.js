const mysql = require('mysql');

//https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConnectToInstance.html

const db = mysql.createConnection({
  host: 'db.cjd9cquxgjfw.us-west-2.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: '12345678',
  database: 'fenty_nav_videos'
});

db.connect((err)=>{
  if (err) {
    console.log('Error connecting to Database:', err.sqlMessage);
  }

  db.query('USE fenty_nav_videos');

  console.log('Connected to database fenty_nav_videos successfully');
});


module.exports = db;