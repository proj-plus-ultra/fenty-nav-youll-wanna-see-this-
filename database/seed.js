const db = require('./index.js');

let foundation = [
  {

    "name": "MATTIFYING COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 35,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL SKIN TONES.SKIN-SMOOTHING, LIGHT AS AIR LONGWEAR.",
    "rating": 4.5,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3341728d/product-bg/Master-Pro-Filtr-Essentials_BG.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwa03d192d/hi-res/mattifying-foundation-essentials-sponge.jpg?sw=550",
    "bg_color": "#d99960"
  },
  {

    "name": "CUSTOM MATCH STIX TRIO",
    "price": 39,
    "color": "Ivory\nWarm",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 4.2,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb3ac0dec/product-bg/bulk-match-stix-trio.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb53e0bd6/hi-res/FB70001.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "HYDRATING + SOFT MATTE COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 40,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 3.2,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3ff8aaa5/product-bg/universalfoundationessentials_model.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw5ce4f22d/hi-res/universalfoundationessentialsbrush.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "HYDRATING + SOFT MATTE COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 45,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 4.1,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3ff8aaa5/product-bg/universalfoundationessentials_model.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw211af97f/hi-res/universalfoundationessentailssponge.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "PRO FILTR SOFT MATTE LONGWEAR FOUNDATION",
    "price": 100,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.",
    "rating": 4.6,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwbaad3c3d/product-bg/FB30006_FB0340_MODEL.jpg?sw=600",
    "foreground-src": "/on/demandware.static/-/Sites-itemmaster_FNT/default/dw8fdf59b8/hi-res/FB30006_FB0340.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "SOFT MATTE COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 35,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 2.1,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3341728d/product-bg/Master-Pro-Filtr-Essentials_BG.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw57a2fe37/hi-res/Pro-Filtr-Essentials_brush.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "SOFT MATTE COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 35,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 3.4,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3341728d/product-bg/Master-Pro-Filtr-Essentials_BG.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw8fd67f1a/hi-res/Pro-Filtr-Essentials_Sponge.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "HYDRATING COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 40,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 3.0,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw1cb95b57/product-bg/hydratingfoundationessentials_model.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwfb5ef61d/hi-res/pro-filtr-hydrating-foundation-essentials-brush.jpg?sw=550",
    "bg_color": "#e4ab64"
  },
  {

    "name": "MATTIFYING COMPLEXION ESSENTIALS WITH BRUSH",
    "price": 35,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 3,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3341728d/product-bg/Master-Pro-Filtr-Essentials_BG.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw548248bb/hi-res/mattifying-foundation-essentials-brush.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "PRO FILTR HYDRATING LONGWEAR FOUNDATION",
    "price": 45,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL SKIN TONES.",
    "rating": 4,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw9d46d74e/product-bg/FB30020_FB0340_model.jpg?sw=600",
    "foreground-src": "/on/demandware.static/-/Sites-itemmaster_FNT/default/dwd2d3cc6e/hi-res/FB30020_FB0340.jpg?sw=550",
    "bg_color": "#9b582b"
  },
  {

    "name": "HYDRATING COMPLEXION ESSENTIALS WITH SPONGE",
    "price": 100,
    "color": "#340\nFor tan skin with cool undertones",
    "description": "MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR, LIGHT AS AIR.",
    "rating": 5.0,
    "background-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw1cb95b57/product-bg/hydratingfoundationessentials_model.jpg?sw=600",
    "foreground-src": "https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw04883e00/hi-res/HYDRATINGSPONGE_model.jpg?sw=550",
    "bg_color": "#9b582b"
  }
];



let names = ["HYDRATING", "COMPLEXION", "ESSENTIALS", "PRO FILTR", "Foundation", "Esentials", "MATTIFYING"];

let prices = [20,30,35,45,55,65,90,150];

let colors = ["#340","#100","#105","#110","#120","#130","#140","#145","#150","#160","#170","#180","#185","#190","#200","#210","#220","#230","#235","#240","#250","#255","#260","#270","#280","#290","#300","#310","#320","#330","#340","#345","#350","#360","#370","#380","#385","#390","#400","#410","#420","#430","#440","#445","#450","#460","#470","#480","#490","#495","#498","#100","#105","#110","#120","#130","#140","#145","#150","#160","#170","#180","#185","#190","#200","#210","#220","#230","#235","#240","#250","#255","#260","#270","#280","#290","#300","#310","#320","#330","#340","#345","#350","#360","#370","#380","#385","#390","#400","#410","#420","#430","#440","#445","#450","#460","#470","#480","#490","#495","#498","#100","#105","#110","#120","#130","#140","#145","#150","#160","#170","#180","#185","#190","#200","#210","#220","#230","#235","#240","#250","#255","#260","#270","#280","#290","#300","#310","#320","#330","#340","#345","#350","#360","#370","#380","#385","#390","#400","#410","#420","#430","#440","#445","#450","#460","#470","#480","#490","#495","#498"];

let descirptions = ["MEDIUM TO FULL COVERAGE FOR ALL.LONGWEAR", "LIGHT AS AIR.","MEDIUM TO FULL COVERAGE FOR ALL SKIN TONES."];

let ratings = [1.0,2.0,2.5,3.0,3.5,4.0,4.2,4.5,5.0];

