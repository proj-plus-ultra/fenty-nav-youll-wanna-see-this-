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
  }

};

module.exports = dbHelpers;