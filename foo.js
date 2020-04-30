//script to get all hex values for each color picker in foundations, there was 150 different!!
let colors = document.getElementsByClassName('hexa');

let results = [];

for(let i = 0; i < colors.length;i++){
    let hex = colors[i].style.backgroundColor;
    results.push(hex);
}

let foo = []

//gets rid of rgb and makes it just the number
results.map((value) =>{
  let temp = value.split("(")[1].split(")")[0];

  temp = temp.split(",");

  foo.push(temp);
})

let foobar = [];

for(let i = 0; i < foo.length;i++){
  let bar = foo[i].map((value)=>{
    value = parseInt(value).toString(16);
    return (value.length === 1) ? "0"+ value : value;
  })
  foobar.push("#" + bar.join(""));
}

console.log(JSON.stringify(foobar));