let background = ["https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw1cb95b57/product-bg/hydratingfoundationessentials_model.jpg?sw=600","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw9d46d74e/product-bg/FB30020_FB0340_model.jpg?sw=600","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3341728d/product-bg/Master-Pro-Filtr-Essentials_BG.jpg?sw=600","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb3ac0dec/product-bg/bulk-match-stix-trio.jpg?sw=600","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3341728d/product-bg/Master-Pro-Filtr-Essentials_BG.jpg?sw=600","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw3ff8aaa5/product-bg/universalfoundationessentials_model.jpg?sw=600"];

let foregrounds = ["https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwd2d3cc6e/hi-res/FB30020_FB0340.jpg?sw=550","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw548248bb/hi-res/mattifying-foundation-essentials-brush.jpg?sw=550","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwfb5ef61d/hi-res/pro-filtr-hydrating-foundation-essentials-brush.jpg?sw=550","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwb53e0bd6/hi-res/FB70001.jpg?sw=550","https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dwa03d192d/hi-res/mattifying-foundation-essentials-sponge.jpg?sw=550"];

let bgColors = ["#fdcfad","#ffdca6","#fdd1b0","#fdd4b3","#ebc08c","#e2b681","#eac188","#d7a880","#e9ac85","#e0ab87","#e2a978","#fcd6b3","#e0ad7f","#e3ac7f","#f0b98f","#dba47b","#dba47e","#e9ac66","#d3a076","#d99960","#e4ab64","#d6a07b","#c8865b","#c88759","#c88859","#c89163","#d1915f","#cd8e63","#d2955e","#a16c48","#c88e51","#b77b45","#af7946","#c58462","#c6845d","#b57a39","#a6693d","#a35c28","#a56031","#b3733d","#8a522d","#9b582b","#8f5825","#875430","#82472f","#764328","#6c3d24","#64371b","#572b18","#42302a","#fdcfad","#ffdca6","#fdd1b0","#fdd4b3","#ebc08c","#e2b681","#eac188","#d7a880","#e9ac85","#e0ab87","#e2a978","#fcd6b3","#e0ad7f","#e3ac7f","#f0b98f","#dba47b","#dba47e","#e9ac66","#d3a076","#d99960","#e4ab64","#d6a07b","#c8865b","#c88759","#c88859","#c89163","#d1915f","#cd8e63","#d2955e","#a16c48","#c88e51","#b77b45","#af7946","#c58462","#c6845d","#b57a39","#a6693d","#a35c28","#a56031","#b3733d","#8a522d","#9b582b","#8f5825","#875430","#82472f","#764328","#6c3d24","#64371b","#572b18","#42302a","#fdcfad","#ffdca6","#fdd1b0","#fdd4b3","#ebc08c","#e2b681","#eac188","#d7a880","#e9ac85","#e0ab87","#e2a978","#fcd6b3","#e0ad7f","#e3ac7f","#f0b98f","#dba47b","#dba47e","#e9ac66","#d3a076","#d99960","#e4ab64","#d6a07b","#c8865b","#c88759","#c88859","#c89163","#d1915f","#cd8e63","#d2955e","#a16c48","#c88e51","#b77b45","#af7946","#c58462","#c6845d","#b57a39","#a6693d","#a35c28","#a56031","#b3733d","#8a522d","#9b582b","#8f5825","#875430","#82472f","#764328","#6c3d24","#64371b","#572b18","#42302a"];

var createMockProduct = () =>{
  let product = {}
  product["name"] = names[Math.floor(Math.random() * Math.floor(names.length))] + ' ' + names[Math.floor(Math.random() * Math.floor(names.length))] + ' ' + names[Math.floor(Math.random() * Math.floor(names.length))];
  product["price"] = prices[Math.floor(Math.random() * Math.floor(prices.length))];
  product["color"] = colors[Math.floor(Math.random() * Math.floor(colors.length))];
  product["description"] = descirptions[Math.floor(Math.random() * Math.floor(descirptions.length))];
  product["rating"] = ratings[Math.floor(Math.random() * Math.floor(ratings.length))];
  product["background-src"] = background[Math.floor(Math.random() * Math.floor(background.length))];
  product["foreground-src"] = foregrounds[Math.floor(Math.random() * Math.floor(foregrounds.length))];
  product["bg_color"] = bgColors[Math.floor(Math.random() * Math.floor(bgColors.length))];

  return product;
};


const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 9; i++){
    productsArr.push(createMockProduct())
  }
  return productsArr
}

let mock = createProducts();

//adds 9 randomly generated products to  array of products
var products = foundation.concat(mock);
console.log(products)

var seedDb = () =>{


  for(let i = 0; i < products.length; i++){
    //console.log(products20[i]["name"])
    console.log(products[i])
    let query = `INSERT INTO products (name, price, color, category, descrip, rating, background, foreground, bg_color) VALUES ('${products[i]["name"]}', ${products[i]["price"]}, '${products[i]["color"]}', 'foundation', '${products[i]["description"]}', ${products[i]["rating"]}, '${products[i]["background-src"]}', '${products[i]["foreground-src"]}', '${products[i]["bg_color"]}');`;


    db.query(query);


  }


  /*products.map((product) =>{
    let query = `INSERT INTO products (name,price,color,category,descrip,rating,background,foreground,bg_color) VALUES ('${product.name}', ${product.price} , '${product.color}', 'Foundation', '${product.description}', '${product.rating}') `
  })
  */
}
seedDb();
//console.log(products20);





