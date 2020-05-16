//change this to however you set up your database connection
const db = require('./index.js');

let foundation = [
  {

    "name": "MATTIFYING COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 35,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwa03d192d/hi-res/mattifying-foundation-essentials-sponge.jpg?sw=550"
  },
  {
    "name": "CUSTOM MATCH STIX TRIO",
    "price": 39,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb53e0bd6/hi-res/FB70001.jpg?sw=550"
  },
  {

    "name": "HYDRATING + SOFT MATTE COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 40,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw5ce4f22d/hi-res/universalfoundationessentialsbrush.jpg?sw=550"
  },
  {

    "name": "HYDRATING + SOFT MATTE COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 45,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw211af97f/hi-res/universalfoundationessentailssponge.jpg?sw=550"
  },
  {

    "name": "PRO FILTR SOFT MATTE LONGWEAR FOUNDATION",
    "price": 100,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw8fdf59b8/hi-res/FB30006_FB0340.jpg?sw=550"
  },
  {

    "name": "SOFT MATTE COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 35,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw57a2fe37/hi-res/Pro-Filtr-Essentials_brush.jpg?sw=550"
  },
  {

    "name": "SOFT MATTE COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 35,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw8fd67f1a/hi-res/Pro-Filtr-Essentials_Sponge.jpg?sw=550"
  },
  {

    "name": "HYDRATING COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 40,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwfb5ef61d/hi-res/pro-filtr-hydrating-foundation-essentials-brush.jpg?sw=550"
  },
  {

    "name": "MATTIFYING COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 35,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw548248bb/hi-res/mattifying-foundation-essentials-brush.jpg?sw=550"
  },
  {

    "name": "PRO FILTR HYDRATING LONGWEAR FOUNDATION",
    "price": 45,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwd2d3cc6e/hi-res/FB30020_FB0340.jpg?sw=550"
  },
  {

    "name": "HYDRATING COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 100,
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw211af97f/hi-res/universalfoundationessentailssponge.jpg?sw=550"
  }
];



let names = ["HYDRATING", "COMPLEXION", "ESSENTIALS", "PRO FILTR", "Foundation", "Esentials", "MATTIFYING", "SOFT MATTE", '+'];

let prices = [20, 30, 35, 45, 55, 65, 90, 150, 42, 69, 82, 2, 3000, 420, 94, 18, 20];


let foregrounds = ["https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwd2d3cc6e/hi-res/FB30020_FB0340.jpg?sw=550", "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw548248bb/hi-res/mattifying-foundation-essentials-brush.jpg?sw=550", "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwfb5ef61d/hi-res/pro-filtr-hydrating-foundation-essentials-brush.jpg?sw=550", "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb53e0bd6/hi-res/FB70001.jpg?sw=550", "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwa03d192d/hi-res/mattifying-foundation-essentials-sponge.jpg?sw=550"];

let randomNameLength = () =>{
  //generates a random product name that has one word up to 6 words
  let random = Math.floor(Math.random() * 6) + 1;
  let randoName = '';

  for (let i = 0; i < random; i++) {
    output + ' ' + names[Math.floor(Math.random() * Math.floor(names.length))];
  }

  console.log(randoName);

  return randoName;
};

let createMockProduct = () =>{
  let product = {};
  product["name"] = names[Math.floor(Math.random() * Math.floor(names.length))] + ' ' + names[Math.floor(Math.random() * Math.floor(names.length))] + ' ' + names[Math.floor(Math.random() * Math.floor(names.length))];
  product["price"] = prices[Math.floor(Math.random() * Math.floor(prices.length))];
  product["foreground-src"] = foregrounds[Math.floor(Math.random() * Math.floor(foregrounds.length))];

  return product;
};


const createProducts = () => {
  let productsArr = [];
  for (let i = 0; i < 89; i++) {
    productsArr.push(createMockProduct());
  }
  return productsArr;
};

let mock = createProducts();


var products = foundation.concat(mock);


var seedDb = () =>{

  let queries = [];

  for (let i = 0; i < products.length; i++) {

    let query = `INSERT INTO products (name, price, foreground) VALUES ('${products[i]["name"]}', ${products[i]["price"]}, '${products[i]["foreground-src"]}');`;


    db.query(query);

  }

};

seedDb();






