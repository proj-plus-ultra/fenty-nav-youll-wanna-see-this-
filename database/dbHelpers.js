const db = require('./index.js');

const dbHelpers = {
  getProducts: (callback) =>{
    let query = 'SELECT * FROM products';
    db.query(query, (err, results) =>{
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  searchProducts: (req, callback) =>{
    console.log('Search from backend:', req.body);
    let query = `SELECT * FROM products WHERE name LIKE '%${req.body.search}%'`;
    db.query(query, (err, results) =>{
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }

};

module.exports = dbHelpers;