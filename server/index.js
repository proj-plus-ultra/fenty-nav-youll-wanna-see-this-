const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('../database/index.js');
const dbHelpers = require('../database/dbHelpers.js');

const app = express();
const port = (3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

//END POINTS//
app.use('/products', (req, res) =>{
  dbHelpers.getProducts((err, results) =>{
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.use('/products/search', (req, res) =>{
  dbHelpers.searchProducts(req, (err, results) =>{
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(201).json(results);
    }
  });
});

//END POINTS//

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));