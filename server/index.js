const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const logger = require('log-timestamp');
const db = require('../database/index.js');
const dbHelpers = require('../database/dbHelpers.js');

const app = express();
const port = (4201);

const searchYt = require('./youtube.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(morgan(':date[clf] ":url"'));


//END POINTS//
app.use('/products', (req, res) =>{
  dbHelpers.getProducts((err, results) =>{
    if (err) {
      res.status(400).json(err);
    } else {
      res.set('Cache-Control', 'max-age=31536000');
      res.status(200).json(results);
    }
  });
});

app.use('/search', (req, res) =>{
  dbHelpers.searchProducts(req, (err, results) =>{
    if (err) {
      res.status(404).json(err);
    } else {
      res.set('Cache-Control', 'max-age=31536000');
      res.status(201).json(results);
    }
  });
});

app.use('/videos', (req, res) =>{
  let productToSearch = req.query.productName;
  console.log('Product Name:', productToSearch);

  searchYt(productToSearch, (results) =>{

    res.status(202).send(results);

  });

});

//END POINTS//

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));